//Initialize canvases
const Copy = document.getElementById('copy');
const Original = document.getElementById('original');
const copypx = Copy.getContext('2d');
const ctx = Original.getContext('2d');

var img = new Image;
img.src = 'view/images/twitter.png';
img.onload = function() {
  ctx.drawImage(img, 0, 0, imageSize, imageSize);
  start();
}
