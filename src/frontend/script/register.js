
import {tokenKey, userKey, isLoggedIn, api, valueLengthIsValid, loggedInKey, token } from "./util.js";


function logOut() {
    const logOutBtn = document.getElementById('logout-btn');

    logOutBtn.addEventListener('click',(e)=>{
        sessionStorage.setItem(loggedInKey,JSON.stringify(false));
        localStorage.setItem(tokenKey,"");
        localStorage.setItem(userKey,JSON.stringify({user: ""}));
        isLoggedIn.isLogged = false;
        token.token = "";
        window.location.href = "../index.html"
    });

}

logOut()
const form = document.getElementById("register-form");

console.log("Hello")

let IS_VALID = true;

form.addEventListener("submit",async (e) =>{

    e.preventDefault();
    
    console.log("Hello form");


    const formData = new FormData(e.target);
    const payLoad = Object.fromEntries(
        [...formData.entries()].map(([k,v])=>{
            if(!valueLengthIsValid(v.trim(),100)){
                IS_VALID =  false;
            }

            return [k,v,trim()]
        })
    );

    if(payLoad.password !== payLoad.confirm_password){
        console.log("password dont match")
        return
    }

    if(!IS_VALID) 
        return 

    console.log("creating users")
    createUser(payLoad)

});

const createUser = async (data) =>{

    try {

        const user = await api("http://127.0.0.1:3000/signup/",{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        });
        window.location.replace("../pages/login.html");
        console.log("User: ",user)
    } catch (error) {
        console.log("Error creating user",error);
    }
}
