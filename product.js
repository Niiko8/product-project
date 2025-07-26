let dataDiv = document.getElementById("data-div")
let searchbar = document.getElementById("searchbar")
let product = []
let cart = []

const populate = (a) => {
    let out = ""
    for (let i=0; i < a.length; i++) {
        out += `<div id="product-${i}" class="product" ><p class="product-title">${a[i].title.slice(0,29)}...</p> <p class="price">$${a[i].price}</p><img width="300px" src="${a[i].image}" class="product-image"><button id="cart-add" class="cart-add">Add to Cart</button></div>`       
    }
    
    dataDiv.innerHTML = out
}



const APICall = async() => {
    let APIUrl = "https://fakestoreapi.com/products"
    let response = await fetch(APIUrl)
    console.log(response);
    let data = await response.json()
    product = data
    console.log(data);
    console.log(product);
    
    populate(data)

}

APICall()

searchbar.addEventListener("input", ()=> {
    let search = searchbar.value
    // console.log(searchInput);
let filteredProduct = product.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
console.log(filteredProduct);
populate(filteredProduct)
})