// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const FORM_EMAIL = formRef.email.value;
  const FORM_PASSWORD = formRef.password.value;

  if (FORM_EMAIL === '' || FORM_PASSWORD === '') {
    return alert('All fileds must be filled');
  }

  const formData = {
    email: FORM_EMAIL,
    password: FORM_PASSWORD,
  };
  console.log(formData);

  formRef.reset();
};

formRef.addEventListener('submit', onFormSubmit);
