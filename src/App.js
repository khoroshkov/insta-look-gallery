import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm/UploadForm";
import ImageLayout from "./components/ImageLayout/ImageLayout";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageLayout setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ModalWindow
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  );
}

export default App;
