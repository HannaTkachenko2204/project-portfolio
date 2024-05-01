const formEl = document.querySelector('.work-form');
const emailEl = document.querySelector('.work-form input[name=email]');
const commentsEl = document.querySelector('.work-form input[name=comment]');
const succesEl = document.querySelector('.work-form-succes');
const invalidEl = document.querySelector('.work-form-invalid');

succesEl.style.display = 'none';
invalidEl.style.display = 'none';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const localKey = 'work-form-state';
let formDataEl = {};

fillFormFields();

formEl.addEventListener('input', event => {
  formDataEl[event.target.name] = event.target.value;
  localStorage.setItem(localKey, JSON.stringify(formDataEl));

  if (emailEl.validity.valid) {
    succesEl.style.display = 'block';
    invalidEl.style.display = 'none';
  } else {
    succesEl.style.display = 'none';
    invalidEl.style.display = 'block';
  }
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (emailEl.value !== '' && commentsEl.value !== '') {
    console.log(formDataEl);
    console.log(JSON.stringify(formDataEl));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formDataEl),
    };

    console.log(options);

    fetch(BASE_URL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(post => console.log(post.title))
      .catch(error => console.log(error));

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


// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiper = new Swiper('.swiper-about', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   centeredSlides: false,
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next-about-btn',
//   },
//   on: {
//     resize: function () {
//       const windowWidth = window.innerWidth;
//       if (windowWidth <= 768) {
//         this.params.slidesPerView = 2;
//       } else if (windowWidth <= 1440) {
//         this.params.slidesPerView = 3;
//       } else {
//         this.params.slidesPerView = 6;
//       }
//       this.update();
//     },
//   },
// });



// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach(accordion => {
//   new Accordion(accordion);
// });


// const accordionItems = document.querySelectorAll('.about-con-list-iteam'); 

  

// document.addEventListener('DOMContentLoaded', function () {
  

//   function toggleAccordion() {
//     this.classList.toggle('active');
//     const content = this.querySelector('.about-con-list-iteam-id');
//     content.style.display === 'block'
//       ? (content.style.display = 'none')
//       : (content.style.display = 'block');

//     const arrow = this.querySelector('.arrow-up');
//     arrow.classList.toggle('arrow-down');
//   }

//   accordionItems.forEach(item => {
//     item.addEventListener('click', toggleAccordion);
//   });

//   for (let i = 1; i < accordionItems.length; i++) {
//     const content = accordionItems[i].querySelector('.about-con-list-iteam-id');
//     content.style.display = 'none';
//   }
// });

/* <div class="about-skills swiper-about">
    <ul class="about-skills-list swiper-wrapper">
      <button class="about-skills-list-div swiper-slide">HTML/CSS</button>
      <button class="about-skills-list-div swiper-slide">JavaScript</button>
      <button class="about-skills-list-div swiper-slide">React</button>
      <button class="about-skills-list-div swiper-slide">Node.js</button>
      <button class="about-skills-list-div swiper-slide">React Native</button>
      <button class="about-skills-list-div swiper-slide">Soft skills</button>
    </ul>
    <button class="swiper-button-next-about-btn" type="button">
      <svg class="svg-button-next" width="40" height="40">
        <use href="./img/icons/icon.svg#arrow-narrow-right"></use>
      </svg>
    </button>
  </div>
</section> */