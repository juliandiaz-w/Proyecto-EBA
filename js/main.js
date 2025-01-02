const reviews = [
    {
        author: "Juan Carlos",
        text: "Muy buena atención, gran variedad de productos",
        rating: 5,
    },
    {
        author: "Vanesa Cassani",
        text: "Son unos genios. Súper amables y expeditivos!",
        rating: 5
    },
    {
        author: "Tomoki Sakurai",
        text: "Siempre tienen lo que voy a comprar y a buen precio.",
        rating: 5
    },
    {
        author: "Marcelo Rossi",
        text: "Excelente atención, muy buenos precios y productos de primera calidad!!!",
        rating: 5
    },
    {
        author: "Ricardo Astengo",
        text: "Muy buena atención, predispuestos para las consultas que pueda tener el cliente. Variedad de productos y buenos precios. Gracias",
        rating: 5
    }
];

let currentIndex = 0;

function renderReviews() {
    const slidesContainer = document.querySelector(".review-slides");
    slidesContainer.innerHTML = reviews
        .map(
            (review) => `
            <div class="review-slide">
                <h3>${review.author}</h3>
                <p>${review.text}</p>
                <div class="review-rating">${"⭐".repeat(review.rating)}</div>
            </div>
        `
        )
        .join("");
}

function showSlide(index) {
    const slidesContainer = document.querySelector(".review-slides");
    if (index < 0) currentIndex = reviews.length - 1;
    else if (index >= reviews.length) currentIndex = 0;
    else currentIndex = index;

    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector(".review-next").addEventListener("click", () => showSlide(currentIndex + 1));
document.querySelector(".review-prev").addEventListener("click", () => showSlide(currentIndex - 1));

renderReviews();
showSlide(currentIndex);
