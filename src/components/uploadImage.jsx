import { useState } from "react";

export const Upload = () => {
  const [file, setFile] = (useState < File) | (null > null);
  const [message, setMessage] = useState < string > "";

  const handleFileChange = () => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    e.preventDefault();

    if (!file) {
      setMessage("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("FormData:", formData);
      setMessage("File uploaded successfully!");
      setFile(null);
    } catch (error) {
      setMessage("Failed to upload file");
      console.error("Error uploading file:", error);
    }
  };
};
