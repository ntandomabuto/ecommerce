let main = document.getElementsByClassName('products')[0]

function CreateItem(id, name, category, image, description, price, quantity) {
  this.id = id
  this.name = name
  this.category = category
  this.image = image
  this.description = description
  this.price = price
  this.quantity = quantity
}

let item1 = new CreateItem(1, 'Stand up collar formal shirt', 'Clothes', 'https://th.bing.com/th?id=OPEC.Q%2brVyrPjqd8ZPg300C300&w=300&h=300&qlt=20&dpr=1.3&pid=21.1', 'Men Stand Up Collar Formal Shirts Slim Fit Long Sleeve Casual Office Work Button Shirt Tops Material:Polyester Package included: 1 x Mens Shirt Note Please allow 2-3 cm difference due to manual measurement.', 329,1)

let item2 = new CreateItem(2, 'Smart suit Blazer', 'Clothes', 'https://th.bing.com/th?id=OPEC.4Lcm6FFs4P%2fh5g474C474&w=300&h=300&qlt=20&o=5&dpr=1.3&pid=21.1', 'Bestdaily Men Plain Slim Fit Smart Suit Blazer Jacket Coat Tops Dress Wedding Party Work One Button Suits Black X', 459,1)

let item3 = new CreateItem(3, 'Necklace', 'Jewelery', 'https://th.bing.com/th?id=OPEC.eZfLmup7q%2f12FQ474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', 'Halo Necklaces Womens Pendant Jungfrau 9k Yellow Gold Swarovski Crystal.Swarovski Crystal, Quantity of stones: 5, Total Stone Carat: 0.1, Baguette Shape, Very Good Cut, AAAAA Stone Clarity, White Colour.9k Gold - 375.Brand: GLAMIRA Diamonds', 8206,1)

let item4 = new CreateItem(4, 'Jumpsuit', 'Clothes', 'https://th.bing.com/th?id=OPEC.Nue0%2fnTSdH4Tug474C474&w=300&h=300&qlt=20&o=5&dpr=1.3&pid=21.1', 'Mens Jumpsuit Lapel Long Sleeve Multi-Pocket Ankle Length Beam Feet Overalls Fashion Black Yellow', 868,1)

let item5 = new CreateItem(5, 'Necklace', 'Jewelery', 'https://img.fruugo.com/product/7/59/833035597_max.jpg', '2021 Classic Men Necklace Width 3 To 7 Mm Stainless Steel Long Necklace For Men Women Chain', 542,1)

let item6 = new CreateItem(6, 'Men Shoe','Shoes','https://th.bing.com/th?id=OPEC.rCHs9MikfLec6w474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', ' Material: Synthetic Package Included: 1 Pair of Shoes, without box',599,1)

let item7 = new CreateItem(7, 'Messenger bag', 'Accessories', 'https://th.bing.com/th?id=OPEC.q1IR66lZPMVrLw474C474&w=300&h=300&qlt=20&o=5&dpr=1.3&pid=21.1', 'Womens Messenger Bag Shoulder Bags Man Purses and Handbags Crossbody Bags for Daily Use Travel Work Material: Polyester Closure: Zipper Lightweight messenger bag for women travel, holiday and everyday use, also one great gift for everyone. A must have for every trip and daily life.', 269,1)

let item8 = new CreateItem(8, 'Earings', 'Accessories','https://th.bing.com/th?id=OPEC.KUc68Fyzsq8M0g474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', 'The stud design adds a touch of sophistication and elegance to the earrings, making them perfect for both formal and casual occasions. The earrings are lightweight and comfortable to wear, ensuring that you can wear them all day without any discomfort. These fashionable earrings make a great gift for a loved one or as a treat for yourself.', 353.75,1)

let item9 = new CreateItem(9, 'Two piece suit for woman', 'Clothes', 'https://th.bing.com/th?id=OPEC.PhdXKDBg273jlw474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', 'Womens Two Piece Business Suit Set One Button Blazer And Pants Yunclos Womens Two Piece Business Suit Set One Button Blazer And Pants', 2415,1)

let item10 = new CreateItem(10, 'Suit Set for woman', 'Clothes', 'https://th.bing.com/th?id=OPEC.fdLtW0q3XpL1hg474C474&w=300&h=300&qlt=20&o=5&dpr=1.3&pid=21.1', 'Newest 2024 Designer Suit Set Womens Lion Buttons Houndstooth Tweed Denim Patchwork Tassel Fringed', 754.85,1)

let item11 = new CreateItem(11, 'Safety Boots', 'Shoes', 'https://th.bing.com/th?id=OPEC.zehp2zJg39G66A474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', 'Slip-On Style For Easy Wear, Chelseas Professional Appearance Offers The Wearer A Boot That Can Provide Protection On-Site Without Compromising On Style.', 640,1)

let item12 = new CreateItem(12, 'Skinny Tie', 'Clothes', 'https://th.bing.com/th?id=OPEC.Rt2NRoc%2bfkzECQ474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1', 'Men Skinny Tie Wool Fashion Ties for Mens Wedding Suit Business Party Slim Classic Solid Color Neck', 117.24,1)

let items = [item1, item2, item3, item4, item5, item6, item7, item8,item9, item10, item11, item12]

localStorage.setItem('items', JSON.stringify(items))

let itemsQuan = JSON.parse(localStorage.getItem('purchasedItems'))

let purchasedItems = itemsQuan || [] 
console.log(itemsQuan);

let sortButton = document.querySelector('.sort')

sortButton.addEventListener('click', () => {
    items.sort((a, b) => {
        if (a.category < b.category) return -1;
        return 0;
    });
    main.innerHTML = '';
    items.forEach(item =>  {
        main.innerHTML += `
                    <div id="div">
                        <h6>${item.name}</h6>
                        <img src="${item.image}" id="image">
                        <p>R${item.price}</p>
                        <button class="purchase" value="${item.id}">Add to Cart</button>
                    </div>

                    `
    });
});
let search = document.querySelector('form');

search.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchTerm = document.querySelector('input[type="search"]').value;
    let filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    main.innerHTML = '';
    filteredItems.forEach(item => {
        main.innerHTML += `
                    <div id="div">
                        <h6>${item.name}</h6>
                        <img src="${item.image}" id="image">
                        <p>R${item.price}</p>
                        <button class="purchase" value="${item.id}">Add to Cart</button>
                    </div>

                    `
    });
});


items.forEach(item => {
  main.innerHTML += `
                    <div id="div">
                        <h4>${item.name}</h4>
                        <img src="${item.image}" id="image">
                        <p>R${item.price}</p>
                        <button id="purchase" value="${item.id}">Add to Cart</button>
                    </div>

                    `
})

let purchasedButtons = document.querySelectorAll('#purchase')
let purchaseItems = JSON.parse(localStorage.getItem('purchasedItems')) || []

function addToCheck(id) {
  let [item] = items.filter(object => object.id == +id)
  purchasedItems.push(item)
    console.log(item);
}

purchasedButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        addToCheck(event.target.value);
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
    })
})
