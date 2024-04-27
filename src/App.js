// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Chat from './components/object/project/Chat';
import LoginForm from './components/object/project/LoginForm';
import WelcomePage from './components/object/project/WelcomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/chat' element={<Chat />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
