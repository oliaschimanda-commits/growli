import { api, loggedUser, parsePrice, loggedInKey, token, userKey, tokenKey, isLoggedIn } from "./util.js";



function logOut() {
    const logOutBtn = document.getElementById('logout-btn');

    logOutBtn.addEventListener('click',(e)=>{
        sessionStorage.setItem(loggedInKey,JSON.stringify(false));
        localStorage.setItem(tokenKey,"");
        localStorage.setItem(userKey,JSON.stringify({user: ""}));
        isLoggedIn.isLogged = false;
        token.token = "";
        window.location.replace("../index.html")
    });

}

logOut()

console.log("user",JSON.parse(localStorage.getItem(userKey)))
loggedUser.user = JSON.parse(localStorage.getItem(userKey)).user;

if(true){
    var pageP = 1, limitP = 10;
    const username = document.getElementById("dash-username");
    const dashboard =  document.getElementById("dash-dashboard");
    const products =  document.getElementById("dash-products");
    const training =  document.getElementById("dash-training");
    const profile =  document.getElementById("dash-profile");
    const setting =  document.getElementById("dash-setting");
    const dashContainer = document.getElementById("main-container");

    const name = `${loggedUser.user.firstName} ${loggedUser.user.lastName}`

    username.textContent = name;

    setInit();

    // DASHBOARD TABS

    dashboard.addEventListener('click', async (e)=>{
        e.preventDefault();
        
        setInit();
    });

    products.addEventListener('click',async (e)=>{
        e.preventDefault();
        tabActive(products);
        limitP = 10;
        pageP = 1;

        const prodDeleteId = {id: ""};

        const product = await getProducts();

        const dataPro = JSON.parse(JSON.stringify(product.data));
        
        dashContainer.replaceChildren()

        dashContainer.insertAdjacentHTML('beforeend',
            `
            
            <h1>Products</h1>
            
            <h3>My Listing</h3>
            <table id="dash-table">
                
            </table>
            <button id="dash-more">More...</button>
            <button id="dash-add-product">Add Product</button>

            <dialog id="product-dialog">
            
                <p id="product-diag-message"></p>
                
                <button commandfor="product-dialog" command="close"  >Cancel</button>
                <button id="dial-product-delete=btn" commandfor="product-dialog" command="close"">Delete</button>
            </dialog>

            `
        )

        const table = document.getElementById("dash-table");

        dataPro.forEach((v,k) => {
            table.insertAdjacentHTML('beforeend',
                
                `
                    <tr>
                        <td colspan="2"><p>${v.productName} - ${v.quantity}kg</p></td>
                        <td><p>K${parsePrice(v.price)}</p></td>
                        <td><button id="${v.productId}" >Edit</button></td>
                        <td><button command="show-modal" commandfor="product-dialog" id="delete-${v.productId}" >Delete</button></td>
                    </tr>
                `
            )

            const editProductBtn = document.getElementById(v.productId);
            editProductBtn.addEventListener('click', async (e)=>{

                e.preventDefault();
                dashContainer.replaceChildren();
                dashContainer.insertAdjacentHTML('beforeend',
                    
                    `
                        <form class="card" id="edit-product-form">
                            <h2>Edit Product (${v.productName})</h2>
                            
                            <input name="productName" type="text" placeholder="Product Name" value="${v.productName}"><br><br>
                            <input name="price" type="number" step="any" placeholder="price" value="${v.price}" ><br><br>
                            <input name="quantity" type="text" placeholder="Quantity" value="${v.quantity}" ><br><br>
                            <input name="phoneNumber" type="tel" placeholder="Phone Number" value="${v.phoneNumber}" ><br><br>
                            <button type="submit" class="enter-btn">Edit product</button>
                        </form>
                    `
                )            
    
                //edit product
                editProductSetup()
            });

            
            //delete setup
            const deleteProductBtn = document.getElementById(`delete-${v.productId}`);
            const messageEl = document.getElementById("product-diag-message");
            const message = `Do you want to delete ${v.productName}!`;
            
            deleteProductBtn.addEventListener('click', async (e) =>{
                prodDeleteId.id = v.productId;
                messageEl.textContent = message;
            });

        });

        const diagProdctDeleteBtn = document.getElementById("dial-product-delete=btn");
        diagProdctDeleteBtn.addEventListener('click', async (e)=>{
            
            const p = await deleteProduct(prodDeleteId.id);

            console.log("Deleted ",p)

        })

        const moreBtn = document.getElementById("dash-more");
        moreBtn.addEventListener('click', async (e) =>{

            pageP++;
            
            const product = await getProducts();

            const dataPro = JSON.parse(JSON.stringify(product.data));

            const table = document.getElementById("dash-table");

            dataPro.forEach((v,k) => {
                table.insertAdjacentHTML('beforeend',
                    
                    `
                        <tr>
                            <td colspan="2"><p>${v.productName} - ${v.quantity}kg</p></td>
                            <td><p>K${parsePrice(v.price)}</p></td>
                            <td><button id="${v.productId}" >Edit</button></td>
                            <td><button command="show-modal" commandfor="product-dialog" id="delete-${v.productId}" >Delete</button></td>
                        </tr>
                    `
                )

                
                const editProductBtn = document.getElementById(v.productId);
                editProductBtn.addEventListener('click', async (e)=>{

                    e.preventDefault();
                    dashContainer.replaceChildren();
                    dashContainer.insertAdjacentHTML('beforeend',
                        
                        `
                            <form class="card" id="edit-product-form">
                                <h2>Edit Product (${v.productName})</h2>
                                
                                <input name="productName" type="text" placeholder="Product Name" value="${v.productName}"><br><br>
                                <input name="price" type="number" step="any" placeholder="price" value="${v.price}" ><br><br>
                                <input name="quantity" type="text" placeholder="Quantity" value="${v.quantity}" ><br><br>
                                <input name="phoneNumber" type="tel" placeholder="Phone Number" value="${v.phoneNumber}" ><br><br>
                                <button type="submit" class="enter-btn">Edit product</button>
                            </form>
                        `
                    )            
        
                    //edit product
                    editProductSetup()
                });

                //delete setup
                const deleteProductBtn = document.getElementById(`delete-${v.productId}`);
                const messageEl = document.getElementById("product-diag-message");
                const message = `Do you want to delete ${v.productName}!`;
                
                deleteProductBtn.addEventListener('click', async (e) =>{
                    prodDeleteId.id = v.productId;
                    messageEl.textContent = message;
                });
            });
            

        });



        //adding product
        createProductSetup()
    });

    training.addEventListener('click',async (e)=>{
        e.preventDefault();
        tabActive(training);

        dashContainer.replaceChildren()

        dashContainer.insertAdjacentHTML('beforeend',
            `
            
            <h1>Training</h1>
            
            <h3>My Listing</h3>
            <table id="dash-table">
                
            </table>
            <button id="dash-more">More...</button>
            <button id="dash-add-product">Add Product</button>
            `
        )


    });

    setting.addEventListener('click',async (e)=>{
        e.preventDefault();
        tabActive(setting);

        dashContainer.replaceChildren()

        dashContainer.insertAdjacentHTML('beforeend',
            `
            
            <h1>Settings</h1>
            
            <table id="dash-table">
                
            </table>
            `
        )
    });

    profile.addEventListener('click',async (e)=>{
        e.preventDefault();
        tabActive(profile);

        dashContainer.replaceChildren()

        dashContainer.insertAdjacentHTML('beforeend',
            `
            
            <h1>Profile</h1>
            
            <table id="dash-table">
                
            </table>
            `
        )
    });

    //DASHBOARD TABS ENDS
    
    async function setInit(){
        pageP = 1;
        limitP = 10;
        tabActive(dashboard);
        const prodDeleteId = {id: ""};

        const product = await getProducts();

        const dataPro = JSON.parse(JSON.stringify(product.data));

        dashContainer.replaceChildren()

        dashContainer.insertAdjacentHTML('beforeend',
            `
            
            <h1>Welcome, ${name}</h1>
            <article class="grid-3">
                <article class="card">
                    <p>products</p>
                    <p>24</p>
                </article>
                <article class="card">
                    <p>products</p>
                    <p>24</p>
                </article>
                <article class="card">
                    <p>products</p>
                    <p>24</p>
                </article>
            </article>
            <h3>My Listing</h3>
            <table id="dash-table">
                
            </table>
            <button id="dash-add-product" >Add Product</button>

            <dialog id="product-dialog">
            
                <p id="product-diag-message"></p>
                
                <button commandfor="product-dialog" command="close"  >Cancel</button>
                <button id="dial-product-delete=btn" commandfor="product-dialog" command="close"">Delete</button>
            </dialog>
            `
        )

        const table = document.getElementById("dash-table");
        

        dataPro.forEach((v,k) => {
            table.insertAdjacentHTML('beforeend',
                
                `
                    <tr>
                        <td colspan="2"><p>${v.productName} - ${v.quantity}kg</p></td>
                        <td><p>K${parsePrice(v.price)}</p></td>
                        <td><button id="${v.productId}" >Edit</button></td>
                        <td><button command="show-modal" commandfor="product-dialog" id="delete-${v.productId}" >Delete</button></td>
                    </tr>

                `
            )
            
            //edit setup
            const editProductBtn = document.getElementById(v.productId);
            editProductBtn.addEventListener('click', async (e)=>{

                e.preventDefault();
                dashContainer.replaceChildren();
                dashContainer.insertAdjacentHTML('beforeend',
                    
                    `
                        <form class="card" id="edit-product-form">
                            <h2>Edit Product (${v.productName})</h2>
                            
                            <input name="productName" type="text" placeholder="Product Name" value="${v.productName}"><br><br>
                            <input name="price" type="number" step="any" placeholder="price" value="${v.price}" ><br><br>
                            <input name="quantity" type="text" placeholder="Quantity" value="${v.quantity}" ><br><br>
                            <input name="phoneNumber" type="tel" placeholder="Phone Number" value="${v.phoneNumber}" ><br><br>
                            <button type="submit" class="enter-btn">Edit product</button>
                        </form>
                    `
                )            
    
                //edit product
                editProductSetup()
            });

            //delete setup
            const deleteProductBtn = document.getElementById(`delete-${v.productId}`);
            const messageEl = document.getElementById("product-diag-message");
            const message = `Do you want to delete ${v.productName}!`;
            
            deleteProductBtn.addEventListener('click', async (e) =>{
                prodDeleteId.id = v.productId;
                messageEl.textContent = message;
            });

        });
        
        const diagProdctDeleteBtn = document.getElementById("dial-product-delete=btn");
        diagProdctDeleteBtn.addEventListener('click', async (e)=>{
            
            const p = await deleteProduct(prodDeleteId.id);

            console.log("Deleted ",p)

        })

        createProductSetup();

    }

    //this is for the edit product button

    function editProductSetup() {
        const editFormProduct = document.getElementById("edit-product-form");
        editFormProduct.addEventListener('submit',async (e)=>{

            e.preventDefault()

            const formData = new FormData(e.target);
            const dataObj = Object.fromEntries(
                [...formData.entries()].map(([k,v])=>{

                    if(k == "phoneNumber"){
                        return [k,v]
                    }
                    const num = Number(v);

                    
                    const isNum = v.trim() !== '' && !Number.isNaN(num);
                    return [k, isNum ? num : v]

                })
            );

            console.log(dataObj)

            Object.assign(dataObj,
                {
                    "farmersName": `${v.farmersName}`,
                    "userId": `${v.userId}`,
                    "productId": `${v.productId}`
                }
            )

            const p = await editProduct(dataObj)
            console.log(p)
        });
        
    }

    //this one is for the add product button implementation
    function createProductSetup() {
        
        
        const addProductBtn = document.getElementById("dash-add-product");

        addProductBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            dashContainer.replaceChildren();

            dashContainer.insertAdjacentHTML('beforeend',
                `
                    <form class="card" id="add-product-form">
                        <h2>Adding Product</h2>
                        
                        <input name="productName" type="text" placeholder="Product Name"><br><br>
                        <input name="price" type="number" step="any" placeholder="price" ><br><br>
                        <input name="quantity" type="text" placeholder="Quantity" ><br><br>
                        <input name="phoneNumber" type="tel" placeholder="Phone Number" ><br><br>
                        <button type="submit" class="enter-btn">Add product</button>
                    </form>
                `
            )

            const productForm = document.getElementById("add-product-form");

            productForm.addEventListener('submit', async (e)=>{
                e.preventDefault()

                const formData = new FormData   (e.target);
                const datObj = Object.fromEntries(
                    
                    [...formData.entries()].map(([k,v]) =>{

                        if(k == "phoneNumber"){
                            return [k,v];
                        }
                        const num = Number(v);

                        const isNumeric = v.trim() !== '' && !Number.isNaN(num);
                        return [k, isNumeric ? num : v];
                    })
                );

                Object.assign(
                    datObj,
                    {
                        "farmersName": name,
                        "userId": loggedUser.user.userId
                    }
                )

                const p = await createProduct(datObj)
                console.log("product: ",p)
            })

        })
    }
    
    function tabActive(el) {
        
        const tab = [dashboard, products, training, profile, setting];

        for(const t of tab){

            t.classList.remove("dashboard-active");
            if (t==el) {
                t.classList.add("dashboard-active");
            }
        }
    }

    async function getProducts(){

        const products =  await api(`http://127.0.0.1:3000/product/user?id=${loggedUser.user.userId}&page=${pageP}&limit=${limitP}`,{
            method: 'GET',
            mode: 'cors'
        });

        return products;
    }

    //this one is for the api call
    async function createProduct(data) {
         const product = await api('http://127.0.0.1:3000/product/create',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
         })
         return product;
    }

    async function editProduct(data) {
        
        const product = await api('http://127.0.0.1:3000/product/update',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        });

        return product;
    }

    async function deleteProduct(id) {
        const product = await api(`http://127.0.0.1:3000/product/delete`,{
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify({id:id})
        })
    }
}