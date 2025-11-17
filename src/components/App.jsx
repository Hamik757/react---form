import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileCardStyled from "./components/ProfileCardStyled";
import ProfileCardMUI from "./components/ProfileCardMUI";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <ProfileCard
    
      />

      <ProfileCardStyled
     
      />

      <ProfileCardMUI
      
      />

      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Hello from Modal!</h2>
        <p>This is a React Portal modal.</p>
      </Modal>
    </div>
  );
}

export default App;