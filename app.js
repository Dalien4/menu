const main = document.querySelector('.main');
const nav = document.querySelector('.nav');

const menu = [
    {
        id: 1,
        name: "buttermilk pancakes",
        price: "15.99",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        image: "buttermilk_pancakes.jpeg",
        type: "breakfast"
    },
    {
        id: 2,
        name: "dinner double",
        price: "13.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "dinner_double.jpeg",
        type: "lunch"
    },
    {
        id: 3,
        name: "godzilla milkshake",
        price: "6.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "godzilla_milkshake.jpeg",
        type: "shakes"
    },
    {
        id: 4,
        name: "country delight",
        price: "20.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "country_delight.jpeg",
        type: "breakfast"
    },
    {
        id: 5,
        name: "egg attack",
        price: "22.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "egg_attack.jpeg",
        type: "lunch"
    },
    {
        id: 6,
        name: "oreo dream",
        price: "18.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "oreo_dream.jpeg",
        type: "shakes"
    },
    {
        id: 7,
        name: "bacon overflow",
        price: "8.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "bacon_overflow.jpeg",
        type: "breakfast"
    },
    {
        id: 8,
        name: "american classic",
        price: "12.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "american_classic.jpeg",
        type: "lunch"
    },
    {
        id: 9,
        name: "quarantine buddy",
        price: "16.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "quarantine_buddy.jpeg",
        type: "shakes"
    },
    {
        id: 10,
        name: "bison steak",
        price: "22.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image: "bison_steak.jpeg",
        type: "dinner"
    }
];

// fonction pour insérer le code HTML ``

function setHTML(article){
    return `
    <article class="article">
        <div class="article__image">
            <img src="./images/${article.image}" alt="image de l'article">
        </div>
        <div class="article__content">
            <div class="article__group">
                <h2 class="article__title">${article.name}</h2>
                <span class="article__price">$${article.price}</span>
            </div>
            <p class="article__description">
                ${article.description}
            </p>
        </div>
    </article>
    `
}

// premier affichage du menu

window.addEventListener("DOMContentLoaded", function(){
    menu.forEach(function(element){
        main.insertAdjacentHTML("beforeend", setHTML(element));
    });
});

// affiche selon le bouton

nav.addEventListener("click", function(event){
    if(event.target.classList.contains('nav__button')){
        const id = event.target.getAttribute("id");
        main.textContent = "";
        menu.forEach(function(element){
            if(element.type === id || id === "all") main.insertAdjacentHTML("beforeend", setHTML(element));
        });
    }
});