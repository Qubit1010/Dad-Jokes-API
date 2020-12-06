// joke api
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const dadJokes = async () => {
  try{
    const config = { headers: {Accept: 'application/json', }}
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    console.log("Something Went wrong", e)
  }

}

const addNewJokes = async () => {
  const jokeText = await dadJokes();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  jokes.append(newLi);
};


button.addEventListener('click', addNewJokes )