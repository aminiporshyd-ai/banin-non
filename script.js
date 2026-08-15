const correctPassword = "14041214";

const passwordBox = document.getElementById("passwordBox");
const giftBox = document.getElementById("giftBox");

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");

const envelope = document.getElementById("envelope");
const clickHint = document.getElementById("clickHint");


/* =========================
   باز کردن صفحه هدیه
========================= */

function openGift() {

    errorMessage.textContent = "";

    passwordInput.disabled = true;
    enterButton.disabled = true;

    passwordBox.classList.add("hide");

    setTimeout(() => {

        giftBox.classList.add("show");

        document.body.style.overflowX = "hidden";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 650);
}


/* =========================
   بررسی رمز
========================= */

function checkPassword() {

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        openGift();

    } else {

        errorMessage.textContent =
            "الرمز غلط، جربي بعد مرههه ❤️";

        passwordInput.value = "";

        passwordInput.focus();

        passwordBox.classList.remove("shake");

        void passwordBox.offsetWidth;

        passwordBox.classList.add("shake");
    }
}


/* =========================
   دکمه ورود
========================= */

enterButton.addEventListener(
    "click",
    checkPassword
);


/* =========================
   Enter روی کیبورد
========================= */

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkPassword();
        }
    }
);


/* =========================
   باز کردن پاکت نامه
========================= */

if (envelope) {

    envelope.addEventListener(
        "click",
        function() {

            envelope.classList.toggle("open");

            if (clickHint) {

                if (envelope.classList.contains("open")) {

                    clickHint.textContent =
                        "رسالتچ ❤️";

                } else {

                    clickHint.textContent =
                        "اضغطي على الظرف ❤️";
                }
            }

        }
    );


    /* =========================
       باز کردن با Enter یا Space
    ========================== */

    envelope.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                envelope.classList.toggle("open");

                if (clickHint) {

                    if (envelope.classList.contains("open")) {

                        clickHint.textContent =
                            "رسالتچ ❤️";

                    } else {

                        clickHint.textContent =
                            "اضغطي على الظرف ❤️";
                    }
                }
            }

        }
    );

}
