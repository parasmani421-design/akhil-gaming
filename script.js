let selectedMode = "";

const formLinks = {
    "1v1": "https://docs.google.com/forms/d/e/1FAIpQLScP4p29FVnrG4nC3Hc0pvDzgzyXXeXKyKnxtWvVtIUm6n2kKQ/viewform",
    "2v2": "https://docs.google.com/forms/d/e/1FAIpQLScP4p29FVnrG4nC3Hc0pvDzgzyXXeXKyKnxtWvVtIUm6n2kKQ/viewform",
    "3v3": "https://docs.google.com/forms/d/e/1FAIpQLScP4p29FVnrG4nC3Hc0pvDzgzyXXeXKyKnxtWvVtIUm6n2kKQ/viewform",
    "4v4": "https://docs.google.com/forms/d/e/1FAIpQLScP4p29FVnrG4nC3Hc0pvDzgzyXXeXKyKnxtWvVtIUm6n2kKQ/viewform"
};

function selectMode(mode) {

    selectedMode = mode;

    // Remove active class
    document.querySelectorAll(".mode").forEach(el => {
        el.classList.remove("active");
    });

    // Add active class
    event.target.classList.add("active");

    // Update Entry Fee
    const entryFees = {
        "1v1": "₹10",
        "2v2": "₹20",
        "3v3": "₹30",
        "4v4": "₹15 Per Player"
    };

    document.getElementById("entryText").innerText = entryFees[mode];

    // Update Prize
    document.getElementById("prizeText").innerText =
        "🥇 1st – ₹30 | 🥈 Highest Kill – ₹20 | 🥉 2nd Highest Kill – ₹18";
}

function registerMode() {
    if (selectedMode === "") {
        alert("Please select a mode first!");
        return;
    }

    window.open(formLinks[selectedMode], "_blank");
}
