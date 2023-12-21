const KEY= "jmHM25AtCUYQKJfJKM7Sg92hL4jxc9ka"
const CLIENTKEY = "projet stage"

const gif = document.getElementById('gif');

const button = document.getElementById('button');

const title = document.getElementById('title')

const date = document.getElementById('date')



const fetchMyGif = () => fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}`)
.then(async (response) => {
    return response.json()
})
.then(data => {
    console.log("data", data)
     gif.src = data.data.images.downsized.url
     title.innerHTML = data.data.title
     date.innerHTML = data.data.import_datetime

})

button.addEventListener('click', function() {
    console.log("click")
    fetchMyGif()
})