import { useRef } from "react"
import inputType from "../../types/inputType"
import { emailTyp, isEmail } from "../../types/accountType"

const Input = ({typ, increaseFun}: inputType) => {

    const refInput = useRef<HTMLInputElement>(null)

    return <label htmlFor={typ+"ID"}>{typ}: <input id={typ+"ID"} ref={refInput} type={typ} onChange={()=>{

        const v = refInput.current!.value

        if(typ != "Date" && typ != "email")
        {
            increaseFun(v)
            return;
        }

        if(typ == "email"){
            if(isEmail(v)){
                increaseFun(v)
                return;
            }
            return;
        }

        increaseFun(new Date(v))


    }} /></label>
}

export default Input