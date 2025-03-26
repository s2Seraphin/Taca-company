document.addEventListener("DOMContentLoaded", function() {
    const text = "O Futuro na Sua Mão";
    let i = 0;
    const typingElement = document.querySelector(".typing");

    function typeEffect() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
