
let list = document.getElementById("ul")

function addList(){
   let val = document.createTextNode("This is a li");
   const li = document.createElement("li");
   li.appendChild(val);
   list.appendChild(li);

}