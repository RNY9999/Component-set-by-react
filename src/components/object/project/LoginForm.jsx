// import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

// import Button from '../component/Button';
// import Form from '../component/Form';

// import { handleInputChange } from '../../localLibrary/formLib';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    console.log(`errors:${isValid}`);
    return (
    <>
        <form className='login-form' action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="userName">ユーザーネーム</label>
            <input className='login-form__user-name' id='userName' type="text" {
                ...register('userName', {
                    required: 'required user name',
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
            <input className='login-form__user-pass' id='userPassword'   type="password" {...register('userPassword', {required: 'required password'})}/>
            <p>
                {errors?.userPassword?.message}
            </p>
            {console.log(errors.userPassword)}
            <button className='login-form__submit' type='submit' disabled={!isValid}>ログイン</button>
        </form>
    </>
    )
}

export default LoginForm
