let cardContainer=document.getElementById("card");



// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// // .then(data => console.log(data));
// .then((data) => {
//     data.forEach (item)=>{
//         cardContainer.innerHTML += 
//         `
//         <div class="card">
//     <img src="${item.image}" alt="" width="100">
//     <h2>${item.title}</h2>
//     <p>${item.price}</p>
// </div>
//         `
//     });
// });


// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// .then((data) => {

//     data.forEach((item) => {

//         cardContainer.innerHTML += `
//         <div class="card">
//             <img src="${item.image}" alt="" width="100">
//             <h2>${item.title}</h2>
//             <p>${item.price}</p>
//         </div>
//         `;

//     });

// });

fetch('https://fakestoreapi.com/products') 
.then(response => response.json())
.then((data) =>{
    data.forEach((item) =>{
        cardContainer.innerHTML += 
         `
    

<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top p-3" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.price}</p>
    <button onclick="" type="button" class="btn  btn-secondary mt-2"><b>Add to cart</button>
    
  </div>


        `
    });
});