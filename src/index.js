import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".lightbox");
const imageLightBox = document.querySelector(".lightbox__image");
const closeLightBox = document.querySelector(".lightbox__button");

const listImages = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" 
        src="${image.preview}" 
        data-source="${image.original}" 
        alt="${image.description}" />
        </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", listImages);

const setLightboxImage = (src = "", alt = "") => {
  imageLightBox.src = src;
  imageLightBox.alt = alt;
};

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  lightBox.classList.add("is-open");
  setLightboxImage(e.target.dataset.source, e.target.alt);
});

closeLightBox.addEventListener("click", (e) => {
  lightBox.classList.remove("is-open");
  setLightboxImage();
});
