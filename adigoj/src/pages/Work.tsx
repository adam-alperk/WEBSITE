// Work.tsx
import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your Work page content */}
      <h1>Work</h1>
    </motion.div>
  );
};

export default Work;
