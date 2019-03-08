var arrCatalog = [];
var models = ['Samsung GALAXY', 'Samsung A5', 'Xiaomi Mi8', 'Xiaomi Mi9', 'Xiaomi Redmi Note 5', 'HONOR V8', 'Iphone7', 'Iphone8', 'Iphone9', 'IphoneX'];
var color = ['White', 'Gold', 'Black', 'Dark Grey', 'Lite Grey', 'Blue', 'Purple', 'Red', 'Pink', 'Green'];
var img = [ '<img src=img/iphone.png>', '<img src=img/honor.png>', '<img src=img/samsung.png>', '<img src=img/xiaomi.png>'];

// создание массива с товарами

var getRandomIn = function (mas) {
    let rand = Math.floor(Math.random() * (mas.length - 1));
    let randElem;
    return randElem = mas[rand];
}

var addInCatalog = function () {
    for (let i = 0; i < 10; i++) {
        var good = {};
        good.image = getRandomIn(img);
        good.model = getRandomIn(models);
        good.color = getRandomIn(color);
        good.price = 100 + Math.floor(Math.random() * 999);
        arrCatalog.push(good);
    }
}
addInCatalog();

//Добавление товаров в каталог
var goodCard = document.querySelector('.goodCard').content;
var catalog = document.querySelector('#catalog');
for (let i = 0; i < 10; i++) {
    var goodEdit = goodCard.cloneNode(true);
        goodEdit.querySelector('.img').innerHTML = arrCatalog[i].image;
        goodEdit.querySelector('.itemName').innerText = arrCatalog[i].model;
        goodEdit.querySelector('.itemColor').innerText = arrCatalog[i].color;
        goodEdit.querySelector('.itemPrice').innerText = arrCatalog[i].price;
        goodEdit.querySelector('.buyBtn').value = i;
    catalog.appendChild(goodEdit);
}

//добавление товара в корзину

var arrSum = [];
var basket = document.querySelector('.items');
var sum = 0
var sumBasket = document.querySelector('.sumBasket');

for ( let i = 0; i < arrCatalog.length; i++) {
    catalog.children[i].querySelector('.buyBtn').onclick = function () {
        let arrPrice = parseInt (catalog.children[i].querySelector('.itemPrice').innerText);
        arrSum.push(arrPrice); // добавляем сумму  в сумму корзины
        
        var item = document.createElement('p');
        item.innerText = arrCatalog[i].model + ' ' + arrCatalog[i].color + ' '+ arrCatalog[i].price + ' руб.';
        basket.appendChild(item); // добавляем продукт в корзину
        
        for (let a = 0; a < arrSum.length; a++) { //считаем сумму корзины
            sum = sum + arrSum[a];
            document.querySelector('.sumBasket').innerText = 'Общая сумма ' + sum + ' руб.';
        };
    };
}
