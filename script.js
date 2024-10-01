document.addEventListener("DOMContentLoaded", () => {
    let cta = document.getElementById("CTA");
    cta.onclick = () => {
        document.getElementById("contact").scrollIntoView();
    };
    let mail = document.getElementById("mail");
    mail.onclick = () => {
        let address = "info@oasis-agencies.com"
        navigator.clipboard.writeText(address);
        alert("Copied email to clipboard");
    };

    const appearOptions = {
        
    };
    
    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
            {
                console.log("Line 20");
                return;
            } else {
                console.log("Line 23");
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});