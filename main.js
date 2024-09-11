
/*=============== APERTURA E CHIUSURA HAMBURGER MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    // Chiudere il menu quando un link è cliccato
    document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', () => {
        navToggle.checked = false;
    }));
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando lo scroll è maggiore di 50 viewport height, cambia il colore di sfondo e del testo
    if (this.scrollY >= 50) {
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(227, 181, 005, 0.2)';
        header.style.backgroundColor = '#0f0f10';
        header.style.color = '';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== SLIDER CAROUSEL SECTION ===============*/

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*=============== HIDE RICERCA BUTTON MOBILE - gestire lo scroll e nascondere l'elemento dopo 200px.===============*/
document.addEventListener('DOMContentLoaded', function() {
    var ricerca = document.getElementById('ricerca');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            ricerca.classList.add('hidden');
        } else {
            ricerca.classList.remove('hidden');
        }
    });

    ricerca.addEventListener('click', function(event) {
        // Questo assicura che l'elemento sia cliccabile anche quando è nascosto
        if (ricerca.classList.contains('hidden')) {
            event.stopPropagation();
            ricerca.classList.remove('hidden');
        }
    });
});

/*=============== TRANSAZIONE CAROSELLO IN LOOP ===============*/
document.addEventListener("DOMContentLoaded", function() {
    const carosello = document.querySelector(".carosello");
    const caroselloItems = document.querySelectorAll(".carosello-item");

    // Clona tutte le immagini nel carosello
    const numItems = caroselloItems.length;
    for (let i = 0; i < numItems; i++) {
        const clone = caroselloItems[i].cloneNode(true);
        clone.classList.add("clone");
        carosello.appendChild(clone);
    }

    let currentIndex = 0;
    const slideWidth = caroselloItems[0].offsetWidth; // Larghezza di un singolo slide

    function slideNext() {
        currentIndex++;
        carosello.style.transition = "transform 0.5s ease";
        carosello.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function slidePrev() {
        currentIndex--;
        carosello.style.transition = "transform 0.5s ease";
        carosello.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    // Aggiungi eventi per gestire il ciclo infinito
    carosello.addEventListener("transitionend", function() {
        if (currentIndex >= numItems) {
            currentIndex = 0;
            carosello.style.transition = "none";
            carosello.style.transform = `translateX(0)`;
        }
        if (currentIndex < 0) {
            currentIndex = numItems - 1;
            carosello.style.transition = "none";
            carosello.style.transform = `translateX(${-numItems * slideWidth}px)`;
        }
    });

    // Avvia l'animazione
    setInterval(slideNext, 6000); // Cambia slide ogni 3 secondi (modifica il valore come preferisci)
});

/*=============== FUNZIONE DI RICERCA PAGINA ===============*/
function searchPage() {
    // Ottieni il valore dell'input di ricerca
    var query = document.getElementById("searchInput").value.toLowerCase();

    // Tenta di reindirizzare direttamente alla pagina corrispondente
    if (query === "sicilia" || query === "veneto" || query === "trentino") {
        window.location.href = query + ".html";
    } else {
        // Mostra il messaggio di errore
        document.getElementById("errorMessage").style.display = "block";
    }
}

function clearErrorMessage() {
    // Nascondi il messaggio di errore quando l'utente modifica l'input
    document.getElementById("errorMessage").style.display = "none";
}