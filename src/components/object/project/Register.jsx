import React from 'react';
import { useForm } from 'react-hook-form';
import './css/loginForm.css';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isValid},
    } = useForm({mode: onchange});

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <form className='login-form' action="/chat" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">ユーザーネーム</label>
        <input type="text" id='userName' {
            ...register('userName', {
                required: 'ユーザーネームを入力してください'
            })
        }/>
        <p>{errors?.userName?.message}</p>
        <label htmlFor="password">パスワード</label>
        <input type="text" id='password' {
            ...register('password', {
                required: 'パスワードを入力してください。'
            })
        }/>
        <p>{errors?.password?.message}</p>
        <label htmlFor="passwordRe">パスワード（確認）</label>
        <input type="text" id='passwordRe' {
            ...register('passwordRe', {
                required: 'パスワード（確認）を入力してください'
            })
        }/>
        <p>{errors?.passwordRe?.message}</p>
        <button className='login-form__submit' type='submit'>登録</button>
    </form>
  )
}

export default Register
