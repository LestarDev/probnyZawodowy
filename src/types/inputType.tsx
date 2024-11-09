import { emailTyp } from "./accountType"

export type stateDateType = React.Dispatch<React.SetStateAction<Date>>
export type stateStringType = React.Dispatch<React.SetStateAction<string>>
export type stateEmailType = React.Dispatch<React.SetStateAction<emailTyp>>

type inputType = {
    typ: "Date",
    increaseFun: stateDateType
} | {
    typ: "login" | "password",
    increaseFun: stateStringType
} | {
    typ: "email",
    increaseFun: stateEmailType
}


export default inputType