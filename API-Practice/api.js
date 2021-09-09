function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => console.log(json))
}
function displayData(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `name : ${user.name} email : ${user.email}`;
        ul.appendChild(li);
    }

}