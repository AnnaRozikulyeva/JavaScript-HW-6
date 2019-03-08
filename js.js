var doc = document;
var album = doc.querySelector('.album');
var galleryItem = doc.querySelector('.galleryItem').content;
var mainImage = doc.querySelector('.img');
var arrImg = ["img/background-1.jpg", "img/background-2.jpg", "img/background-3.jpg", "img/background-4.jpg"];

var renderItems = function () {
	let newItem;
	let roulette = doc.createDocumentFragment ();
	for (let i = 0; i < arrImg.length; i++) {
		newItem = galleryItem.cloneNode(true);
		newItem.querySelector('.imgThumb').classList.add('gThumb');
		newItem.querySelector('.imgThumb').classList.add('thumb' + i);
		newItem.querySelector('.imgThumb').style.backgroundImage = "URL('" + arrImg[i] + "')";
		roulette.appendChild(newItem);
	}
	album.appendChild(roulette);
};
renderItems ();

window.addEventListener ('click', function (evt) {console.log(evt)} );

var galleryApp = function (evt) {
	if (evt.target.parentElement.className == 'albumWrapper' || evt.target.classList.contains('imgThumb') == true) {
		mainImage.style.backgroundImage = evt.target.style.backgroundImage;
	}
};
window.addEventListener ('click', galleryApp);

var right = doc.querySelector('#scrollRight');
var left = doc.querySelector('#scrollLeft');
var now = -1;
var scrollRight = function () {
	if (now < arrImg.length) {
		now++
	} else {
		now = 0
	} mainImage.style.backgroundImage = "URL('" + arrImg[now] + "')";
}
var scrollLeft = function () {
	if (now > 0) {
		now--
	} else {
		now = arrImg.length - 1
	} mainImage.style.backgroundImage = "URL('" + arrImg[now] + "')";
}
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].src = "";
}
right.addEventListener('click', scrollRight);
left.addEventListener('click', scrollLeft);