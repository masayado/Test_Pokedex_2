//document.addEventListener('DOMContentLoaded', () =>{
    
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/' + getRandomInt(1, 151);
    
    console.log(pokeApiUrl)
    
    $.getJSON(pokeApiUrl).done(function (data) {
        console.log(data);
        $('#pokeImg').attr('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`);
        $('#pokeName').text(data.species.name);
        $('#pokeId').text('#' + data.id);
        $('#pokeType').text(data.types[0].type.name);
        $('#ability').text(data.abilities[0].ability.name);
        $('#height').text(data.height);
        $('#weight').text(data.weight);
        $('#attack').text(data.stats[1].base_stat);
        $('#experience').text(data.base_experience);
        $('#defense').text(data.stats[3].base_stat);
    
        const type = data.types[0].type.name;
    
        const cardHeader = document.getElementById('cardHeader');
        const cardBody = document.getElementById('cardBody');
        const cardDataTitle = document.getElementById('cardDataTitle');
        const cardDataStats = document.getElementById('cardDataStats');
    
        switch (type) {
            case "normal":
                cardHeader.style.backgroundColor = '#BCC3C6'
                cardBody.style.backgroundColor = '#BCC3C6'
                cardDataTitle.style.color = '#BCC3C6'
                cardDataStats.style.color = '#BCC3C6'
                break;
            case "poison":
                cardHeader.style.backgroundColor = '#B090C1'
                cardBody.style.backgroundColor = '#B090C1'
                cardDataTitle.style.color = '#B090C1'
                cardDataStats.style.color = '#B090C1'
                break;
            case "psychic":
                cardHeader.style.backgroundColor = '#DB75AE'
                cardBody.style.backgroundColor = '#DB75AE'
                cardDataTitle.style.color = '#DB75AE'
                cardDataStats.style.color = '#DB75AE'
                break;
            case "grass":
                cardHeader.style.backgroundColor = '#8BBE8A'
                cardBody.style.backgroundColor = '#8BBE8A'
                cardDataTitle.style.color = '#8BBE8A'
                cardDataStats.style.color = '#8BBE8A'
                break;
            case "ground":
                cardHeader.style.backgroundColor = '#F78551'
                cardBody.style.backgroundColor = '#F78551'
                cardDataTitle.style.color = '#F78551'
                cardDataStats.style.color = '#F78551'
                break;
            case "ice":
                cardHeader.style.backgroundColor = '#43CABB'
                cardBody.style.backgroundColor = '#43CABB'
                cardDataTitle.style.color = '#43CABB'
                cardDataStats.style.color = '#43CABB'
                break;
            case "fire":
                cardHeader.style.backgroundColor = '#FFA756'
                cardBody.style.backgroundColor = '#FFA756'
                cardDataTitle.style.color = '#FFA756'
                cardDataStats.style.color = '#FFA756'
                break;
            case "rock":
                cardHeader.style.backgroundColor = '#BCA584'
                cardBody.style.backgroundColor = '#BCA584'
                cardDataTitle.style.color = '#BCA584'
                cardDataStats.style.color = '#BCA584'
                break;
            case "dragon":
                cardHeader.style.backgroundColor = '#9A9DCB'
                cardBody.style.backgroundColor = '#9A9DCB'
                cardDataTitle.style.color = '#9A9DCB'
                cardDataStats.style.color = '#9A9DCB'
                break;
            case "water":
                cardHeader.style.backgroundColor = '#58ABF6'
                cardBody.style.backgroundColor = '#58ABF6'
                cardDataTitle.style.color = '#58ABF6'
                cardDataStats.style.color = '#58ABF6'
                break;
            case "bug":
                cardHeader.style.backgroundColor = '#8CB331'
                cardBody.style.backgroundColor = '#8CB331'
                cardDataTitle.style.color = '#8CB331'
                cardDataStats.style.color = '#8CB331'
                break;
            case "dark":
                cardHeader.style.backgroundColor = '#5A595D'
                cardBody.style.backgroundColor = '#5A595D'
                cardDataTitle.style.color = '#5A595D'
                cardDataStats.style.color = '#5A595D'
                break;
            case "fighting":
                cardHeader.style.backgroundColor = '#EB4971'
                cardBody.style.backgroundColor = '#EB4971'
                cardDataTitle.style.color = '#EB4971'
                cardDataStats.style.color = '#EB4971'
                break;
            case "fire":
                cardHeader.style.backgroundColor = '#FFA756'
                cardBody.style.backgroundColor = '#FFA756'
                cardDataTitle.style.color = '#FFA756'
                cardDataStats.style.color = '#FFA756'
                break;
            case "ghost":
                cardHeader.style.backgroundColor = '#494873'
                cardBody.style.backgroundColor = '#494873'
                cardDataTitle.style.color = '#494873'
                cardDataStats.style.color = '#494873'
                break;
            case "steel":
                cardHeader.style.backgroundColor = '#447F9C'
                cardBody.style.backgroundColor = '#447F9C'
                cardDataTitle.style.color = '#447F9C'
                cardDataStats.style.color = '#447F9C'
                break;
            case "flying":
                cardHeader.style.backgroundColor = '#E0C198'
                cardBody.style.backgroundColor = '#E0C198'
                cardDataTitle.style.color = '#E0C198'
                cardDataStats.style.color = '#E0C198'
                break;
            case "electric":
                cardHeader.style.backgroundColor = '#F2CB55'
                cardBody.style.backgroundColor = '#F2CB55'
                cardDataTitle.style.color = '#F2CB55'
                cardDataStats.style.color = '#F2CB55'
                break;
            case "fairy":
                cardHeader.style.backgroundColor = '#EAB8CF'
                cardBody.style.backgroundColor = '#EAB8CF'
                cardDataTitle.style.color = '#EAB8CF'
                cardDataStats.style.color = '#EAB8CF'
                break;
            default:
                cardHeader.style.backgroundColor = '#68696E'
                cardBody.style.backgroundColor = '#68696E'
                cardDataTitle.style.backgroundColor = '#68696E'
                cardDataStats.style.backgroundColor = '#68696E'
                break;
        }
    });
//});



