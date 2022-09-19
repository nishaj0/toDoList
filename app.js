let ul = document.getElementById("ul")


function addList() {
   let input = document.getElementById("input").value

   if (input != null) {
      let val = document.createTextNode(input);
      const li = document.createElement("li"); /*making html tag and assigning that to a variable */

      li.appendChild(val); /*giving value to li tag */
      ul.appendChild(li); /*giving li to ul */
   } else {

   }
}