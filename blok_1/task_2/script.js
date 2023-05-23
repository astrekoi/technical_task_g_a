const fetch = require('node-fetch');

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

getData('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data));
