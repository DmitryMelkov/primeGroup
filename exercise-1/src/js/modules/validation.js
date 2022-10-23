export function validation() {
  const form = document.getElementById('form');
  const LS = localStorage;

  const formAddError = (input) => {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  };
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  };

  const emailTest = (input) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  };

  const formValidate = (form) => {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('login')) {
        if (input.value.length <= 6) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  };

  const formSend = (event) => {
    event.preventDefault();
    let error = formValidate(form);

    const login = form.querySelector('[name="login"]');
    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');
    const remember = form.querySelector('[name="remember"]');

    const values = {
      login: login.value,
      email: email.value,
      password: password.value,
      remember: remember.checked,
    };

    if (remember.checked === true) {
      LS.setItem('formData', JSON.stringify(values));
    } else {
      console.log('not checked');
    }

    if (error === 0) {
      alert('Форма отправлена');
    } else {
      alert('Заполните все поля');
    }
    return values;
  };


  //сохранение данных
  const localDownload = () => {
    let formData = JSON.parse(LS.getItem('formData'));
    console.log(formData);

    for (let iterator in formData) {
      form.elements[iterator].value = formData[iterator];
    }
  };

  form.addEventListener('submit', formSend);

  document.addEventListener('DOMContentLoaded', localDownload);
}
