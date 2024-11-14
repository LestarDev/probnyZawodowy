import { useState } from 'react'
import './App.css'
import { KontaListType, emailTyp, extendedAccoutnType } from './types/accountType'
import Form from './components/Form/Form'
import { inicjalDate } from './config/inicjal'
import KontaList from './components/KontaList/KontaList'

function App() {

  
  const inicjalEmail: emailTyp = "example@x.com"

  const [loginVal, setLoginVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [birthVal, setBirthVal] = useState(inicjalDate);
  const [emailVal, setEmailVal] = useState(inicjalEmail);
  const [isExtended, setIsExtended] = useState(false);
  const [konta, setKonta] = useState<KontaListType<true>["list"]>([])

  const [id, setID] = useState(0);

  const AddAccount = () => {
    const acc: extendedAccoutnType = {
      id: id,
      dateOfBirth: birthVal,
      email: emailVal,
      login: loginVal,
      password: passwordVal
    }
    setKonta(prev=>[...prev, acc])
    setID(p=>p+1)
  }

  return (
    <>
    <h1>Rejestruj Konto</h1>
      <Form dateOfBirthFunc={setBirthVal} passwordFunc={setPasswordVal} loginFunc={setLoginVal} emailFunc={setEmailVal} extension={{
        isExpended: isExtended,
        setIsExpended: setIsExtended
      }} addKonto={AddAccount} />

      {
        loginVal!="" && passwordVal!="" && emailVal!=inicjalEmail ?
        <span>
          Hej {emailVal}!
          {
            birthVal!=inicjalDate && isExtended ?
            <p>Wiem, że masz urodziny {birthVal.getDate()}-{birthVal.getMonth()+1}-{birthVal.getFullYear()}</p> : ''
          }
        </span> : ''
      }

      <KontaList list={konta} />

    </>
  )
}

export default App
