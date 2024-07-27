import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import projects from './projects.json';
// async function fetchProjects() {
//   const response = await fetch('/data/projects.json');
//   const projects = await response.json();
//   return projects;
// }

// const projectImage = import.meta.glob('./img/projects/*.png', {
//   query: { format: 'avif;webp;png', as: 'picture' },
//   import: 'default',
//   eager: true,
// });

// function createSlide(project) {
//   const slide = document.createElement('div');
//   slide.classList.add('swiper-slide', 'proj-slide');

//   const prescription = document.createElement('div');
//   prescription.classList.add('swipe-prescription');

//   const tagsList = document.createElement('ul');
//   tagsList.classList.add('list-tags');
//   project.tags.forEach(tag => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('list-tags-item');
//     const tagText = document.createElement('p');
//     tagText.textContent = tag;
//     listItem.appendChild(tagText);
//     tagsList.appendChild(listItem);
//   });

//   const title = document.createElement('h3');
//   title.classList.add('prescription-title');
//   title.textContent = project.title;

//   const button = document.createElement('button');
//   button.classList.add('prescription-btn');
//   button.type = 'button';
//   button.textContent = 'See project';
//   button.addEventListener('click', () => {
//     window.location.href = project.link;
//   });

//   const imageDiv = document.createElement('div');
//   imageDiv.classList.add('swipe-img');
//   const image = document.createElement('img');
//   image.src = project.imgSrc;
//   console.log(image.src);
//   image.alt = project.title;
//   imageDiv.appendChild(image);

//   prescription.appendChild(tagsList);
//   prescription.appendChild(title);
//   prescription.appendChild(button);

//   slide.appendChild(prescription);
//   slide.appendChild(imageDiv);

//   return slide;
// }

// // async
// function initializeSwiper() {
//   // const projects = await fetchProjects();
//   const swiperWrapper = document.getElementById('swiper-wrapper');

//   projects.forEach(project => {
//     const slide = createSlide(project);
//     swiperWrapper.appendChild(slide);
//   });
const slideWrap = document.querySelector('.swiper-wrapper');
const slides = projects
  .map(({ title, imgSrc, link, tags }) => {
    const tagsList = tags
      .map(
        tag =>
          `<li class="list-tags-item">
      <p>${tag}</p>
    </li>`
      )
      .join('');

    return `
    <div class="swiper-slide proj-slide">
      <div class="swipe-prescription">
        <ul class="list-tags">${tagsList}</ul>
        <h3 class="prescription-title">${title}</h3>
        <a href="${link}" class="prescription-btn" target="_blank">
          See project
        </a>
      </div>
      <div class="swipe-img">
        <img src="${imgSrc}" alt="${title}" />
      </div>
    </div>
  `;
  })
  .join('');
slideWrap.innerHTML = slides;

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.proj-btn-next',
    prevEl: '.proj-btn-prev',
  },
});
// document.querySelector('.swiper-container').classList.remove('hidden');
// }

// document.addEventListener('DOMContentLoaded', initializeSwiper);
