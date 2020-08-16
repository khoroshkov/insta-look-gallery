import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ShowFile from "../ShowFile/ShowFile";
import ProgressBar from "../ProgressBar/ProgressBar";
import { motion } from "framer-motion";
import styles from "./uploadForm.module.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(" ");
    } else {
      setFile(null);
      setError("Please select an image file (.jpeg or .png format only)");
    }
  };

  return (
    <form>
      <label>
        <motion.div className={styles.parent} whileHover={{ scale: 1.1 }}>
          <input type="file" onChange={changeHandler} />
          <motion.div layout className={styles.child} />
        </motion.div>
      </label>
      <div className={styles.output}>
        {error && <ErrorMessage errorText={error} />}
        {file && <ShowFile fileName={file.name} />}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
