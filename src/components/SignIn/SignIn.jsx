/* eslint-disable no-useless-escape */
import { useForm } from 'react-hook-form';
import '../Form.css';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  requiredErrorMessage,
  emailValidationErrorMessage,
  passwordValidationErrorMessage,
  defaultErrorMessage,
} from '../../constants/auth';

const SignIn = ({ onSignIn, tipText, formToBeDisabled }) => {
  const submitButtonRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (errors?.email || errors?.password) {
      submitButtonRef.current.setAttribute('disabled', 'true');
    } else {
      submitButtonRef.current.removeAttribute('disabled', 'true');
    }
  }, [errors.email, errors.password]);

  const onSubmit = (formData) => {
    onSignIn({ email: formData.email, password: formData.password });
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3 className='form__title'>Рады видеть!</h3>
      <label className='form__label' htmlFor='signin-email'>
        E-mail
      </label>
      <input
        id='signin-email'
        className={`form__input ${errors?.email && 'form__input_invalid'}`}
        name='email'
        type='text'
        required
        {...register('email', {
          required: requiredErrorMessage,
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: emailValidationErrorMessage,
          },
        })}
      />
      <p className={`form__error ${errors?.email && 'form__error_active'}`}>
        {errors?.email && (errors?.email?.message || defaultErrorMessage)}
      </p>
      <label className='form__label' htmlFor='signin-password'>
        Пароль
      </label>
      <input
        id='signin-password'
        className={`form__input ${errors?.password && 'form__input_invalid'}`}
        name='password'
        type='password'
        required
        {...register('password', {
          required: requiredErrorMessage,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            message: passwordValidationErrorMessage,
          },
        })}
      />
      <p className={`form__error ${errors?.password && 'form__error_active'}`}>
        {errors?.password && (errors?.password?.message || defaultErrorMessage)}
      </p>
      <div className='form__container form__container_sign-in'>
        <p className='form__tip'>{tipText}</p>
        <button
          ref={submitButtonRef}
          className='form__submit-btn'
          type='submit'
          disabled={formToBeDisabled ? true : false}
        >
          Войти
        </button>
      </div>
      <p className='form__yet'>
        Ещё не зарегистрированы?
        <NavLink className='form__link' to='/signup'>
          Регистрация
        </NavLink>
      </p>
    </form>
  );
};

export default SignIn;
