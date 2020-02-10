var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

function displayColor() {
  body.style.background =
    "linear-gradient(to right, "
    + input1.value
    + ", "
    + input2.value
    + ")";
   css.innerText = "your first color is: " + input1.value + " and your second color is: " + input2.value;

   if(input1.value === "#000000" && input2.value === "#000000"){
     body.style.color = "#15ff17"
     css.innerText = "YOU ARE SUCH A TROLL";
   }else {body.style.color = "#000000"}
}

input1.addEventListener("input", displayColor);
input2.addEventListener("input", displayColor);
