import gallery from "./gallery-items.js";

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
//     чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryContainer = document.querySelector(".js-gallery");
const cardsMarkup = createMarkupGallery(gallery);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createMarkupGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.

const refs = {
  lightbox: document.querySelector(".js-lightbox"),
  imagesForClick: document.querySelector("ul.js-gallery"),
};

refs.imagesForClick.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
    console.log("Клікнули на", evt.target);
    evt.target.url = 
}
