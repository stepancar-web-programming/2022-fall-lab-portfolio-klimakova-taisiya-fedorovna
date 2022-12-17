const imageArray = [
  '../media/photo1.jpg',
  '../media/comment1.jpg',
  '../media/comment2.jpg',
  '../media/comment3.jpg',
  '../media/photo2.JPG',
  '../media/photo3.jpg',
  '../media/photo4.jpg',
];

(function () {
  let currentImageIndex = 0;

  const imageCount = imageArray.length;
  function flipPictures(isForwardDirection) {
    if (isForwardDirection) {
      if (currentImageIndex < imageCount - 1) {
        currentImageIndex++;
        document.getElementById('images').src = imageArray[currentImageIndex];
        document.getElementById('imgNumber').innerHTML = `${currentImageIndex + 1}/${imageCount}`;
      }
    } else if (currentImageIndex > 0) {
      currentImageIndex--;
      document.getElementById('images').src = imageArray[currentImageIndex];
      document.getElementById('imgNumber').innerHTML = `${currentImageIndex + 1}/${imageCount}`;
    }
  }
  document.write(`<img id="images" src="${imageArray[0]}">`);

  function ready() {
    const previousPictureArrow = document.getElementById('previousPicture');
    const nextPictureArrow = document.getElementById('nextPicture');
    previousPictureArrow.addEventListener("click", () => flipPictures(0));
    nextPictureArrow.addEventListener("click", () => flipPictures(1));
  }
  document.addEventListener("DOMContentLoaded", ready);
}());
