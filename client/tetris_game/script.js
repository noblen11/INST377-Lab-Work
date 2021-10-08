const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restraunts = [];
fetch(endpoint)
.   then(blob => blob.json())
.   then(data => cities.push(...data))

function findmathes(wordToMatch, restraunts){
    return cities.filter(place => {
    
    const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
    

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place =>{
        return
        <li>
            <span class= "name"> {$place.city}, ${place.state}</span>
            <span class ="population"> ${place.population}</span>
        </li>
    
    }) join('')
     
}

const searchInput = documant.querySelector('.search')
const suggestions =document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);