async function windowActions() { 
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const restraunts = await request.json();
  
  const searchInput = document.querySelector('#restraunt-search');
  const suggestions = document.querySelector('#suggestions');

  function findMatches(wordToMatch, data) {
    return data.filter((restraunt) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return restraunt.name.match(regex) || restraunt.category.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(this.value, restraunts);
    const html = matchArray.map((restraunt) => {
      const regex = new RegExp(event.target.value, 'gi');
      const restrauntName = restraunt.name.replace(regex, `<span class ="h1">${this.value}</span>`);
      return `
          <li>
              <span class= "name">${restrauntName}</span>
              <span class= "Type"> ${restraunt.category}</span>
          </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
}

window.onload = windowActions;
