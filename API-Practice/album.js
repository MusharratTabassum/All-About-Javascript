function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => displayAlbum(json))
}
function displayAlbum(photos) {

    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        console.log(photo.thumbnailUrl);
        const div = document.createElement('div');
        div.classList.add('photo-album');
        div.innerHTML = `
        <img src="${photo.thumbnailUrl}"></img>`;
        photoContainer.appendChild(div);
    }

}
loadAlbum();