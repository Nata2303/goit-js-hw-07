import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", markup);

const galleryLinks = document.querySelectorAll(".gallery__link");
const lightbox = new SimpleLightbox(".gallery a", {
      captions: true,
      captionsData: "alt",
      captionDelay: 250,
    });
    lightbox.open();

console.log(galleryItems);
