'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', handleThumbnailClick);
}

function handleThumbnailClick(e) {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    updateLargeImage(link.href);
  }
}

function updateLargeImage(src) {
  largeImg.src = src;
}
