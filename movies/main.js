async function fetchDog() {
    const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=3')
    if (response.status === 200) {
        const data = await response.json()
        data.forEach(({url}) => createImageNode(url))
    }
}

function createImageNode(url) {
    const image = document.createElement('img')
    image.src = url
    image.alt = 'Random dog'
    image.width = 300
    document.body.append(image)
}

fetchDog()