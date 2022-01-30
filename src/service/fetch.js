const options = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "ef8a0cea91msh15048af1f678386p104b5bjsn5118bf13fccd"
  }
};

const fetchAllGames = async (type) => {
  try {
    const URL = type ? `https://mmo-games.p.rapidapi.com/games?platform=${type}` : 'https://mmo-games.p.rapidapi.com/games';
    const response = await fetch(URL, options)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}


module.exports = { fetchAllGames };