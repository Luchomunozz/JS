const back_card = document.querySelector('#card');
const image = document.querySelector('#image_card');
const btn_generate = document.querySelector('#btn_generate');


const url_cat = 'https://thatcopy.pw/catapi/rest/';

function generate() {
    fetch(url_cat)
    .then(response => response.json())
    .then(data => {   
        create_card(data) 
    })
    .catch(error => console.log(error))
    
}

generate();


btn_generate.addEventListener('click', generate)

function create_card(data) {    
    image.setAttribute('src', data[0].url)
    btn_generate.setAttribute('button');
    console.log(data)
}



