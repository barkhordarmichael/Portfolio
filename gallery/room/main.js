const menu = document.querySelector('#menu');
const menuItems = document.querySelector('#menu-items')

/*function toggleMenu() {
  
  menuItems.classList.toggle("toggle-menu");
}
function showMenu(){
    
    console.log(menuItems)
}
*/

  function toggleSwitch() {
    var element = document.getElementById("menu-items");
    element.classList.toggle("toggle-menu");
    console.log("clicked")
 }