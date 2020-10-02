import gallery from "./gallery-items.js";

// 1.Создание и рендер разметки по массиву данных и предоставленному шаблону.

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

// 2.Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.

const refs = {
  lightboxEl: document.querySelector("div.lightbox"),
  containerImagesForClickEl: document.querySelector("ul.js-gallery"),
  imgModalEl: document.querySelector(".lightbox__image"),
  btnCloseModalEl: document.querySelector(`button[data-action="close-lightbox"]`),
  backdropEl: document.querySelector("div.lightbox__overlay"),
};

// const selectedImg = evt.target;

refs.containerImagesForClickEl.addEventListener("click", onOpenModal);
refs.btnCloseModalEl.addEventListener("click", onCloseModal);
refs.backdropEl.addEventListener("click", onBackdropClick);

function onOpenModal(evt) {
  evt.preventDefault();
  window.addEventListener("keydown", onEscClick);
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  // 3.Открытие модального окна по клику на элементе галереи.
  refs.lightboxEl.classList.add("is-open");

  // 4.Подмена значения атрибута src элемента img.lightbox__image.
  refs.imgModalEl.src = evt.target.dataset.source;
}

// 5.Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// 6.Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
//     чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

function onCloseModal() {
  window.removeEventListener("keydown", onEscClick);

  refs.lightboxEl.classList.remove("is-open");
  refs.imgModalEl.src = "";
}

// 7.Закрытие модального окна по клику на div.lightbox__overlay.
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

// 8.Закрытие модального окна по нажатию клавиши ESC.
function onEscClick(evt) {
  if (evt.code === "Escape") {
    onCloseModal();
  }
}
// 9.Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
// window.addEventListener("keydown", onLeftWriteClick);
// function onLeftWriteClick(evt) {
//   if (evt.code !== "ArrowLeft" || "ArrowRight") {
//     return;
//   }
//   evt.elem.nextElementSibling;
//   console.log(evt.code);
// }
//ArrowRight ArrowLeft
//
//
