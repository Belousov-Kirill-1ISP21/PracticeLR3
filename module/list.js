function getProductsHTML() {
  return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      let html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <title>Каталог товаров</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: black;
            margin: 0 auto;
            padding: 2vh;
            background-color: #f8f9fa;
            width: 90%;
          }
          
          h1, h2, h3 {
            color: black;
          }
          
          a {
            text-decoration: none;
            color: black;
          }
          
          .actionButtons {
            display: flex;
            justify-content: end;
          }
          
          form {
            display: flex;
            gap: 1.5vh;
          }
          
          .searchInput {
            padding: 1.2vh 1.5vh;
            border: 0.2vh solid black;
            border-radius: 0.8vh;
            font-size: 1.6vh;
          }
          
          button {
            padding: 1.2vh 2.5vh;
            border: none;
            border-radius: 0.8vh;
            cursor: pointer;
            font-size: 1.6vh;
            font-weight: 500;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8vh;
          }
          
          .searchBtn {
            background-color: black;
            color: white;
          }
          
          .searchBtn:hover {
            background-color: white;
            color: black;
            border: 0.2vh solid black;
          }
          
          .productsGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 2.5vh;
            margin-top: 3vh;
          }
          
          .productCard {
            background: white;
            border-radius: 1.2vh;
            padding: 1vh;
            padding-bottom: 0;
            box-shadow: 0 0.4vh 1.5vh rgba(0, 0, 0, 0.08);
            border: 0.1vh solid rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .productCard:hover {
            transform: translateY(-0.5vh);
            box-shadow: 0 1vh 2.5vh rgba(0, 0, 0, 0.12);
            border-color: black;
          }
          
          .productTitle {
            margin: 0 0 1vh 0;
            color: black;
            font-size: 1.8vh;
            font-weight: 600;
          }
          
          .productPrice {
            font-weight: bold;
            color: black;
            margin-bottom: 1vh;
            font-size: 1.8vh;
          }
          
          .productImages img {
            width: 100%;
            height: 24vh;
            object-fit: contain;
            border-radius: 0.6vh;
            border: 0.1vh solid #eee;
          }       

          .bottomContainer {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5vh;
            padding: 1vh;
          }
          
          .arrowContainer {
            width: 4vh;
            height: 4vh;
            background-color: gray;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .arrowImg {
            font-size: 4vh;
            transform: rotate(315deg) translate(0.1vh, -0.1vh);
            margin-right: 0.8vh;
          }

          @media (max-width: 1000px) {
            .productsGrid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

        </style>
      </head>
      <body>
      <div class="actionButtons">
        <form action="/search" method="get">
          <input type="text" name="q" class="searchInput" placeholder="Искать по названию">
          <button type="submit" class="searchBtn">Найти</button>
        </form>
      </div>
      <div class="productsGrid">`;

      data.products.forEach(product => {
        html += `
        <a href="/product/${product.id}">
          <div class="productCard">
            <div class="productImages">
              ${product.images.slice(0, 1).map(img => `<img src="${img}" alt="${product.title}">`).join('')}
            </div>
            <div class="bottomContainer">
              <div class="textContainer">
                <h3 class="productTitle">${product.title}</h3>
                <div class="productPrice">
                  $${product.price}
                </div> 
              </div>
              <div class="arrowContainer">
                <p class="arrowImg">→</p>
              </div>
            </div>
          </div>
        </a>`;
      });
      
      return html;
    });
}

module.exports = getProductsHTML;