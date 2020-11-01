import './App.css';
import React, {useState} from "react-dom";

const App = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Lakendria McCullough",
      email: "kendra939@gmail.com",
      role: "Full Stack Web Developer "
    }
  ]);

  const addNewMem = (formData) => {
    const newMem = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role
    };
    setMembers([...members, newMem])
  };


  return (
    <div>
      <h1 className="header" >Members</h1>
      <Forms addNewMem={addNewMem}/>
      <Member members={members}/>
    </div>
  )
};

export default App;
