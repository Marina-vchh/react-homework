import React, { useState} from "react";
import './checkbox.css'

interface ICheckboxProps{
  isChecked: boolean,
}

const Checkbox = () => {
   const [isChecked, setIsChecked] = useState(false);

   return(
         <label className="label labelCheckbox">
         <input
         type="checkbox" 
         onChange={() => {
            setIsChecked(!isChecked);
         }}/>
         <span
         className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
         aria-hidden="true">
         </span>
         <span className="checkbox-text">
            Условия политики и пользовательского соглашения
          </span>
      </label>
   )
}

export default Checkbox