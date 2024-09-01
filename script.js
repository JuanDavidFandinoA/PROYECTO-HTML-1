var cart = JSON.parse(localStorage.getItem("cart")) || []

cart.forEach(item => {
    console.log(item)
    let div = document.createElement("div")
    div.innerHTML = `<img id="cartsquare" src="${item.image}" alt="${item.name}" width="30%">
    <p> ${item.name} </p>
    <p> ${item.price} </p>
    <p> ${item.color} </p>`
    document.querySelector("div#cartergolite div#cartsquare").appendChild(div)
});