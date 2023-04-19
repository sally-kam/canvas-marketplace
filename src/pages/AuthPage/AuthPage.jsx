import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <div>Welcome to Creative Commerce</div>
    <main className="AuthPage">
      <div>
        <div onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
          'SIGN UP' : 
          'LOG IN'}
          </div>
      </div>
      <div>
      {showLogin ? 
      <LoginForm setUser={setUser} /> : 
      <SignUpForm setUser={setUser} />}
      </div>
    </main>
    </>
  );
}