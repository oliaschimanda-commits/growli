
import { api, valueLengthIsValid, showLoginUi } from "./util.js";

window.addEventListener('DOMContentLoaded', ()=>{

    showLoginUi();
});

const form = document.getElementById("register-form");

console.log("Hello")

let IS_VALID = true;

form.addEventListener("submit",async (e) =>{

    e.preventDefault();
    
    console.log("Hello form");


    const formData = new FormData(e.target);
    const payLoad = Object.fromEntries(formData);

    formData.forEach((v,k) => {
        if(valueLengthIsValid(v,50)){
            console.log(k, "Is not valid")
            IS_VALID = false
        }
    });

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
