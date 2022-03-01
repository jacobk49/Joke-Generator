jokes = ['I once walked in on my parents having sex. It was the most embarrassing thirty minutes of my life.', 'They say that if you\'re afraid of homosexuals, it means that deep down inside you\'re actually a homosexual yourself. That worries me because I\'m afraid of dogs.', 'When Mozart would sit down and compose a new piano concerto, he\'d first pause, close his eyes, and say to himself, "I better make this as hard as f*ck to play."', 'I wouldn\'t call myself a fan of Steampunk. But I will say, it\'s the healthiest way to prepare punk.']
starts = ['You walk into a bar, ', 'You get home from a long day at work, ', 'You are waiting in a long line at a supermarket, ']
middles = ['Norm turns to you and says: ', 'Norm gyrates his pelvis and groans: ', 'Norm slaps you and screams: ']
const jokeGenerator = () => {
    const start = starts[Math.floor(Math.random() * starts.length)]
    const middle = middles[Math.floor(Math.random() * middles.length)]
    const joke = jokes[Math.floor(Math.random() * jokes.length)]
    return start + middle + joke
}
const addJoke = (joke) => jokes.push(joke)