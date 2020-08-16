import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
import styles from "./ImageLayout.module.css";

const ImageLayout = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className={styles.imgGrid}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 2 }}
            className={styles.imgWrap}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageLayout;
