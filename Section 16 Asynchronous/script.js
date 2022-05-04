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

// const getCountryAndNeighbour = function (country) {

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET',
//         `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function (e) {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render Country 1
//         renderCountry(data);

//         // Get neighbour country 2
//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',
//             `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function (e) {
//             // console.log(this.responseText);
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             // Render Country 1
//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryAndNeighbour('Indonesia');

// ------------ Promises and Fetch API ---------- THE-SECTION


// // const request = new XMLHttpRequest();
// // request.open('GET',
// //     `https://restcountries.com/v3.1/name/${country}`);
// // request.send();


// const request = fetch('https://restcountries.com/v3.1/name/indonesia');
// console.log(request);

// // PROMISE => OBJECT that is used as a placeholder for the future result of async operation (container for an async delivered value) (container for a future value)

// // Promise => pending, settled (fullfilled or rejected), AND THEN consumed.

// ------------ CONSUMED PROMISES ---------- THE-SECTION

// const getCountryData = function (country) {
//     const request = fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         .then(data => renderCountry(data[0]));
// };

// getCountryData('indonesia');

// ------------ CHAINING PROMISES ---------- THE-SECTION

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data[0], 'neighbour'));
// };

// getCountryData('indonesia');

// ------------ HANDLING REJECTED PROMISES ---------- THE-SECTION

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             console.error(`${err}`);
//             renderError(`Something went wrong ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// btn.addEventListener('click', function (e) {
//     getCountryData('indonesia');
// });


// ------------ THROWING ERRORS MANUALLY ---------- THE-SECTION

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//         return response.json();
//     });
// };

// // const getCountryData = function (country) {
// //     // Country 1
// //     fetch(`https://restcountries.com/v3.1/name/${country}`)
// //         .then(response => {
// //             console.log(response);

// //             if (!response.ok) throw new Error(`Country not found ${response.status}`);

// //             return response.json();
// //         })
// //         .then(data => {
// //             renderCountry(data[0]);
// //             // const neighbour = data[0].borders[0];
// //             const neighbour = 'adff';

// //             if (!neighbour) return;

// //             // Country 2
// //             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //         })
// //         .then(response => {
// //             if (!response.ok) throw new Error(`Country not found ${response.status}`);
// //             return response.json();
// //         })
// //         .then(data => renderCountry(data[0], 'neighbour'))
// //         .catch(err => {
// //             console.error(`${err}`);
// //             renderError(`Something went wrong ${err.message}. Try again!`);
// //         })
// //         .finally(() => {
// //             countriesContainer.style.opacity = 1;
// //         });
// // };

// // shorter

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             // const neighbour = 'adff';

//             if (!neighbour) throw new Error('No neighbour found!');

//             // Country 2
//             return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Country not found`)
//                 .then(data => renderCountry(data[0], 'neighbour'))
//                 .catch(err => {
//                     console.error(`${err}`);
//                     renderError(`Something went wrong ${err.message}. Try again!`);
//                 })
//                 .finally(() => {
//                     countriesContainer.style.opacity = 1;
//                 });
//         });
// };

// btn.addEventListener('click', function (e) {
//     getCountryData('indonesia');
// });

// ------------ CODING CHALLENGES 1 ---------- THE-SECTION

// const whereAmI = function (lat, lng) {
//     fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
//         .then(response => {
//             if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
//             return response.json();
//         })
//         .then(data => {
//             // console.log(data);
//             console.log(data.address.city);
//             console.log(data.address.country);
//             return fetch(`https://restcountries.com/v3.1/name/${data.address.country}`);
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found ${response.status}`);
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(err.message));
// };

// whereAmI(52.508, 13.381);


// ------------ EVENT LOOP ---------- THE-SECTION

// console.log('Test Start');

// setTimeout(() => console.log('0 sect timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 900000000; i++) {

//     }
//     console.log(res);
// });
// console.log('Test end');

// ------------ BUILDING A SIMPLE PROMISE ---------- THE-SECTION

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //     console.log('Drawing ...');
// //     setTimeout(function () {
// //         if (Math.random() >= 0.5) {
// //             resolve('You Win');
// //         } else {
// //             reject(new Error('You lose'));
// //         }
// //     }, 2000);
// // });

// // lotteryPromise.then(res => console.log(res))
// //     .catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(2)
//     .then(() => {
//         console.log('I waited for 1 seconds');
//         return wait(1);
//     }).then(() => {
//         console.log('I waited for 1 seconds');
//         return wait(1);
//     }).then(() => {
//         console.log('I waited for 1 seconds');
//         return wait(1);
//     }).then(() => {
//         console.log('I waited for 1 seconds');
//     });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// ------------ PROMOSIFYING GEOLOCATION API  ---------- THE-SECTION



// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => console.log(position),
//         //     err => console.error(err)
//         // );
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// // getPosition().then(pos => console.log(pos));


// const whereAmI = function () {

//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng } = pos.coords;
//         return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
//     })
//         .then(response => {
//             if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
//             return response.json();
//         })
//         .then(data => {
//             // console.log(data);
//             console.log(data.address.country);
//             return fetch(`https://restcountries.com/v3.1/name/${data.address.country}`);
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found ${response.status}`);
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(err.message));
// };

// btn.addEventListener('click', whereAmI);


// ------------ CODING CHALLENGE 2  ---------- THE-SECTION

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function (e) {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function (e) {
//             reject(new Error('Image not found'));
//         });
//     });
// };

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// let currentImg;
// createImage('./img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

// ------------ CONSUME PROMISES WITH ASYNC AWAIT  ---------- THE-SECTION


// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };


// const whereAmI = async function () {
//     try { // Geolocation
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         // Reverse geocoding
//         const resGeo = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);

//         if (!resGeo.ok) throw new Error('Problem getting location data');

//         const dataGeo = await resGeo.json();
//         // console.log(dataGeo);

//         // Country data
//         // fetch(`https://restcountries.com/v3.1/name/data.address.${country}`).then(res => console.log(res));
//         const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
//         if (!res.ok) throw new Error('Problem getting country');

//         const data = await res.json();
//         renderCountry(data[0]);
//         return `You are in ${dataGeo.address.town}`;
//     } catch (err) {
//         console.error(err);

//         // Reject promise returned from async function
//         throw err;
//     }
// };

// console.log('1: WILL GET LOCATION');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //     .then(city => console.log(`2: ${city}`))
// //     .catch(err => console.error(`2: ${err.message}`))
// //     .finally(() => console.log('3: FINISHED GETTING LOCATION'));

// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.error(`2: ${err.message}`);
//     }
//     console.log('3: FINISHED GETTING LOCATION');
// }());

// ------------ TRY CATCH  ---------- THE-SECTION

// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     console.log(err.message);
// }


// ------------ RETURNING VALUE FROM ASYNC FUNCTIONS  ---------- THE-SECTION;

// CHECK ABOVE CODE

// ------------ RUNNING PROMISES IN PARALLEL  ---------- THE-SECTION;


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//         return response.json();
//     });
// };

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//         // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

//         const data = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`), getJSON(`https://restcountries.com/v3.1/name/${c2}`), getJSON(`https://restcountries.com/v3.1/name/${c3}`)]);
//         console.log(data.map(d => d[0].capital[0]));

//     } catch (err) {
//         console.error(err);
//     }
// };

// get3Countries('Portugal', 'Canada', 'Indonesia');

// ------------ RACE, ALL SETTLE, ANY  ---------- THE-SECTION;


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//         return response.json();
//     });
// };

// // (async function () {
// //     const res = await Promise.race([getJSON(`https://restcountries.com/v3.1/name/indonesia`), getJSON(`https://restcountries.com/v3.1/name/malaysia`), getJSON(`https://restcountries.com/v3.1/name/portugal`)]);
// //     console.log(res[0]);
// // })();

// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('request took too long'));
//         }, sec);
//     });
// };

// // Promise.race([
// //     getJSON(`https://restcountries.com/v3.1/name/portugal`),
// //     timeout(760)
// // ]).then(res => console.log(res[0]))
// //     .catch(err => console.error(err));

// // Promise.allSettled

// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve('AnotherSuccess'),
// ]).then(res => console.log(res));

// // Promise.any (return first fullfilled promise)

// Promise.any([
//     Promise.reject('Error'),
//     Promise.resolve('Success'),
//     Promise.resolve('AnotherSuccess'),
// ]).then(res => console.log(res));


// ------------ CODING CHALLENGE 3 ---------- THE-SECTION;


const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function (e) {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function (e) {
            reject(new Error('Image not found'));
        });
    });
};

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// let currentImg;
// createImage('./img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('./img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 2
        img = await createImage('./img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';

    } catch (err) {
        console.error(err);
    }
};

// loadNPause();

// PART 2

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => {
            return await createImage(img);
        });
        console.log(imgs);

        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);

        imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);