import LoginForm from './components/ReactHookForm'
import  MyFormWithUseState from './components/ControlerForm'
import ContactForm from './components/ContactForm.jsx'
import { User } from './components/User/index.js'

function App() {
  const handleClick=()=>{
    console.log("handleClick")
  }
  return (
    <>
    <LoginForm/>
    <MyFormWithUseState/>
    <ContactForm/>
    <User username="Vahan" title="userdata" age={41} status={true} handleClick={handleClick}  />
    </>
  )
}

export default App


