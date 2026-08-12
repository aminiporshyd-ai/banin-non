const correctPassword = "14041214";

const passwordBox = document.getElementById("passwordBox");
const giftBox = document.getElementById("giftBox");

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");


function openGift() {

    errorMessage.textContent = "";

    passwordInput.disabled = true;
    enterButton.disabled = true;

    passwordBox.classList.add("hide");

    setTimeout(() => {
        giftBox.classList.add("show");
    }, 650);
}


function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        openGift();

    } else {

        errorMessage.textContent =
            "الرمزغلط جربی بعد مرههه ❤️";

        passwordInput.value = "";

        passwordInput.focus();

        passwordBox.classList.remove("shake");

        void passwordBox.offsetWidth;

        passwordBox.classList.add("shake");
    }
}


enterButton.addEventListener("click", checkPassword);


passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});
