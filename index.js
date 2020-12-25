const pokemonInformation = [
    {
        id: 1,
        name: "Сквиртл",
        text: `Сквиртл — стартовый покемон Водный.png типа из первого поколения покемонов.
         Один из трёх стартовых покемонов региона Канто. Первые два из них — это Бульбазавр и Чармандер.` ,
         src: "./img/pokemon1.png",
    },
    {
        id: 2,
        name: "Милотик",
        text: `Милотик  - покемон водного типа из третьего поколения.` ,
        src: "./img/pokemon2.png",
    },
    {
        id: 3,
        name: "Сфил",
        text: `Сфил - покемон двух типов: Ледяной и Водный, из 3-го поколения. Эволюционирует в покемона Силео на 32 уровне. 
        Который эволюционирует в покемона Валрейн на 44 уровне.` ,
        src: "./img/pokemon3.png",
    },
    {
        id: 4,
        name: "Псайдак",
        text: `Псайдак - покемон водного типа из первого поколения покемонов. 
        Эволюционирует в Голдака на 33 уровне.` ,
        src: "./img/pokemon4.png",
    },
    {
        id: 5,
        name: "Корсола",
        text: `Корсола  - покемон водного типа из второго поколения.
        Данный покемон не имеет эволюционных форм.
        Имеет региональную галар-форму призрачного типа и эволюционирует в Курсолу на 38 уровне.` ,
        src: "./img/pokemon5.jpg",
    }
];
 

const main = document.querySelector(".main");
/* 
const main = {
    innerText: "Выбери покемона",
    innerHTML: "Выбери покемона",
    onclick: null,
    children: [],
    // ...
}
*/
       
const navLinks = pokemonInformation.reduce(
    (acc, pokemon) => {
        const pokemonLink = document.createElement('a');
        pokemonLink.innerText = pokemon.name;
        pokemonLink.onclick = function() {
            main.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img class="pokemon-img" src="${pokemon.src}" alt="${pokemon.name}" title="${pokemon.name}" />
                <div>${pokemon.text}</div>
            `;
        }
        acc.append(pokemonLink);

        return acc;
    }, 
    document.createDocumentFragment(), // <></>
);

const sidenav = document.querySelector(".sidenav");
sidenav.append(navLinks);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.onclick = function() {
  sidenav.classList.toggle("show");
}