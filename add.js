var images = ["bolsoergolite.png", "bolsoergoergoplus.png", "bolsoergoergoplus.png", "bolsoergoluxe.png", "bolsoergoluxeultra.png"]
var names = ["Bolso ErgoLite", "Bolso Ergo", "Bolso ErgoPlus", "Bolso ErgoLuxe", "Bolso ErgoLuxe Ultra"]
var prices = ["COP$90.000", "COP$150.000", "COP$190.000", "COP$320.000", "COP$400.000"]
var colors = ["Azul", "Beige", "Beige", "Cuero marrón", "Cuero marrón oscuro"]
var cart = JSON.parse(localStorage.getItem("cart")) || []
var id = document.querySelector("img ~ p ~ a").id

let buyButton = document.querySelectorAll("img ~ p ~ a").forEach(a => a.addEventListener("click",() => {
    cart.push({
        image : images[id],
        name : names[id],
        price : prices[id],
        color : colors[id]
    })
    localStorage.setItem("cart", JSON.stringify(cart))
}))