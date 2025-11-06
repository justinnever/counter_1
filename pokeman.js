/*fetch function is used for making Http requests to fetch resources.
(JSON STYLE data and images,files)
simplifies asynchronous data fetching in js to interface with APIs
to retreive and to send data async over the web.
fetch(url,{options})
🧭 Quick Summary
Category	Range	Meaning
1xx	100–199	Informational
2xx	200–299	Success
3xx	300–399	Redirection
4xx	400–499	Client Error
5xx	500–599	Server Error

*/




fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.id))
    .catch(error => console.error(error));

