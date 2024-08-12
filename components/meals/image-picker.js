"use client";

import classes from "./image-picker.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickerImage, setPickerImage] = useState();
  const imageInputRef = useRef();
  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickerImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickerImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickerImage && <p>No image picked yet.</p>}
          {pickerImage && (
            <Image src={pickerImage} alt="Img Not Availabe" fill />
          )}
        </div>
        <input
          style={{ display: "none" }}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          {" "}
          Pick an Image
        </button>
      </div>
    </div>
  );
}
