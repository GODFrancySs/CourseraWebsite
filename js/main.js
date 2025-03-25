document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("faceit-profile");
    const resetBtn = document.querySelector("#gamer-buttons button:first-child");
    const searchBtn = document.querySelector("#gamer-buttons button:last-child");

    resetBtn.addEventListener("click", function () {
        textarea.value = ""; // Limpa a caixa de texto
    });

    searchBtn.addEventListener("click", function () {
        const faceitURL = textarea.value.trim();
        const regex = /https:\/\/www\.faceit\.com\/\w{2}\/players\/([^\/]+)/;
        const match = faceitURL.match(regex);

        if (match && match[1]) {
            const username = match[1];
            window.open(`https://faceitanalyser.com/havewemet/${username}/XiSC0p/cs2`, "_blank");
        } else {
            alert("Por favor, insere um URL válido do Faceit!");
        }
    });
});