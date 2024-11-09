import { useState } from "react"
import incresedFuncsType from "../../types/formType"
import formComponents from "../../types/formType"
import Input from "../Input/Input"

const Form = ({dateOfBirthFunc, passwordFunc, loginFunc, emailFunc, extension}: incresedFuncsType) => {

    

    return <form onSubmit={(e)=>e.preventDefault()}>
        <Input typ="login" increaseFun={loginFunc} />
        <Input typ="password" increaseFun={passwordFunc} />
        <Input typ="email" increaseFun={emailFunc} />
        {
            extension.isExpended ?  <Input typ="Date" increaseFun={dateOfBirthFunc} /> : ''
        }
        
        <div>
            <input type="submit" />
            <input type="checkbox" onClick={()=>extension.setIsExpended(!extension.isExpended)} />
        </div>
    </form>
}

export default Form