const requiredErrorMessage = 'Поле обязательно к заполнению';
const minNameLength = 2;
const maxNameLength = 30;
const minNameLengthErrorMessage = 'Минимальная длина для имени 2';
const maxNameLengthErrorMessage = 'Максимальная длина для имени 30';
const emailValidationErrorMessage =
  'Ваш email невалидный. Пример валидного email: email@gmail.com';
const passwordValidationErrorMessage =
  'Ваш пароль должен содержать минимум 8 символов, символы верхнего и нижнего регистров, а так же цифры.';
const defaultErrorMessage = 'Ошибка';

export {
  requiredErrorMessage,
  minNameLength,
  maxNameLength,
  minNameLengthErrorMessage,
  maxNameLengthErrorMessage,
  emailValidationErrorMessage,
  passwordValidationErrorMessage,
  defaultErrorMessage,
};
