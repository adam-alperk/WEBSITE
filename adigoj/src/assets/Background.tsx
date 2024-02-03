import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "../App.css";

const Background: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (s: p5) => {
      const isMobile = window.innerWidth <= 768; // Or use the combined touch & width check
      const particleCount = isMobile ? 100 : 400;

      const particles: Particle[] = [];
      let prevMouseX = s.mouseX;
      let prevMouseY = s.mouseY;

      // Determine if the device is touch-enabled
      const isTouchDevice =
        "ontouchstart" in window ||
        (navigator as any).maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(s));
        }
      };

      s.draw = () => {
        s.background(16, 16, 16);

        // Only calculate and apply mouse direction if not a touch device
        if (!isTouchDevice) {
          const mouseDir = s.createVector(
            s.mouseX - prevMouseX,
            s.mouseY - prevMouseY,
          );
          particles.forEach((p) => {
            p.applyForce(mouseDir);
          });
        }

        particles.forEach((p) => {
          p.update();
          p.display();
          // Check for mouse proximity only if not a touch device
          if (!isTouchDevice) {
            p.checkMouse(s.mouseX, s.mouseY);
          }
        });

        prevMouseX = s.mouseX;
        prevMouseY = s.mouseY;
      };

      s.windowResized = () => {
        s.resizeCanvas(s.windowWidth, s.windowHeight);
      };
    };

    const myp5 = new p5(sketch, sketchRef.current!);

    return () => {
      myp5.remove();
    };
  }, []);

  return <div ref={sketchRef} className="background" />;
};

class Particle {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  originalVelocity: p5.Vector; // Store the original velocity
  size: number;

  constructor(s: p5) {
    this.s = s;
    this.position = s.createVector(s.random(s.width), s.random(s.height));
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(s.random(0.1, 0.3));
    this.originalVelocity = this.velocity.copy(); // Initialize the original velocity
    this.size = s.random(0.4, 2);
  }

  update() {
    this.position.add(this.velocity);
    this.edges();
  }

  display() {
    // Glow effect
    for (let i = 3; i > 0; i--) {
      this.s.noStroke();
      // Adjust the RGBA values to change the glow color and intensity
      this.s.fill(150, 150, 200, 40 / i); // Example: light blue glow
      this.s.circle(this.position.x, this.position.y, this.size * i * 1.5);
    }

    // Main particle
    this.s.fill(150); // Original particle color
    this.s.circle(this.position.x, this.position.y, this.size);
  }

  edges() {
    if (this.position.x < 0 || this.position.x > this.s.width) {
      this.velocity.x *= -1;
      this.originalVelocity.x *= -1; // Reflect the original velocity as well
    }
    if (this.position.y < 0 || this.position.y > this.s.height) {
      this.velocity.y *= -1;
      this.originalVelocity.y *= -1; // Reflect the original velocity as well
    }
  }

  checkMouse(mouseX: number, mouseY: number) {
    const mouseVec = this.s.createVector(mouseX, mouseY);
    const dir = p5.Vector.sub(this.position, mouseVec);
    const d = dir.mag(); // Distance from mouse to particle
    if (d < 50) {
      dir.setMag(1); // Speed of avoidance
      this.position.add(dir);
    }
  }

  applyForce(force: p5.Vector) {
    const f = force.copy();
    f.setMag(0.5); // Adjust the magnitude of the force for a more subtle effect
    this.velocity.add(f);

    // Reset the velocity back to original after 0.3 seconds
    setTimeout(() => {
      this.velocity = this.originalVelocity.copy();
    }, 300);
  }
}

export default Background;
