/* eslint-disable no-useless-escape */
import { useForm } from 'react-hook-form';
import '../Form.css';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  requiredErrorMessage,
  minNameLength,
  maxNameLength,
  minNameLengthErrorMessage,
  maxNameLengthErrorMessage,
  emailValidationErrorMessage,
  passwordValidationErrorMessage,
  defaultErrorMessage,
} from '../../constants/auth';

const SignUp = ({ onSignUp, tipText, formToBeDisabled }) => {
  const submitButtonRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (errors?.name || errors?.email || errors?.password) {
      submitButtonRef.current.setAttribute('disabled', 'true');
    } else {
      submitButtonRef.current.removeAttribute('disabled', 'true');
    }
  }, [errors.name, errors.email, errors.password]);

  const onSubmit = (formData) => {
    onSignUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3 className='form__title'>Добро пожаловать!</h3>
      <label className='form__label' htmlFor='signup-name'>
        Имя
      </label>
      <input
        id='signup-name'
        className={`form__input ${errors?.name ? 'form__input_invalid' : ''}`}
        name='name'
        type='text'
        required
        {...register('name', {
          required: requiredErrorMessage,
          minLength: {
            value: minNameLength,
            message: minNameLengthErrorMessage,
          },
          maxLength: {
            value: maxNameLength,
            message: maxNameLengthErrorMessage,
          },
        })}
      />
      <p className={`form__error ${errors?.name ? 'form__error_active' : ''}`}>
        {errors?.name && (errors?.name?.message || defaultErrorMessage)}
      </p>
      <label className='form__label' htmlFor='signup-email'>
        E-mail
      </label>
      <input
        id='signup-email'
        className={`form__input ${errors?.email ? 'form__input_invalid' : ''}`}
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
      <p className={`form__error ${errors?.email ? 'form__error_active' : ''}`}>
        {errors?.email && (errors?.email?.message || defaultErrorMessage)}
      </p>
      <label className='form__label' htmlFor='signup-password'>
        Пароль
      </label>
      <input
        id='signup-password'
        className={`form__input ${
          errors?.password ? 'form__input_invalid' : ''
        }`}
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
      <p
        className={`form__error ${
          errors?.password ? 'form__error_active' : ''
        }`}
      >
        {errors?.password && (errors?.password?.message || defaultErrorMessage)}
      </p>
      <div className='form__container'>
        <p className='form__tip'>{tipText}</p>
        <button
          ref={submitButtonRef}
          className='form__submit-btn'
          type='submit'
          disabled={formToBeDisabled ? true : false}
        >
          Зарегистрироваться
        </button>
      </div>
      <p className='form__yet'>
        Уже зарегистрированы?
        <NavLink className='form__link' to='/signin'>
          Войти
        </NavLink>
      </p>
    </form>
  );
};

export default SignUp;
