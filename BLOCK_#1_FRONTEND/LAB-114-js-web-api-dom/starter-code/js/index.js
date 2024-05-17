function deleteItem(e){
  const body = document.getElementsByTagName("body")[0]
  const product = e.target.parentNode.parentNode
  const deletedPrice = product.querySelector(".product_price span").innerText.replace("€", "");

  const node_total_price = document.querySelector(".total_price span");
  let current_total_price = node_total_price.innerText.replace("€", "");
  node_total_price.innerText = (current_total_price-deletedPrice) + " €"
  body.removeChild(product)
}

function updatePriceByProduct(itemNode){
  const product = itemNode.target.parentNode.parentNode.parentNode
  const cost = product.querySelector(".product_cost span").innerText
  const price = itemNode.target.value * cost + " €"
  product.querySelector(".product_price span").innerText = price
}

function getTotalPrice() {
  const node_total_price = document.querySelector(".total_price span");
  const node_prices = document.querySelectorAll(".product_price span")
  let total_price = 0;
  for (let i = 0; i < node_prices.length; i++) {
    total_price += parseInt(node_prices[i].innerText.replace("€", ""));
  }
  node_total_price.innerText = total_price + " €"
}

function createNewProduct(){
  const body = document.getElementsByTagName("body")[0]
  const container_create = document.querySelector(".container_create")
  const itemName = document.querySelector('input[name="create_product_name"]').value
  const itemUnitPrice = document.querySelector('input[name="create_product_price"]').value
  
  // Product DIV
  const product_div = document.createElement("div")
  product_div.setAttribute("class", "product")
  
  // Product Name
  const product_name = document.createElement("div")
  product_name.setAttribute("class", "product_name")
  const span_name = document.createElement("span")
  span_name.innerText = itemName
  
  product_name.appendChild(span_name)
  product_div.appendChild(product_name)
  
  // Product Cost
  const product_cost = document.createElement("div")
  product_cost.setAttribute("class", "product_cost")
  const span_cost = document.createElement("span")
  span_cost.innerText = itemUnitPrice

  product_cost.appendChild(span_cost)
  product_div.appendChild(product_cost)

  // Product quantity
  const product_quantity = document.createElement("div")
  product_quantity.setAttribute("class", "product_quantity")
  const label_quantity = document.createElement("label")
  label_quantity.setAttribute("for", "product")
  label_quantity.innerText = "quantity "
  const input_quantity = document.createElement("input")
  input_quantity.setAttribute("type", "number")
  input_quantity.setAttribute("name", "product")
  input_quantity.addEventListener("input", updatePriceByProduct)

  label_quantity.appendChild(input_quantity)
  product_quantity.appendChild(label_quantity)
  product_div.appendChild(product_quantity)

  // Product price
  const product_price = document.createElement("div")
  product_price.setAttribute("class", "product_price")
  const span_price = document.createElement("span")
  span_price.innerText = "0"

  product_price.appendChild(span_price)
  product_div.appendChild(product_price)
  
  // Product button delete
  const product_delete = document.createElement("div")
  product_delete.setAttribute("class", "product_delete")
  const button_delete = document.createElement("button")
  button_delete.setAttribute("type", "button")
  button_delete.setAttribute("class", "btn btn-delete")
  button_delete.innerText = "Delete"
  button_delete.addEventListener("click", deleteItem)

  product_delete.appendChild(button_delete)
  product_div.appendChild(product_delete)

  // Product into body (next to others products)
  body.insertBefore(product_div, container_create)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var quantityInputs = document.querySelectorAll('input[name="product"]');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createItemButton = document.getElementById('btn-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewProduct;


  for(var i = 0; i<quantityInputs.length ; i++){
    quantityInputs[i].oninput = updatePriceByProduct;
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
