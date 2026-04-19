const links = document.querySelectorAll('.blurb a');

for (var link of links) {
    if (link.textContent.trim().toLowerCase().includes('ai generated')) {
        console.log("test")
        document.querySelector('.blurb').parentElement.style.setProperty('display', 'none', 'important');
    }
};