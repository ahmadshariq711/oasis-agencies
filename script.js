function main() {
    let mail = document.getElementById("mail");
    mail.onclick = () => {
        let address = "info@oasis-agencies.com"
        navigator.clipboard.writeText(address);
        alert("Copied email to clipboard");
    };

    let home = document.getElementById("l_home");
    let about = document.getElementById("l_about");
    let services = document.getElementById("l_services");
    let contact = document.getElementById("l_contact");

    let e_home = document.getElementById("home");
    let e_about = document.getElementById("about");
    let e_services = document.getElementById("services");
    let e_contact = document.getElementById("contact");

    let cBox = document.getElementById("menuCheck");

    home.onclick = () => {
        cBox.checked = false;
        e_home.classList.remove("hidden");
        e_about.classList.add("hidden");
        e_services.classList.add("hidden");
        e_contact.classList.add("hidden");
    };

    about.onclick = () => {
        cBox.checked = false;
        e_home.classList.add("hidden");
        e_about.classList.remove("hidden");
        e_services.classList.add("hidden");
        e_contact.classList.add("hidden");
    };

    services.onclick = () => {
        cBox.checked = false;
        e_home.classList.add("hidden");
        e_about.classList.add("hidden");
        e_services.classList.remove("hidden");
        e_contact.classList.add("hidden");
    };

    contact.onclick = () => {
        cBox.checked = false;
        e_home.classList.add("hidden");
        e_about.classList.add("hidden");
        e_services.classList.add("hidden");
        e_contact.classList.remove("hidden");
    };
}

document.addEventListener("DOMContentLoaded", main);