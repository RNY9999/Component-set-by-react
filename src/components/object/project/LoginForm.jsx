import React, { useState } from 'react';

import Button from '../component/Button';
import Form from '../component/Form';

import { handleInputChange } from '../../localLibrary/formLib';

const LoginForm = () => {
    const [userName, setUserName] = useState('初期値');
  return (
    <>
        <div>{userName}</div>
        <form action="" className='login-form'>
            <Form
                type="text"
                className="login-form__user-name"
                setUserName={setUserName}
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                className="login-form__submit"
                text="ログイン"
            />
        </form>
    </>
  )
}

export default LoginForm
