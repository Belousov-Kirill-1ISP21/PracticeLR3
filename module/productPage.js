function getSingleProduct(id) {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      let html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <title>${product.title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
              font-family: 'Arial', sans-serif;
              color: #333;
              width: 50%;
              margin: 0 auto;
              padding: 2vh; 
              background-color: white;
          }

          h1, h2, h3 {
            color: black;
          }

          a {
            text-decoration: none;
          }

          .productDetail {
              background: white;
              border-radius: 0.8vh; 
              padding: 3vh; 
              box-shadow: 0 0.2vh 1vh rgba(0,0,0,0.1);
          }

          .productDetail h2 {
            color: black;
          }

          .productDetail p {
            margin: 1vh 0;
          }

          .images {
            display: flex;
            margin: 2vh 0; 
          }

          .images img {
            max-width: 20vh;
            max-height: 20vh; 
            object-fit: contain;
            border-radius: 0.4vh; 
            border: 0.1vh solid #eee; 
          }

          .backButton {
            display: inline-block;
            margin-bottom: 2vh; 
            padding: 1vh 1.5vh;
            background-color: white;
            color: black;
            border-radius: 0.4vh; 
          }

          .backButton:hover {
            background-color: black;
            color: white;
          }

          @media (max-width: 1024px) {
            .images img {
              max-width: 15vh;
              max-height: 20vh; 
            }
          }

          @media (min-height: 1024px) {
            body {
              width: 80%;
              font-size: 2vh;
          }
    

        </style>
      </head>
      <body>
         <a href="javascript:history.back()" class="backButton">← Назад</a>
        <div class="productDetail">
          <div class="images">
            ${product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('')}
          </div>
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <h2>Price: $${product.price}</p>
        </div>
      </body>
      </html>`;
      
      return html;
    });
}

module.exports = getSingleProduct;