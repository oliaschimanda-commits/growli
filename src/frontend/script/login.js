import {api, showLoginUi , valueLengthIsValid, isLoggedIn, token} from './util.js'

const form = document.getElementById("form-login");
var IS_VALID = false;

window.addEventListener('DOMContentLoaded', ()=>{

    showLoginUi();
});

form.addEventListener('submit',async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    formData.forEach((v,k) => {
        
        if(!valueLengthIsValid(v,50)){
            IS_VALID = false;
        }
    });

    if(IS_VALID)
        return

    login(data);
    
});

const login = async (mData) => {
    
    try {
        const user = await api("http://127.0.0.1:3000/login/",{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(mData)
        });

        console.log("User: ",user.data.accessToken);
        token.token = user.data.accessToken;
        isLoggedIn.isLogged = false;
        window.location.replace("../index.html")
    } catch (error) {
        console.log("Error login", error)
    }
}
