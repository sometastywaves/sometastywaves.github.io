const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
  
for (let i = 0; i < prophets.length; i++ ) {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let bday = document.createElement("bday");
     let place = document.createElement("place");
     let image = document.createElement("image");
     
     h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
     bday.textContent = prophets[i].birthday;
     place.textContent = prophets[i].birthplace;
     image.src = prophets[i].imageurl;
     image.setAttribute('src', prophets[i].imageurl);
     


     card.appendChild(h2);
     card.appendChild(bday);
     card.appendChild(place);
     card.appendChild(image);

     document.querySelector('div.cards').appendChild(card);
}} );
