import { api, showLoginUi } from "./util.js";

window.addEventListener('DOMContentLoaded', ()=>{

    showLoginUi();
});

    const productContainer = document.getElementById("market-container");

if(true){
    const itemList = [];

    var isSearching = false;

    var page = 1, limit = 10;

    const searchBtn = document.getElementById("search-button");
    const input = document.getElementById("search-product");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");


    const product = await getProducts();

    const productData = JSON.parse(JSON.stringify(product.data));

    setData(productData);


    searchBtn.addEventListener('click', async (e)=>{
        e.preventDefault();
        if(!input.value)
            return
        const mQuery = input.value.trim();

        const product = await searchProducts(mQuery);

        page = 1;
        isSearching = true;

        const productData = JSON.parse(JSON.stringify(product.data));

        productContainer.replaceChildren();
        setData(productData);
    });

    input.addEventListener('keydown',async (e)=>{
        
        if(e.key === 'Enter'){
            e.preventDefault();
                
            if(!input.value)
                return
            const mQuery = input.value.trim();

            const product = await searchProducts(mQuery);

            page = 1;
            isSearching = true;

            const productData = JSON.parse(JSON.stringify(product.data));

            productContainer.replaceChildren();
            setData(productData);
        }
    })

    nextBtn.addEventListener('click',async (e)=>{
        e.preventDefault();

        if(isSearching){
            const product = await searchProducts();
            
            const productData = JSON.parse(JSON.stringify(product.data));
            
            page++;

            setData(productData);
        }else{
            const product = await getProducts();
            const productData = JSON.parse(JSON.stringify(product.data));
            
            page++;

            setData(productData);
        }

    });

}

function parsePrice(price){
    //price conversion will be done here
    return price;
}

function setData(mData) {
    
    mData.forEach((v,k) =>{
        
        productContainer.insertAdjacentHTML('beforeend',
            `<div id="${v.productId}" class="card">
                <img class="img-box" src="${v.pronductImage}" alt="Image of ${v.productName}" />
                <h3>${v.productName}</h3>
                <p>Price: ZMW ${parsePrice(v.price)} /kg</p><a href="./pages/marketplace.html">
                <button class="view-btn">View</button></a>
            </div>`
        );

        const card = document.getElementById(v.productId);

        card.addEventListener('click',(e)=>{
            console.log(v.productId)
        });
    
    });
}

async function getProducts() {
    
    const products = await api(`http://127.0.0.1:3000/product?page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return products;
}

async function searchProducts(querys) {

    const products = await api(`http://127.0.0.1:3000/product/search?q=${querys}&page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return products;
}