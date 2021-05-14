

function openMenu() {
    document.querySelector(".header__navigation").style.transform = "scaleY(1)";
    document.querySelector(".header__navigation").style.visibility = "visible";
    let select = document.querySelectorAll(".header__navigation-subitem");
    setTimeout(() => select.forEach(element => { element.style.transform = "scaleY(1)" }), 500);
}
function closeMenu() {
    document.querySelector(".header__navigation").style.transform = "scaleY(0)";
    let select = document.querySelectorAll(".header__navigation-subitem");
    select.forEach(element => { element.style.transform = "scaleY(0)" });
}

function deleteItem(i) {
    let item = document.querySelector("#\\3"+i);
    item.style.transform = "scaleY(0)";
    setTimeout(() => item.remove(),300);
    if (document.querySelectorAll(".cart__item").length == 1) {
        document.querySelector(".cart__list").innerHTML = "Cart is empty!"
    }
}

let selected;
function openFilters(cl) {
    let selected = document.getElementsByClassName(cl);

    if(selected[0].style.transform != "scaleY(1)"|| selected[0].style.transform == null){
        selected[0].style.transform = "scaleY(1)";
        selected[0].style.height = "auto";

    }
    else {
        selected[0].style.transform = "scaleY(0)";
        setTimeout(()=>{selected[0].style.height = "1px"},250);
        
   }  
}
