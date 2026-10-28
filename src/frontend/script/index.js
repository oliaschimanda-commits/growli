
import { api, showLoginUi } from "./util.js";

window.addEventListener('DOMContentLoaded', ()=>{

    showLoginUi();
});

const cardContainer = document.getElementById('card-container');

console.log("index", cardContainer)

//if true simulates if user is authenticated; to be implemented
if(true){

    //farming info
    const info = await getFarmingInfo();

    const infoData = JSON.parse(JSON.stringify(info));

    const infoContainer = document.getElementById("info-container");

    if(!infoData){
            
        infoData.forEach((v,k)=>{
            infoContainer.insertAdjacentHTML('beforeend',
                `<div id="${v.farmingId}" class="card">
                    <img class="img-box" src="${v.farmingInfoImage}" alt="Picture of ${v.title}" >
                    <h3>${v.title}</h3>
                    <p>${v.article}</p><a href="./pages/farming-info.html">→ Read More</a>
                </div>
                `
            );
        });

    }else{
        //placeholdr if info data is empty
        infoContainer.insertAdjacentHTML('beforeend',
            `<div class="card">
                <div class="img-box">Crop Image</div>
                <h3>Crop Guide</h3>
                <p>Learn about crop selection, planting and crop management.</p><a href="./pages/farming-info.html">→ Read More</a>
            </div>
            `
        );

        infoContainer.insertAdjacentHTML('beforeend',
            `
            <div class="card">
                <div class="img-box">Pest Image</div>
                <h3>Pest Guide</h3>
                <p>Learn how to identify and manage common agricultural pests.</p><a href="./pages/farming-info.html">→ Read More</a>
            </div>
            `
        );

        infoContainer.insertAdjacentHTML('beforeend',
            `
            <div class="card">
                <div class="img-box">Fertilizer Image</div>
                <h3>Fertilizer Guide</h3>
                <p>Learn about fertilizer selection and proper application.</p><a href="./pages/farming-info.html">→ Read More</a>
            </div>
            `
        );
        

    }

    //events
    const event = await getEvents();

    const eventData = JSON.parse(JSON.stringify(event));

    const eventContainer = document.getElementById("event-container");

    if(!eventData){

        eventData.forEach((v,k)=>{

            eventContainer.insertAdjacentHTML("beforeend",
                `
                <div id="${v.trainingId}" class="training-bar">
                    <p><b>${v.title}</b> • Date: ${parseDate(v.trainingDate)} • Location: ${v.city}, ${v.country} </p>
                    <a href="./pages/training.html"><button>View Details</button></a>
                </div>
                `
            );
        });
        
    }else{

        //if event data is empty
        eventContainer.insertAdjacentHTML("beforeend",
            `
            <div class="training-bar">
                <p><b>Modern Maize Production</b> • Date: 1 November • Location: Ndola</p>
                <a href="./pages/training.html"><button>View Details</button></a>
            </div>
            `
        );

    }


    //Products

    const product = await getProducts();

    console.log("Product: ",product)

    const datav = JSON.parse(JSON.stringify(product.data));

    if(datav){
        datav.forEach((v,k)=>{
            cardContainer.insertAdjacentHTML('beforeend',
                `<div id="${v.productId}" class="card">
                    <img class="img-box" src="${v.pronductImage}" alt="Image of ${v.productName}" />
                    <h3>${v.productName}</h3>
                    <p>Price: ZMW ${parsePrices(v.price)} /kg</p><a href="./pages/marketplace.html">
                    <button class="view-btn">View</button></a>
                </div>`
            );
        })
    }
}

function parsePrices(price){
    if(!price)
        return 0;

    return parseFloat(price);
}

function parseDate(date) {

    if(!prices) return "Not specified";

    const dateO = new Date(date);

    const day = dateO.getDate();
    const month = dateO.getMonth();
    const year = dateO.getFullYear();

    return `${day}/${month +1}/${year}`;
    
}

async function getProducts(){

    const products = await api(`http://127.0.0.1:3000/product?page=${1}&limit=${6}`,{
        method: 'GET',
        mode: 'cors'
    });

    return products;
}

async function getFarmingInfo(){
    
    const info = await api("http://127.0.0.1:3000/product/",{
        method: 'GET',
        mode: 'cors'
    });

    return info;
}

async function getEvents() {
    
    const event = await api("http://127.0.0.1:3000/product/",{
        method: 'GET',
        mode: 'cors'
    });

    return event;
}