// =========================
// STARS
// =========================
window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.6;

        music.play().catch(() => {});

    }

});
const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 220; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}

// =========================
// HOME PAGE
// =========================

const heart = document.getElementById("heartButton");

if (heart) {

    heart.addEventListener("click", () => {
        const music = document.getElementById("bgMusic");
        music.volume = 0.6;
        music.play().catch(() => {});

        const leftDoor = document.querySelector(".left-door");
        const rightDoor = document.querySelector(".right-door");
        const light = document.querySelector(".light");

        // Prevent multiple clicks
        heart.style.pointerEvents = "none";

        // Open doors
        leftDoor.classList.add("open-left");
        rightDoor.classList.add("open-right");

        // Heart disappears
        setTimeout(() => {

            heart.style.opacity = "0";
            heart.style.transform = "translate(-50%,-50%) scale(2)";

        }, 700);

        // Magical light
        setTimeout(() => {

            light.classList.add("show");

        }, 900);

        // Fade page
        setTimeout(() => {

            document.body.classList.add("fade-out");

        }, 2500);

        // Go to message page
        setTimeout(() => {

            window.location.href = "message.html";

        }, 4000);

    });

}

// =========================
// TYPEWRITER
// =========================

const typewriter = document.getElementById("typewriter");

const message = `Dear Future Father of My Kids ❤️,

Happy 4-Month Anniversary, my loveee! 🥺💘

We've learned and understood so much about each other over these past four months. We've been through a lot togetherb we've argued, we've made up, and we've always chosen to communicate, even when we were both upset. At the end of the day, we still chose each other, and I think that's what makes our relationship so special.

Thank you for everything you've done for me so far. Thank you for loving me, caring for me, being patient with me, and always staying by my side. I love you so so much babe. I promise I'll always be here for you, no matter what happens. Through every good day and every difficult one, I'll choose you over and over again.

I can't wait for the day I get to sleep beside you instead of through a screen. I dream about calling you my beloved husband, making you breakfast, lunch, and dinner, living together in our own home, giving each other a good morning kiss and a good night kiss, visiting our parents together, and sharing all the little moments that husbands and wives get to experience.

You have no idea how much I love you. A day without seeing your face or hearing your voice makes me miss you like crazy. I know I'm a little too obsessed with you, but honestly... who wouldn't be with your silly, adorable face? 🥺❤️

I love you so so so so so much, bebb. Thank you for making these four months the happiest ones of my life.

Happy 4-month anniversary, my lovely baby boyfriend. ❤️🫶
`;

if (typewriter) {

    let i = 0;

    function type() {

        if (i < message.length) {

            typewriter.innerHTML += message.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}

// =========================
// LOVE BUTTON
// =========================

const loveButton = document.getElementById("loveButton");

if (loveButton) {

    loveButton.addEventListener("click", () => {

        document.getElementById("surprise").classList.remove("hidden");

        createHearts();

    });

}

// =========================
// HEART RAIN
// =========================

function createHearts() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = (-100 - Math.random() * 300) + "px";

            heart.style.fontSize = (18 + Math.random() * 25) + "px";

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            const duration = 5000 + Math.random() * 3000;
            const drift = (Math.random() - 0.5) * 250;

            heart.animate([
                {
                    transform: "translate(0,0)",
                    opacity: 0
                },
                {
                    opacity: 1,
                    offset: 0.1
                },
                {
                    transform: `translate(${drift}px,120vh) rotate(${720 + Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: "linear"
            });

            setTimeout(() => {

                heart.remove();

            }, duration);

        }, Math.random() * 3000);

    }

}