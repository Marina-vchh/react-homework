import React from "react";
import './button.css';

interface IButtonProps {
   text: string;
   className: string;
   disabled: boolean
   onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({text, className, disabled, onClick}: IButtonProps) => {
   const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
      } else {
        return onClick(e);
      }
   }
   return (
      <button 
      className={className}
      disabled={disabled}
      onClick={onClickAction}>
      {text}
      </button>
   )
};

export default Button