const key="5tKi6YhDPl1GFYLnKJpwZ2SqP4aGInP7XNt0fi5d"

const img = document.getElementById("randomNasaImage");

const title = document.getElementById("title");

const button = document.getElementById('button');

const date = document.getElementById('date');

const fetchMyImage = () => fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`)
.then(async (response) => {
    return response.json()
})
.then(data => {
  img.src = data[0].url
  title.innerHTML = data[0].title
  date.innerHTML = data[0].date
 
  
})



 button.addEventListener('click', function() {
    fetchMyImage()
})



