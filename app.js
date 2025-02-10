document.querySelectorAll("nav a, .button").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");

    // Ukryj wszystkie sekcje
    document.querySelectorAll(".content").forEach((section) => {
      section.classList.remove("active");
    });

    // Pokaż wybraną sekcję
    document.getElementById(targetId).classList.add("active");
  });
});

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// oceny

const reviews = [
  {
    author: "Jan Kowalski",
    text: "Świetna obsługa i profesjonalne podejście.",
    rating: 5,
  },
  {
    author: "Anna Nowak",
    text: "Polecam! Bardzo pomocny personel.",
    rating: 4,
  },
  {
    author: "Piotr Wiśniewski",
    text: "Bardzo miłe doświadczenie. Na pewno wrócę.",
    rating: 5,
  },
  {
    author: "Ewa Zielińska",
    text: "Dobry serwis, ale czas oczekiwania mógłby być krótszy.",
    rating: 3,
  },
  {
    author: "Karol Majewski",
    text: "Wszystko w porządku, polecam.",
    rating: 4,
  },
];

function displayReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  let currentIndex = 0;

  function showReview() {
    const review = reviews[currentIndex];
    reviewsContainer.innerHTML = `
      <div class="review">
        <p><strong>${review.author}</strong></p>
        <p>${review.text}</p>
        <p><em>Rating: ${"★".repeat(review.rating)}</em></p>
      </div>
    `;

    currentIndex = (currentIndex + 1) % reviews.length;
  }

  showReview();
  setInterval(showReview, 3000); // Zmieniaj recenzje co 3 sekundy
}

window.onload = displayReviews;
