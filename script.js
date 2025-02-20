const investors = [
    { name: "Rakesh Jhunjhunwala", image: "images/rakesh.jpg", description: "He started investing in the 90s." },
    { name: "Anil Goel", image: "images/anil.jpg", description: "He started investing in the 90s." },
    { name: "Ashish Dhawan", image: "images/ashish.jpg", description: "He started investing in the 90s." },
    { name: "Ashish Kacholia", image: "images/kacholia.jpg", description: "He started investing in the 90s." },
    { name: "Dolly Rajeev Khanna", image: "images/dolly.jpg", description: "He started investing in the 90s." },
    { name: "Hemendra Kothari", image: "images/hemendra.jpg", description: "He started investing in the 90s." },
    { name: "Nemish Shah", image: "images/nemish.jpg", description: "He started investing in the 90s." },
    { name: "Porinju Veliyath", image: "images/porinju.jpg", description: "He started investing in the 90s." },
    { name: "Radhakishan Damani", image: "images/damani.jpg", description: "He started investing in the 90s." },
    { name: "Sunil Singhania", image: "images/singhania.jpg", description: "He started investing in the 90s." },
    { name: "Vijay Kedia", image: "images/vijay.jpg", description: "He started investing in the 90s." }  
];


function renderInvestors(filter = "") {
    const container = document.getElementById("investorContainer");
    container.innerHTML = "";
    investors
        .filter(investor => investor.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(investor => {
            const card = `
                <div class="col-md-3 mb-4">
                    <div class="card investor-card shadow-sm">
                        <img src="${investor.image}" alt="${investor.name}" class="card-img-top">
                        <div class="card-body text-center">
                            <h5 class="card-title">${investor.name}</h5>
                            <p class="card-text">${investor.description}</p>
                            <a href="#" class="btn btn-primary">View Holdings</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
    renderInvestors(e.target.value);
});

renderInvestors();