import React from "react";
import Image from "../components/Image";

const ImgPage = () => {
   return (
      <>
         <Image src = {'/image/img.jpeg'} alt = {'image'} width={300} height={300} circle = {false} className = 'imgCircle'/>
      </>
   )
}

export default ImgPage