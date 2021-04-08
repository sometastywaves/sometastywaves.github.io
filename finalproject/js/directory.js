const requestURL = 'json/costamesa.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const stores = jsonObject['localCompany'];
  
    for (let i = 0; i < stores.length; i++ ) {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let web = document.createElement("p");
     let number = document.createElement("p");
     let image = document.createElement("img");
     
     h2.textContent = stores[i].name;
     web.textContent = stores[i].site;
     number.textContent = stores[i].number;
     image.src = stores[i].icon;
     image.setAttribute('src', stores[i].icon);
     
     card.appendChild(h2);
     card.appendChild(web);
     card.appendChild(number);
     card.appendChild(image);

     document.querySelector('div.cards').appendChild(card);
}  
 });

 