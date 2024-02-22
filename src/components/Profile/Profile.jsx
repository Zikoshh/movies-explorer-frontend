/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import { NavLink } from 'react-router-dom';
import './Profile.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import CurrentUserContext from '../CurrentUserContext';
import {
  requiredErrorMessage,
  minNameLength,
  maxNameLength,
  minNameLengthErrorMessage,
  maxNameLengthErrorMessage,
  emailValidationErrorMessage,
  defaultErrorMessage,
} from '../../constants/auth';
import { fieldMustBeDifferentErrorMessage } from '../../constants/profile';

const Profile = ({
  onEditProfile,
  onSignOut,
  errorTipText,
  succesTipText,
  formToBeDisabled,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const formRef = useRef();
  const submitButtonRef = useRef();

  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
  }, [currentUser.name, currentUser.email]);

  useEffect(() => {
    if (isEditButtonClicked) {
      if (errors?.name || errors?.email) {
        submitButtonRef.current.setAttribute('disabled', 'true');
      } else {
        submitButtonRef.current.removeAttribute('disabled', 'true');
      }
    }
  }, [errors.name, errors.email]);

  const handleEditButton = () => {
    setIsEditButtonClicked(true);

    formRef.current.name.removeAttribute('disabled');
    formRef.current.email.removeAttribute('disabled');

    setFocus('name');
  };

  const onSubmit = (formData) => {
    onEditProfile({
      name: formData.name,
      email: formData.email,
    });
  };

  return (
    <section className='profile'>
      <form
        ref={formRef}
        className='profile__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='profile__title'>{`Привет, ${
          currentUser.name || ''
        }`}</h2>
        <label className='profile__label'>
          Имя
          <input
            name='name'
            className={`profile__input ${
              errors?.name ? 'profile__input_invalid' : ''
            }`}
            type='text'
            disabled
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
              validate: (value, formValues) =>
                value !== currentUser.name ||
                formValues.email !== currentUser.email ||
                fieldMustBeDifferentErrorMessage,
            })}
          />
        </label>
        <p
          className={`profile__error ${
            errors?.name ? 'profile__error_active' : ''
          }`}
        >
          {errors?.name && (errors?.name?.message || defaultErrorMessage)}
        </p>
        <label
          className={`profile__label ${
            errors?.name ? 'profile__label_invalid' : ''
          }`}
        >
          Почта
          <input
            name='email'
            className={`profile__input ${
              errors?.email ? 'profile__input_invalid' : ''
            }`}
            type='text'
            disabled
            {...register('email', {
              required: requiredErrorMessage,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: emailValidationErrorMessage,
              },
              validate: (value, formValues) =>
                value !== currentUser.email ||
                formValues.name !== currentUser.name ||
                fieldMustBeDifferentErrorMessage,
            })}
          />
        </label>
        <p
          className={`profile__error ${
            errors?.email ? 'profile__error_active' : ''
          }`}
        >
          {errors?.email && (errors?.email?.message || defaultErrorMessage)}
        </p>
        {isEditButtonClicked ? (
          <div className='profile__container'>
            <p
              className={`profile__tip ${
                succesTipText ? 'profile__tip_succes' : 'profile__tip_error'
              }`}
            >
              {succesTipText ? succesTipText : errorTipText}
            </p>
            <button
              ref={submitButtonRef}
              className='profile__submit-btn'
              type='submit'
              disabled={formToBeDisabled ? true : false}
            >
              Сохранить
            </button>
          </div>
        ) : (
          <div className='profile__container'>
            <button
              className='profile__edit-btn'
              type='button'
              onClick={handleEditButton}
            >
              Редактировать
            </button>
            <NavLink className='profile__sign-out' to='/' onClick={onSignOut}>
              Выйти из аккаунта
            </NavLink>
          </div>
        )}
      </form>
    </section>
  );
};

export default Profile;
