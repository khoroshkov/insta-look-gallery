import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="title">
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        InstaGram gallery
      </motion.h1>
      <motion.h2
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 2 }}
      >
        Nick Khoroshkov <strong>Photography</strong>
      </motion.h2>
      <p>Simple instagram look photo gallery</p>
    </div>
  );
};

export default Title;
