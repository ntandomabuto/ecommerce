let name = localStorage.getItem('purchasedItems')
let main = document.querySelector('main')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))

purchasedItems = purchasedItems.reduce((arr, current) => {
  const duplicate = arr.find(item => item.name === current.name);
  if (!duplicate) {
    return arr.concat([current]);
  } else {
    duplicate.quantity += current.quantity;
    return arr;
  }
}, []);

purchasedItems.forEach(purchasedItem =>{
    main.innerHTML += `
        <div>
        <table>
            <tr>
                <td>${purchasedItem.name}</td>
                <td><img src="${purchasedItem.image}" class="checkimg"></td>
                <td>R${purchasedItem.price}</td>
                <td><input type="number" value="${purchasedItem.quantity}" class="quantity"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td><p id="total"></p></td>
            </tr>
            </table>
            

        </div>
                      `
})

let grandTotal = 0;
purchasedItems.forEach(purchasedItem =>{
    grandTotal += purchasedItem.price * purchasedItem.quantity;
})

document.getElementById('total').innerText = `R${grandTotal.toFixed(2)}`;

let quantities = document.getElementsByClassName('quantity');
for(let i = 0; i < quantities.length; i++){
    quantities[i].addEventListener('input', ()=>{
        let total = 0;
        purchasedItems.forEach((purchasedItem, index)=>{
            total += purchasedItem.price * quantities[index].value;
        })
        document.getElementById('total').innerText = `Total: R${total.toFixed(2)}`;

        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))

    })
}

let deleteBtns = document.getElementsByClassName('delete-btn');
for(let i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', ()=>{
        purchasedItems.splice(i, 1);
        main.innerHTML = '';
        purchasedItems.forEach(purchasedItem =>{
            main.innerHTML += `
                <div>
                <table>
                    <tr>
                        <td>${purchasedItem.name}</td>
                        <td><img src="${purchasedItem.image}" class="checkimg"></td>
                        <td>R${purchasedItem.price}</td>
                        <td><input type="number" value="${purchasedItem.quantity}" class="quantity"></td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td><p id="total"></p></td>
                    </tr>
                    </table>
                    

                </div>
                              `
        })
        let grandTotal = 0;
        purchasedItems.forEach(purchasedItem =>{
            grandTotal += purchasedItem.price * purchasedItem.quantity;
        })
        document.getElementById('total').innerText = `R${grandTotal.toFixed(2)}`;
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
    })
}

let buyBtn = document.getElementById('thankYou')

buyBtn.addEventListener('click', ()=>{
    localStorage.removeItem('purchasedItems');
    alert('Thank You For your Purchase')
});