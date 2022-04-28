import React from "react";
import './input.css'

interface IInputProps {
   id: string,
   label: string,
   className: string,
   type: string
}

const Input = ({id, label, className, type}: IInputProps) => {
   return (
      <>
         <label htmlFor={id} className={className}>{label}
            <input 
            id={id} 
            type={type}
            className={'input'}
            ></input>
         </label>
      </>
   )
}

export default Input