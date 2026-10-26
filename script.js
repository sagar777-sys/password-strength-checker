document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strength = document.getElementById("strengthText");
    const bar = document.getElementById("strengthFill");

    if (password.length === 0) {
        strength.textContent = "Enter a password";
        bar.style.width = "0%";
    } else if (password.length < 8) {
        strength.textContent = "Weak";
        strength.style.color = "#ef4444";
        bar.style.width = "33%";
        bar.style.backgroundColor = "#ef4444";
    } else if (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)
    ) {
        strength.textContent = "Strong";
        strength.style.color = "#4ade80";
        bar.style.width = "100%";
        bar.style.backgroundColor = "#4ade80";
    } else {
        strength.textContent = "Medium";
        strength.style.color = "#facc15";
        bar.style.width = "66%";
        bar.style.backgroundColor = "#facc15";
    }
});