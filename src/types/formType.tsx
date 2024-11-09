import accountType, { extendedAccoutnType } from "./accountType"
import { stateDateType, stateEmailType, stateStringType } from "./inputType"

// type mutableKey<key extends string> = Omit<>

// type x = {[Key in keyof extendedAccoutnType as (Key)]: extendedAccoutnType[Key]}

// type y = Record<keyof accountType, accountType[keyof accountType]>

type typToReactState<T> = (value: React.SetStateAction<T>)=>void

type incresedFuncsType = {[Key in keyof extendedAccoutnType as (Key extends "id" ? never : `${Key}Func`)]: typToReactState<extendedAccoutnType[Key]>} & {
    extension: {
        isExpended: boolean,
        setIsExpended: typToReactState<boolean>
    }
}

// type incresedFuncsType = {
//         textFunc: stateStringType,
//         passwordFunc: stateStringType,
//         dateFunc: stateDateType,
//         emailFunc: stateEmailType,
//     }

export default incresedFuncsType