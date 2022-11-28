const imageArray = [
  'photo1.jpg',
  'comment1.jpg',
  'comment2.jpg',
  'comment3.jpg',
  'photo2.JPG',
  'photo3.jpg',
  'photo4.jpg',
];
window.number = '0';
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