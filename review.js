const reviews = [
            {
                text: "Produse de calitate și personal amabil. Focaccia este incredibil de buna, precum toate produsele de altfel. Recomand cu încredere.",
                name: "Paul S.",
                stars: "★★★★★"
            },
            {
                text: "Una dintre cele mai bune brutării din Cluj, situată în inima Clujului, Transilvania.  Au tot felul de bunătăți, făcute cu cele mai bune ingrediente (toate naturale) și dragoste.  De fiecare dată când sunt în zonă, nu ratez acest loc. Creeaza dependenta 😍!",
                name: "Ramona D.",
                stars: "★★★★★"
            },
            {
                text: "Produsele sunt de calitate, gustoase, rețetele sunt respectate. Felicitări tuturor celor care trudesc pentru noi!",
                name: "Sanda M.",
                stars: "★★★★★"
            },
            {
                text: "Cea mai buna pâine din Cluj, prețuri pe măsura calității produselor.",
                name: "Sorin S.",
                stars: "★★★★★"
            },
            {
                text: "O băcănie cum toate ar trebui sa fie. Pâinea e cea mai buna din Cluj-Napoca. Produse de la alți producători locali de cea mai bună calitate și oameni faini.",
                name: "Bogdan H.",
                stars: "★★★★★"
            }
            
        ];

        let currentReview = 0;
        let isAnimating = false;

        const reviewsStage = document.getElementById("reviews-stage");

        function createReviewCards() {
            reviewsStage.innerHTML = "";

            reviews.forEach((review, index) => {
                const reviewCard = document.createElement("div");
                reviewCard.classList.add("review-card");
                reviewCard.setAttribute("data-index", index);

                reviewCard.innerHTML = `
                    <p class="review-text">„${review.text}”</p>
                    <h3 class="review-name">${review.name}</h3>
                    <p class="review-stars">${review.stars}</p>
                `;

                reviewsStage.appendChild(reviewCard);
            });

            updateReviewPositions();
        }

        function updateReviewPositions() {
            const cards = document.querySelectorAll(".review-card");

            cards.forEach((card, index) => {
                card.className = "review-card";

                const prevIndex = (currentReview - 1 + reviews.length) % reviews.length;
                const nextIndex = (currentReview + 1) % reviews.length;

                if (index === currentReview) {
                    card.classList.add("active-review");
                } else if (index === prevIndex) {
                    card.classList.add("prev-review");
                } else if (index === nextIndex) {
                    card.classList.add("next-review");
                } else {
                    card.classList.add("hidden-review");
                }
            });
        }

        function nextReview() {
            if (isAnimating) return;

            isAnimating = true;
            currentReview = (currentReview + 1) % reviews.length;
            updateReviewPositions();

            setTimeout(() => {
                isAnimating = false;
            }, 650);
        }

        function prevReview() {
            if (isAnimating) return;

            isAnimating = true;
            currentReview = (currentReview - 1 + reviews.length) % reviews.length;
            updateReviewPositions();

            setTimeout(() => {
                isAnimating = false;
            }, 650);
        }

        createReviewCards();