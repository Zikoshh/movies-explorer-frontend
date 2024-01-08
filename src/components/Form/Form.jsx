import './Form.css';

const Form = ({
  handleSubmit,
  titleText,
  submitButtonText,
  yetText,
  linkText,
  routLink,
  isSignInForm,
  children,
}) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3 className='form__title'>{titleText}</h3>
      {children}
      <button className={`form__submit-button ${isSignInForm && 'form__submit-button_sign-in'}`} type='submit'>{submitButtonText}</button>
      <p className='form__yet'>
        {yetText}
        <a className='form__link' href={routLink}>
          {linkText}
        </a>
      </p>
    </form>
  );
};

export default Form;
