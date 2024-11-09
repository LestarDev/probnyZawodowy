import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import accountType, { emailTyp, extendedAccoutnType } from './types/accountType'
import Form from './components/Form/Form'
import { inicjalDate } from './config/inicjal'

function App() {

  
  const inicjalEmail: emailTyp = "example@x.com"

  const [loginVal, setLoginVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [birthVal, setBirthVal] = useState(inicjalDate);
  const [emailVal, setEmailVal] = useState(inicjalEmail);
  const [isExtended, setIsExtended] = useState(false);

  return (
    <>
    <h1>Rejestruj Konto</h1>
      <Form dateOfBirthFunc={setBirthVal} passwordFunc={setPasswordVal} loginFunc={setLoginVal} emailFunc={setEmailVal} extension={{
        isExpended: isExtended,
        setIsExpended: setIsExtended
      }} />

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

    </>
  )
}

export default App
