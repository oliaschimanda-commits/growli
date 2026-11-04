
import { api, valueLengthIsValid, showLoginUi, loggedInKey } from "./util.js";


showLoginUi();

const menu = document.getElementById('menu');
const leftMenu = document.getElementById('menu-side');
const nav = document.getElementById('main-nav');


try{

    menu.addEventListener('click',(e)=>{
        e.preventDefault();

        nav.classList.toggle("active")
    });

    leftMenu.addEventListener('click',(e)=>{
        e.preventDefault();

        nav.classList.toggle("active")
    });
}catch(e){
    console.log(e);
}


