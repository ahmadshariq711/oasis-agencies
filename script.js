document.addEventListener('DOMContentLoaded', function() {
    //Mail Button
    let mail = document.getElementById("mail");
    mail.onclick = () => {
        let address = "info@oasis-agencies.com"
        navigator.clipboard.writeText(address);
        alert("Copied email to clipboard");
    };

    //Fade In animation
    const appearOptions = {};
    
    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
            {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    //Slide In animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Smooth Scroll for Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});