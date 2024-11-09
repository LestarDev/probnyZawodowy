export type emailTyp = `${string}@${string}.${string}`

type accountType = {
    email: emailTyp,
    login: string,
    password: string,
    id: number
}

type extendedData = {
    dateOfBirth: Date
}

export type extendedAccoutnType = {[Key in keyof accountType]: accountType[Key]} & {
    [Key in keyof extendedData]: extendedData[Key]
}

export const isEmail = (v: string): v is emailTyp => {
    return v.includes('@') && v.includes('.')
}

// export type extendAccout<t extends accountType> = {[Key in keyof accountType]: accountType[Key]} & {
//     dateOfBirth: Date
// }

// export const extendFuncjion = (ac: accountType, moreInfo: extendedData): extendedAccoutnType => {
//     return {
//         email: ac["email"],
//         id: ac["id"],
//         login: ac["login"],
//         password: ac["password"],
        
//     }
// }

export default accountType