'use strict';

//VARIABLES
const listEl = document.querySelector('.js-band-list');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


//FUNCTIONS
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = [...bands].sort((a,b) => strip(a) > strip(b) ? 1 : -1);

function renderList(array){
    return array.map(item => `<li>${item}</li>`).join('');
}

//DOM
listEl.innerHTML = renderList(sortedBands);
