// import LoginForm from './components/ReactHookForm'
// import  MyFormWithUseState from './components/ControlerForm'
// import ContactForm from './components/ContactForm.jsx'
// import { User } from './components/User/index.js'

// function App() {
//   const handleClick=()=>{
//     console.log("handleClick")
//   }
//   return (
//     <>
//     <LoginForm/>
//     <MyFormWithUseState/>
//     <ContactForm/>
//     <User username="Vahan" title="userdata" age={41} status={true} handleClick={handleClick}  />
//     </>
//   )
// }

// export default App


import React from "react";
import UserCard from "./UserCard"; // ներմուծում ենք կոմպոնենտը

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TypeScript x React Example</h1>

      {/* Օգտագործում ենք կոմպոնենտը */}
      <UserCard name="Lilit" age={22} isOnline={true} />
      <UserCard name="Aram" age={28} isOnline={false} />
    </div>
  );
}

export default App;