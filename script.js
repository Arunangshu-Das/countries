// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getcountrydata = function (coun) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${coun}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    // console.log(Object.values(Object.values(data[Object.keys(data)[9]])[0])[0]);
    console.log(Object.values(data[Object.keys(data)[15]])[0]);
    const html = `<article class="country">
          <img class="country__img" src="${data.flags['png']}" />
          <div class="country__data">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data[Object.keys(data)[15]])[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(Object.values(data[Object.keys(data)[9]])[0])[0]
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getcountrydata('russia');
getcountrydata('japan');
getcountrydata('usa');
