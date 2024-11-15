import incresedFuncsType from "../../types/formType"
import Input from "../Input/Input"

const Form = ({dateOfBirthFunc, passwordFunc, loginFunc, emailFunc, extension, addKonto}: incresedFuncsType) => {

    

    return <form onSubmit={(e)=>{
        e.preventDefault()
        addKonto();
    }}>
        <Input typ="login" increaseFun={loginFunc} key={crypto.randomUUID()} />
        <Input typ="password" increaseFun={passwordFunc} key={crypto.randomUUID()} />
        <Input typ="email" increaseFun={emailFunc} key={crypto.randomUUID()} />
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