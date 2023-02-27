let loginButton = document.querySelector('.entrance-button');
let loginPopUp = document.querySelector('.entrance-popup');
let closeButton = document.querySelector('.close-popup');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', close);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');

};

function close() {
    loginPopUp.classList.remove('show-popup');
}

loginPopUp.addEventListener('click',(e) => {
    if (e.target.classList.contains('show-popup')) {
        close();
    }
});