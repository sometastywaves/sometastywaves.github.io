const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
  
for (let i = 0; i < prophets.length; i++ ) {
     let towns = document.createElement('section');
     let h2 = document.createElement('h2');
     let bday = document.createElement("p");
     let place = document.createElement("p");
     let image = document.createElement("img");
     
     h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
     bday.textContent = prophets[i].birthdate;
     place.textContent = prophets[i].birthplace;
     image.src = prophets[i].imageurl;
     image.setAttribute('src', prophets[i].imageurl);
     
     card.appendChild(h2);
     card.appendChild(bday);
     card.appendChild(place);
     card.appendChild(image);

     document.querySelector('div.cards').appendChild(card);
}} );
