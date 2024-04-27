// import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './css/loginForm.css';

// import Button from '../component/Button';
// import Form from '../component/Form';

// import { handleInputChange } from '../../localLibrary/formLib';


const LoginForm = () => {
    // const history = useHistory();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({mode: onchange});

    const onSubmit = (data) => {
        // history.pushState('/chat');
        console.log(data);
    };
    // console.log(`errors:${isValid}`);
    // console.log(watch("example"));

    return (
    <>
        <form className='login-form' action="/chat" method="get" onSubmit={handleSubmit(onSubmit)}>
        {/* <form className='login-form' action="/chat" method="post" onChange={handleSubmit(onSubmit)}> */}
            <label htmlFor="userName">ユーザーネーム</label>
            <input
                className='login-form__user-name' 
                id='userName' 
                type="text" {
                ...register('userName', {
                    required: 'ユーザーネームを入力してください。',
                    minLength: {
                        value: 4,
                        message: '4文字以上で入力してください。'
                    },
                    maxLength: {
                        value: 16,
                        message: '16文字以下で入力してください。'
                    }
                })
            }/> 
            <p>
                {errors?.userName?.message}
            </p>
            <label htmlFor="userPassword">パスワード</label>
            <input 
                className='login-form__user-pass' 
                id='userPassword'
                type="password" {
                    ...register('userPassword', {
                        required: 'パスワードを入力してください。   '
                    })
                }
            />
            <p>
                {errors?.userPassword?.message}
            </p>
            <button className='login-form__submit' type='submit' disabled={!isValid}>ログイン</button>
        </form>
    </>
    )
}

export default LoginForm
