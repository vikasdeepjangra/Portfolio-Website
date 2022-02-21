var downMenu = document.getElementById('open-menu')
var counter = 0;

downMenu.addEventListener('click', function(){
    if(counter%2 == 0){
        document.getElementById('menu-bar').style.overflow = "visible";
        counter++;
    }else{
        document.getElementById('menu-bar').style.overflow = "hidden";
        counter++;
    }
});


const menuItems = document.querySelectorAll(".open-menu-list-items");

 for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        document.getElementById('menu-bar').style.overflow = "hidden";
        counter++;
    });
 }