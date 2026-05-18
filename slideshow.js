document.addEventListener("DOMContentLoaded", function () {
    const photos = Array.from(document.querySelectorAll(".photo-stack .stack-photo"));

    if (photos.length <= 1) {
        return;
    }

    let order = photos.map((_, index) => index);

    const positions = [
        {
            x: "-42px",
            y: "34px",
            r: "-10deg",
            s: "0.92"
        },
        {
            x: "34px",
            y: "24px",
            r: "8deg",
            s: "0.95"
        },
        {
            x: "-14px",
            y: "12px",
            r: "-5deg",
            s: "0.98"
        },
        {
            x: "0px",
            y: "0px",
            r: "4deg",
            s: "1"
        }
    ];

    function renderStack() {
        order.forEach((photoIndex, stackIndex) => {
            const photo = photos[photoIndex];
            const pos = positions[stackIndex];

            photo.classList.remove("lifting", "move-to-top");

            photo.style.setProperty("--x", pos.x);
            photo.style.setProperty("--y", pos.y);
            photo.style.setProperty("--r", pos.r);
            photo.style.setProperty("--s", pos.s);

            photo.style.zIndex = stackIndex + 1;
        });
    }

    function moveBottomPhotoToTop() {
        const bottomPhotoIndex = order[0];
        const bottomPhoto = photos[bottomPhotoIndex];

        /*
            Punem poza de jos deasupra vizual,
            dar o lăsăm inițial în poziția ei.
        */
        bottomPhoto.style.zIndex = 100;

        /*
            Pasul 1: poza iese din stack, ca și cum o ridici cu mâna.
        */
        bottomPhoto.classList.add("lifting");

        setTimeout(() => {
            /*
                Pasul 2: poza vine peste celelalte.
            */
            bottomPhoto.classList.remove("lifting");
            bottomPhoto.classList.add("move-to-top");
        }, 450);

        setTimeout(() => {
            /*
                Pasul 3: abia acum schimbăm ordinea reală.
            */
            order.shift();
            order.push(bottomPhotoIndex);

            renderStack();
        }, 1200);
    }

    renderStack();

    setInterval(moveBottomPhotoToTop, 3200);
});