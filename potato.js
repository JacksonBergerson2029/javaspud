function toggleScheme() {
    console.log("toggleScheme called")
    document.body.classList.toggle("scheme-mode")
}

function revealFact() {
    console.log("revealFact called")
    document.getElementById("faq-answer").classList.toggle("hidden");
}

function changeFontSize() {
    console.log("changeFontSize called")
    document.body.classList.toggle("change-font-size")
}