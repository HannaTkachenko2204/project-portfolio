const formEl = document.querySelector('.work-form');
const emailEl = document.querySelector('.work-form input[name=email]');
const commentsEl = document.querySelector('.work-form input[name=comment]');
const succesEl = document.querySelector('.work-form-succes');
const invalidEl = document.querySelector('.work-form-invalid')

succesEl.style.display = 'none';
invalidEl.style.display = 'none';

//const BASE_URL = 'https://portfolio-js.b.goit.study/api/';
const localKey = 'work-form-state';
let formDataEl = {};

fillFormFields();

formEl.addEventListener(
  'input',
  event => {
    formDataEl[event.target.name] = event.target.value;
    localStorage.setItem(localKey, JSON.stringify(formDataEl));
   
    if(emailEl.validity.valid) {
        succesEl.style.display = 'block';
        invalidEl.style.display = 'none';
    } else {
        succesEl.style.display = 'none';
        invalidEl.style.display = 'block';
    }
  }
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (emailEl.value !== '' && commentsEl.value !== '') {
    console.log(formDataEl);

    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(formDataEl),
    //     headers: {
    //         "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   };
    
    //   console.log(options);
      
    //   fetch(`${BASE_URL}`, options)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(response.status);
    //       }
    //       return response.json();
    //     })
    //     .then(post => console.log(post))
    //     .catch(error => console.log(error));


    localStorage.removeItem(localKey);
    event.currentTarget.reset();
    return;
  }
  alert('All fields must be filled!');
});

function fillFormFields() {
  const saveFormFields = localStorage.getItem(localKey);
  if (saveFormFields) {
    formDataEl = JSON.parse(saveFormFields);
    emailEl.value = formDataEl.email || '';
    commentsEl.value = formDataEl.comment || '';
  }
}