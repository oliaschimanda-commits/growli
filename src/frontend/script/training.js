import { api, showLoginUi } from "./util.js";

window.addEventListener('DOMContentLoaded', ()=>{

    showLoginUi();
});

    const trainingContainer = document.getElementById("training-container");

if(true){
    const itemList = [];

    var isSearching = false;

    var page = 1, limit = 10;

    const searchBtn = document.getElementById("search-button");
    const input = document.getElementById("search-training");
    const moreBtn = document.getElementById("next-btn");


    const training = await getTainings();

    const trainingData = JSON.parse(JSON.stringify(training.data));

    setData(trainingData);


    searchBtn.addEventListener('click', async (e)=>{
        e.preventDefault();
        if(!input.value)
            return
        const mQuery = input.value.trim();

        const training = await searchTrainings(mQuery);

        page = 1;
        isSearching = true;

        const trainingData = JSON.parse(JSON.stringify(training.data));

        productContainer.replaceChildren();
        setData(trainingData);
    });

    input.addEventListener('keydown',async (e)=>{
        
        if(e.key === 'Enter'){
            e.preventDefault();
                
            if(!input.value)
                return
            const mQuery = input.value.trim();

            const training = await searchTrainings(mQuery);

            page = 1;
            isSearching = true;

            const trainingData = JSON.parse(JSON.stringify(training.data));

            productContainer.replaceChildren();
            setData(trainingData);
        }
    })

    moreBtn.addEventListener('click',async (e)=>{
        e.preventDefault();

        if(isSearching){
            const training = await searchTrainings();
            
            const trainingData = JSON.parse(JSON.stringify(training.data));
            
            page++;

            setData(trainingData);
        }else{
            const training = await getTainings();
            const trainingData = JSON.parse(JSON.stringify(training.data));
            
            page++;

            setData(trainingData);
        }

    });

}

function setData(mData) {
    
    mData.forEach((v,k) =>{
        
        trainingContainer.insertAdjacentHTML('beforeend',
            `<div id="${v.trainingId}" class="card">
                <img class="img-box src="${v.trainingImage}" alt="image of ${v.title}">
                <h3>${v.title}</h3>
                <p>Date: ${parseDate(v.trainingDate)}</p>
                <p>Location: ${v.city}</p><button class="view-btn">View Details</button>
            </div>
            `
        );

        const card = document.getElementById(v.trainingId);

        card.addEventListener('click',(e)=>{
            console.log(v.productId)
        });
    
    });
}

async function getTainings() {
    
    const trainings = await api(`http://127.0.0.1:3000/training?page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return trainings;
}

async function searchTrainings(querys) {

    const trainings = await api(`http://127.0.0.1:3000/training/search?q=${querys}&page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return trainings;
}

function parseDate(date) {

    if(!date) return "Not specified";

    const dateO = new Date(date);

    const day = dateO.getDate();
    const month = dateO.getMonth();
    const year = dateO.getFullYear();

    return `${day}/${month +1}/${year}`;
    
}