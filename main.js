var rigesterform = document.querySelector(".registerproduct");
var nameinput=document.querySelector("#name");
var descriptioninput=document.querySelector("#description");
var priceinput=document.querySelector("#price");
var products =[];
rigesterform.onsubmit= function(e){
   e.preventDefault();
   var product={
    name: nameinput.value,
    description: descriptioninput.value,
    price: priceinput.value


   };
    products.push(product);
   printdata();
   
}

function printdata(){
var data=``;
for(var i=0; i<products.length; i++)
    data += `<tr>
   <td>${products[i].name}</td>
   <td>${products[i].description}</td>
   <td>${products[i].price}</td>
   </tr> `;

document.querySelector(" table tbody").innerHTML=data;
}




