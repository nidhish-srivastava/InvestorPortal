import Button from "../Button"
import Image from "next/image"
import PrevIcon from "../Icons/PrevIcon";
import { useRef, useState } from "react";
import Compress from "react-image-file-resizer";

function PhotoKYC({setValue,image,setImage}) {
  const fileInputRef = useRef(null)
  const [imagePreview,setImagePreview] = useState("")

  const uploadImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can perform additional checks here if needed, like file size or type validation
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        // onFileResize()

        //* Below it the functionality of on FileResize function which we trigger if we choose a file using input type equals file
        Compress.imageFileResizer(
          file, // the file from input
          480, // width
          480, // height
          "JPEG", // compress format WEBP, JPEG, PNG
          70, // quality
          0, // rotation
          (uri) => {
            // console.log(uri);
            // You upload logic goes here
            // console.log("uri", uri);
            setImagePreview(uri);
          },
          "base64" // blob or base64 default base64
        );
      };
      reader.readAsDataURL(file);
      // Now you can handle this selected file, maybe convert it to Base64 or upload to a server
    }
  };
  return (
    <>
      <PrevIcon setValue={setValue} number={30}/>
        <h2 className="text-blue-700 text-center font-semibold text-2xl mb-12">Click a live photo</h2>
        <div className="text-center">
        <input
        ref={fileInputRef}
        type="file"
        accept="image/*" // Accept all image file types
        className="hidden"
        onChange={handleFileChange}
      />
      <Image
      src={imagePreview}
      className={`${imagePreview=="" ? 'hidden': ''} mx-auto w-[90%] my-4`}
      alt="img-preview"
      width={200}
      height={200}
      />
        {
          image?.name?.length >1 ? 
          <Button className={`w-[45%]`} onClick={()=>setValue(50)}>Next</Button>
          : 
          <Button onClick={uploadImage} className={`w-[45%]`}>Upload</Button>
        }
          <h2 className="mt-2 text-sm text-gray-700">
          {image?.name && `Selected File: ${image?.name}`}
        </h2>
        </div>
    </>
  )
}

export default PhotoKYC