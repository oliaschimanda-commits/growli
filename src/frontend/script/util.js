
export const isLoggedIn = {isLogged: false};
export const token = {token: ''}

export const api = async (url,options = {}) => {
    const res = await fetch(url,{
        headers: { 'Content-Type': 'application/json', 'Authorization': token.token, ...(options.headers || {})},
        ...options,
    })

    if(res.status === 204) return { ok:true, data: null}

    const data = await res.json().catch(() => ({}))

    if(!res.ok){
        const err = new Error(data.error || 'Request failed');
        err.status = res.status;
        err.errors = data.errors;
        console.log(err)

        throw err;
    }

    return {ok: true, data};
}

//check if th passed value is of valid length
export const valueLengthIsValid = (value, maxLen) => {
    return (!value && value.length <= maxLen)
}

//check if the user is logged in to show or hide the login and register button

export const showLoginUi = () =>{

    const authC = document.getElementById("auth");
    const profile = document.getElementById("profile");

    console.log(authC,profile);

    if(isLoggedIn.isLogged){
        if(authC != null){
            
            authC.style.display = 'none';
        }
        if(profile != null){

            profile.style.display = 'visible';
        }
    }else{

        if(authC != null){

            authC.style.display = 'visible';
        }
        if(profile != null){
            
            profile.style.display = 'none';
        }
    }
}

