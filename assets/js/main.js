

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
   fetch("https://fakestoreapi.com/products")
   .then(response => response.json())
   .then(products =>{
    products.forEach(products => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${products.image}" alt="${products.title}" class= "product-image">
       <h3 class= "titulo">${products.title}</h3>
      
        <p>Price: $${products.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        `;
        container.appendChild(card);    
    });
   })    
        .catch(error => {
          container.innerHTML = `<p>Error al cargar productos: ${error}</p>`;
        });
    });                                           
