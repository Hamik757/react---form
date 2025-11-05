import  { useState } from 'react';

function MyFormWithUseState() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e:any) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e:any) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({ firstName, lastName, email });
    // Այստեղ կատարվում է ֆորմայի ներկայացման տրամաբանությունը
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Անուն:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Ազգանուն:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Էլ. փոստ:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Ներկայացնել</button>
    </form>
  );
}

export default MyFormWithUseState;