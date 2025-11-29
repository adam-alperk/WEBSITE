// scripts/generate-music-manifest.cjs
const fs = require("fs");
const path = require("path");

const musicDir = path.join(__dirname, "..", "public", "music");
const outFile = path.join(musicDir, "manifest.json");

if (!fs.existsSync(musicDir)) {
  console.error("No public/music folder found at:", musicDir);
  process.exit(1);
}

const files = fs.readdirSync(musicDir);

const audioExts = [".mp3", ".wav", ".aac", ".ogg", ".m4a"];
const imageExts = [".webp", ".png", ".jpg", ".jpeg"];

const audios = files.filter((f) =>
  audioExts.includes(path.extname(f).toLowerCase()),
);
const images = files.filter((f) =>
  imageExts.includes(path.extname(f).toLowerCase()),
);

function parseIndexAndTitle(fname) {
  const base = path.basename(fname);
  const ext = path.extname(base); // get extension from the filename
  const m = base.match(/^(\d+)_?(.*)$/);
  if (!m) return { idx: null, rest: base };
  const idx = parseInt(m[1], 10);
  // m[2] may include the extension (e.g. "Carnival.mp3"), so remove ext
  const restWithExt = m[2] || "";
  const rest = restWithExt.endsWith(ext)
    ? restWithExt.slice(0, -ext.length)
    : restWithExt;
  return { idx, rest };
}

const mapByIndex = {};

// process audios
audios.forEach((a) => {
  const { idx, rest } = parseIndexAndTitle(a);
  if (idx == null) return;
  const key = String(idx);
  if (!mapByIndex[key]) mapByIndex[key] = {};
  const title = (rest || a.replace(path.extname(a), "")).replace(/^_+/, "");
  mapByIndex[key].audio = `/music/${a}`;
  mapByIndex[key].title = title;
});

// process images
images.forEach((img) => {
  const m = img.match(/^(\d+)_?(.*)$/);
  if (!m) return;
  const key = String(parseInt(m[1], 10));
  if (!mapByIndex[key]) mapByIndex[key] = {};
  mapByIndex[key].cover = `/music/${img}`;
});

// convert to sorted array
const entries = Object.keys(mapByIndex)
  .map((k) => {
    const e = mapByIndex[k];
    return {
      index: parseInt(k, 10),
      title: e.title || `Track ${k}`,
      url: e.audio || null,
      cover: e.cover || null,
    };
  })
  .filter((e) => e.url) // require audio
  .sort((a, b) => a.index - b.index);

fs.writeFileSync(outFile, JSON.stringify(entries, null, 2), "utf8");
console.log(`Wrote ${entries.length} entries to ${outFile}`);
