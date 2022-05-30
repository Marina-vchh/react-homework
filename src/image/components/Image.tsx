import React from "react";
import './image.css'

interface IImageProps {
   src: string,
   alt: string,
   width: number,
   height: number,
   circle: boolean,
   className: string,
}

const Image = ({...props}: IImageProps) => {
   return (
      <>
         <img
         style={{width: Number(props.width), height: Number(props.height)}}
         src = {props.src} 
         alt = {props.alt}
         className = {props.circle ? 'img' : 'imgCircle'}>
         </img>
      </>
   )
}

Image.defaultProps = {

}

export default Image