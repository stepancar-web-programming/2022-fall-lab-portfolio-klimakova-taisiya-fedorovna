const imageArray = [
  '../media/photo1.jpg',
  '../media/comment1.jpg',
  '../media/comment2.jpg',
  '../media/comment3.jpg',
  '../media/photo2.JPG',
  '../media/photo3.jpg',
  '../media/photo4.jpg',
];
(function() {
  window.number = '0';
}());
const imageCount = imageArray.length;
function image(num) {
  if (num == 1) {
    if (number < imageCount - 1) {
      number++;
      document.getElementById('images').src = imageArray[number];
      document.getElementById('num_img').innerHTML = `${number + 1}/${imageCount}`;
    }
  } else if (number > 0) {
    number--;
    document.getElementById('images').src = imageArray[number];
    document.getElementById('num_img').innerHTML = `${number + 1}/${imageCount}`;
  }
}
document.write(`<img id="images" src="${imageArray[0]}">`);