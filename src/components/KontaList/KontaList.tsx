import { useEffect, useState } from "react"
import { KontaListType } from "../../types/accountType"

const KontaList = ({list}: KontaListType<true>) => {

    const [listHTML, setListHTML] = useState<JSX.Element[]>([]);

    useEffect(()=>{
        setListHTML([])
        list.filter(u=>u.id!=2).forEach((v,i)=>{
            setListHTML(prev=>[...prev, <div>
                {i}
                {v.login}: {v.email}
            </div>])
        })
    },[list])

    return <div>
        {
            listHTML
        }
    </div>
}

export default KontaList