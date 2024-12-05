//------------dom manupulation-------------











const button = document.querySelector('button ');
const jokes = document.querySelector('#jokes')


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        console.log('error', e);
        return "no jokes available sorry";
    }
}

const addNewJoke = async() => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);

}

button.addEventListener('click', addNewJoke);

//you need to await or put .then() on every thing that returns a promise