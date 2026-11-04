import {api , valueLengthIsValid, isLoggedIn, token, loggedUser, loggedInKey, tokenKey, userKey} from './util.js'

const form = document.getElementById("form-login");
var IS_VALID = false;

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

form.addEventListener('submit',async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(
                    [...formData.entries()].map(([k,v])=>{
                        if(!valueLengthIsValid(v.trim(),50)){
                            IS_VALID = false;
                        }

                        return [k,v.trim()]
                    })
                )
    

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

        token.token = user.data.accessToken;
        localStorage.setItem(tokenKey,user.data.accessToken)
        localStorage.setItem(loggedInKey,JSON.stringify(true));
        localStorage.setItem(userKey,JSON.stringify(user.data));
        loggedUser.user = user;
        window.location.replace("../index.html")
    } catch (error) {
        localStorage.setItem(loggedInKey,JSON.stringify(false));
        console.log("Error login", error)
    }
}
