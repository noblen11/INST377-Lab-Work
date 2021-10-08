async function windowActions(){

const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';


const request = await fetch(endpoint)
.   then(blob => blob.json())
.   then(data => restraunts.push(...data))

const restraunts= await request.json()

function findmathes(wordToMatch, restraunts){
    return restraunts.filter(place => {
    
    const regex = new RegExp(wordToMatch, 'gi');
        return place.restruant.match(regex) || place.type.match(regex) || place.zipCode.match(regex)
    });
    

function displayMatches(event){
    const matchArray = findMatches(this.value, restraunts);
    const html = matchArray.map(place =>{
        const regex = new  RegExp(event.target.value, 'gi')
        const restrauntName = place.restraunt.replace(regex, <span class ="h1">${this.value}</span>);
        return
        <li>
            <span class= "name">{$RestrauntName}</span>
            <span class= "Type"> ${place.type}</span>
            <span class ="location"> ${place.zipCode}</span>
        </li>
    
    }) .join('');
    suggestions.innertHTML = html;
     
}

const searchInput = documant.querySelector('.search')
const suggestions =document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', (evt) = {displayMatches(evt)})};

window.onload = windowActions;
}