function getSearch(title) {
  return fetch(`https://dummyjson.com/products/search?q=${title}`)
    .then(res => res.json())
    .then(data => {
      let html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <title>Запрос ${title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            max-width: 120vh;
            margin: 0 auto;
            padding: 2vh;
            background-color: #f5f5f5;
          }
          h1, h2, h3 {
            color: black;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          .product {
            background: white;
            border-radius: 1vh;
            padding: 2vh;
            margin-bottom: 2vh;
            box-shadow: 0 0.2vh 0.5vh rgba(0,0,0,0.1);
          }
          .product:hover {
            transform: translateY(-0.5vh);
            box-shadow: 0 0.5vh 1.5vh rgba(0,0,0,0.1);
          }

          .images {
            display: flex;
            margin: 1.5vh 0;
          }
          .images img {
            max-width: 10vh;
            max-height: 10vh;
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
        </style>
      </head>
      <body>
        <h2>Найдено по запросу: ${title}</h2>
        <a href="javascript:history.back()" class="backButton">← Назад</a>`;

      data.products.forEach(product => {
        html += `
        <a href="/product/${product.id}">
          <div class="product">
            <div class="images">
              ${product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('')}
            </div>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
          </div>
        </a>`;
      });

      html += `</body></html>`;
      return html;
    });
}

module.exports = getSearch;