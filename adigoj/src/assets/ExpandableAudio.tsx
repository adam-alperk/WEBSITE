// src/components/ExpandableAudio.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AudioPlayer from "../assets/AudioPlayer";
import { audioDescriptions } from "../data/projectDescriptions";
import "./AudioPlayer.css"; // you already import this

interface ExpandableAudioProps {
  mname: string;
  url: string;
  cover: string;
}

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

const panelVariants = {
  closed: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
  open: {
    height: "auto",
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.28 },
  },
};

const ExpandableAudio: React.FC<ExpandableAudioProps> = ({
  mname,
  url,
  cover,
}) => {
  const [open, setOpen] = useState(false);
  const desc = audioDescriptions[mname] || "";

  return (
    <div style={{ width: "100%" }} className="expandable">
      <AudioPlayer mname={mname} url={url} cover={cover} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
        <motion.button
          className="expand-toggle"
          onClick={() => setOpen((s) => !s)}
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={arrowVariants}
          transition={{ duration: 0.18 }}
          aria-expanded={open}
          aria-controls={`desc-${mname}`}
        >
          <motion.span className="arrow" aria-hidden>
            ▼
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`desc-${mname}`}
            className="expand-description"
            key="panel"
            initial="closed"
            animate="open"
            exit="closed"
            variants={panelVariants}
            style={{
              overflow: "hidden",
              marginTop: 12,
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ padding: 16 }}>
              <div
                className="description-text"
                dangerouslySetInnerHTML={{
                  __html: desc
                    ? desc.replace(/\n/g, "<br/>")
                    : `<em class='muted'>No description added yet.</em>`,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableAudio;
