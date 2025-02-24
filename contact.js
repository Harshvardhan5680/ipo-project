document.addEventListener("DOMContentLoaded", function () {
    
    const joinButton = document.querySelector(".join-btn");

    if (joinButton) {
        joinButton.addEventListener("click", function () {
            joinButton.style.transform = "scale(0.9)";
            setTimeout(() => {
                joinButton.style.transform = "scale(1)";
            }, 200);
            alert("Redirecting to the Community Page...");
            window.location.href = "#"; 
        });
    }

    const contactLinks = document.querySelectorAll(".contact-box a");
    
    contactLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            link.style.color = "#0056b3";
        });

        link.addEventListener("mouseleave", function () {
            link.style.color = "#007bff";
        });
    });

    const qrBox = document.querySelector(".qr-box");
    const closeQR = document.createElement("span");

    closeQR.innerHTML = "✖";
    closeQR.style.cursor = "pointer";
    closeQR.style.float = "right";
    closeQR.style.fontSize = "14px";
    closeQR.style.margin = "5px";
    
    if (qrBox) {
        qrBox.prepend(closeQR);
        closeQR.addEventListener("click", function () {
            qrBox.style.display = "none";
        });
    }
});
