import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsE1 = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');
        const galleryE1 = document.querySelector(".gallery");
        galleryE1.insertAdjacentHTML("beforeend", galleryItemsE1);

galleryE1.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target;
  if (!target.classList.contains("gallery__image")) return;

  const imageScr = target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imageScr}" width="800" height="600">`,
    {
      onClose(() => {
    document.removeEventListener("keydown", handleKeyDown);
  }),
  onShow(() => {
    document.addEventListener("keydown", handleKeyDown);
  })
            }
          );
          instance.show();
        });
        //document.addEventListener("keydown", (e) => {
          //const instance = basicLightbox.getInstance();
          //if (e.code === "Escape" && instance.visible()) {
          //  instance.close();
          //}
        //});

// Додаємо слухач keydown при відкритті модалки
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };
  //document.addEventListener("keydown", handleKeyDown);
 
console.log(galleryItems);
