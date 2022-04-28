import React from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import './form.css'

const Form = () => {
   return (
      <div className="body">
         <form className="form">
            <Input id={'name'} label = {'имя'} className={'label'} type={'text'}/>
            <Input id={'tel'} label = {'телефон'} className={'label'} type={'tel'}/>
            <Input id={'mail'} label = {'почта'} className={'label'} type={'email'}/>
            <Button text={'подтвердить'} className={'button submit'} disabled={true} onClick={()=>{}}/>
            <Button text={'получить консультацию'} className={'button getConsultation'} disabled={false} onClick={()=>{}}/>
            <Checkbox/>
         </form>
      </div>
   )
}

export default Form