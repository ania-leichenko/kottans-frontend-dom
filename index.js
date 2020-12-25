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
    }
];
 

const main = document.querySelector(".main");
       
const fragment = pokemonInformation.reduce((acc, elem) => {
    const pokemonLink = document.createElement('a');
    pokemonLink.innerText = elem.name;
    pokemonLink.onclick = function() {
        main.innerHTML = `
            <h2>${elem.name}</h2>
            <img class="pokemon-img" src="${elem.src}" alt="${elem.name}" title="${elem.name}" />
            <div>${elem.text}</div>
        `;
    }

    acc.append(pokemonLink);

    return acc;
}, document.createDocumentFragment());

const sidenav = document.querySelector(".sidenav");
sidenav.append(fragment);
