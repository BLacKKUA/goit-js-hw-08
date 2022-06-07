// Add imports above this line`
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery')

const gallaryBlocks = galleryItems.map(({preview, original, description} = {}) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("")
galleryRef.insertAdjacentHTML('afterbegin', gallaryBlocks)

let gallery = new SimpleLightbox('.gallery__link', {captionsData: "alt", captionDelay:"250"});