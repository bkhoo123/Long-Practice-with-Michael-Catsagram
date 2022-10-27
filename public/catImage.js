
//? Adds a Cat on load
export const createImage = () => {
    const img = document.createElement("img")
    img.style.width = '500px'
    img.style.height = '500px'

    const container = document.querySelector(".container")
    console.log('this is the container section', container)

    container.appendChild(img)

    fetchImage()
}

const CAT_URL = 'https://api.thecatapi.com/v1/images/search?size=small'

const fetchImage = async () => {
    const response = await fetch(CAT_URL)
    const data = await response.json()

    const url = data[0].url

    console.log('data', data)
    console.log('url', url)

    const img = document.querySelector('img')
    img.src = url
}
