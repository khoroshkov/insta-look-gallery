import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("ModalWindow_backdrop__xtyMn")) {
      console.log("click");
      setSelectedImg(null);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      setSelectedImg(null);
      window.removeEventListener("keyup", handleKeyUp, false);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
  });

  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default ModalWindow;
