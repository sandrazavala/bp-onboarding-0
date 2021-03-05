import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {


  const [users, setUsers] = useState([
    {name: "Mickey Minach", message: "okurr", likes: "666"},
    {name: "Thanos", message: "I am inevitable", likes:"699"},
    {name: "Frank Ocean", message: "A potato flew around my room b4 u came", likes: "1000"}
  ])

  
  return (
    <div className = "app">
      {users.map(user => (
       <Tweet name = {user.name} message = {user.message} likes = {user.likes}/> 
      ))}
    </div>
  );
}

export default App;
