import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

export function ImagePicker() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button 
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="group w-60 m-2 btn  bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... " 
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} className="group w-60 m-2 btn  bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... " >Remove all images</button>
            {imageList.map((image, index) => (
              <div className=" mx-auto bg-primary p-3 my-2 rounded-lg mb-6">

              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="500" />
                <div className="image-item__btn-wrapper">
                  <button className="group w-20 m-2 btn  "  onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="group w-20 m-2 btn  "  onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
