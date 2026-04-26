const links = document.querySelectorAll('.blurb a');

for (var link of links) {
    if (link.textContent.trim().toLowerCase().includes('ai generated')) {
        console.log("Hide Ai Generated")
        document.querySelector('.blurb').parentElement.style.setProperty('display', 'none', 'important');
    }
};

// there is probably a neat way to do every search as one function. i'm too lazy to figure it out tonight.
// have this nightmare of repetition instead
for (var link of links) {
    if (link.textContent.trim().toLowerCase().includes('chat gpt')) {
        console.log("Hide Chat GPT")
        document.querySelector('.blurb').parentElement.style.setProperty('display', 'none', 'important');
    }
};

for (var link of links) {
    if (link.textContent.trim().toLowerCase().includes('chatgpt')) {
        console.log("Hide ChatGPT")
        document.querySelector('.blurb').parentElement.style.setProperty('display', 'none', 'important');
    }
};

for (var link of links) {
    if (link.textContent.trim().toLowerCase().includes('ai fic')) {
        console.log("Hide ai fic")
        document.querySelector('.blurb').parentElement.style.setProperty('display', 'none', 'important');
    }
};
