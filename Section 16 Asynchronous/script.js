'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ------------ XMLHTTPREQUEST ---------- THE-SECTION

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET',
//         `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function (e) {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `<article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} M people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//           </div>
//           </article>`;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('Portugal');
// getCountryData('Argentina');


// ------------ Callback Hell ---------- THE-SECTION

const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${Object.values(data.name)[0]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
          </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET',
        `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function (e) {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render Country 1
        renderCountry(data);

        // Get neighbour country 2
        const [neighbour] = data.borders;

        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET',
            `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function (e) {
            // console.log(this.responseText);
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            // Render Country 1
            renderCountry(data2, 'neighbour');
        });

    });
};

getCountryAndNeighbour('Indonesia');