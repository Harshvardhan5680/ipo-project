document.addEventListener("DOMContentLoaded", function () {
    const brokerCards = document.querySelectorAll(".broker-card");

    brokerCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.02)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
        });
    });

    const openButtons = document.querySelectorAll(".open-ac");

    openButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to account opening page...");
        });
    });
});
