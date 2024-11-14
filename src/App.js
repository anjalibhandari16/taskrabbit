import React,{useState} from 'react';
import './App.css';
import Registration from './component/Registration';
import UserProfile from './component/UserProfile';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">

      {!isLogin ? 
      <Registration setIsLogin={setIsLogin} /> :
      <UserProfile setIsLogin={setIsLogin}/>
    }
    </div>
  );
}

export default App;
