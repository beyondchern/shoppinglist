
var itemArr = [];

function printItem(item){
  document.getElementById("itemList").innerHTML +=
  item.name + " " + item.price  + " " + "euro" + " " + "<input type='number' class='itemAmount'>"+"<br>" ;
}

function clickCallBack(){
  addItem(document.getElementById('itemForm'));
  document.getElementById("itemList").innerHTML = "";
  itemArr.forEach(printItem);
}

function addItem(form){
  var itemObj = {name: form.itemName.value, price: form.itemPrice.value, amount:0};
  itemArr.push(itemObj);
}

//calculating
function calculateSum(){
  var itemAmountArr = document.getElementsByClassName("itemAmount");
  var sum = 0
  for (var i=0; i<itemAmountArr.length; i++){
    sum = sum + itemArr[i].price * itemAmountArr[i].value;
  }
  document.getElementById("itemSum").innerHTML = sum;
}

function storeItemAmount(){
  var itemAmountArr = document.getElementsByClassName("itemAmount");
  for(var i = 0; i<itemAmountArr.length ; i++){
    itemArr[i].amount = itemAmountArr[i].value;
  }
  return itemArr;
}

//turn itemArr into an URL

function jsonise(){
  //JSONise
  var jsonItemArr = JSON.stringify(itemArr);
  //encodeURI
  var encodeURIitemArr = encodeURIComponent(jsonItemArr);
  document.getElementById("jsonItemTextArea").value = encodeURIitemArr;
}

//turn URL into shopping list array
function parseShoppingList(){
  var encodeURIShoppingList = document.getElementById("jsonString").value;
  var jsonShoppingList = decodeURIComponent(encodeURIShoppingList);
  var parsedShoppingList = JSON.parse(jsonShoppingList);
  var itemInfo = "";
  parsedShoppingList.forEach(getShoppingListInfo);
  document.getElementById("parsedShoppingList").innerHTML = itemInfo;

  function getShoppingListInfo(shoppingItem){
    itemInfo += shoppingItem.name + shoppingItem.amount + "<br>";
  }
}
