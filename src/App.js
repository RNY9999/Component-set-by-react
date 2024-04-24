// import logo from './logo.svg';
import './App.css';

import LoginForm from './components/object/project/LoginForm';

function App() {
  // const [userName, setUserName] = useState('empty');

  // async function handleUserNameChange(e) {
  //   e.preventDefault();
  //   const loginForm = document.getElementsByClassName('login-form__user-name')[0];
  //   console.log(loginForm.value);

  //   loginForm.addEventListener('input', () => {
  //     setUserName(loginForm.value);
  //   });
    // setUserName(e.value);
  // }
  return (
    <>
      {/* <div>{ userName }</div> */}
      {/* <form className='login-form'>
        <input className='login-form__user-name' type='text' onChange={handleUserNameChange}></input>
        <input className='login-form__user-password' type='password'></input>
        <button className='login-form__submit-button'>ログイン</button>
      </form> */}
      <LoginForm />
    </>
  );
}

export default App;
