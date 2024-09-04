const username = document.getElementById("input");
const button = document.getElementById("button");
const user = document.getElementById("user");

button.addEventListener('click', () => {
    const value = username.value;
    localStorage.setItem("name", value);
    location.reload(); // Reload the page to update the greeting immediately
});

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    if (value) {
        user.innerText = `Hi There, My name is ${value} :)`;
    }
});
