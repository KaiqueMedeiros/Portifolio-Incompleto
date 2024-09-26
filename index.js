const texts = [
    'Desenvolvedor.',
    'Proativo.',
    'Resolutivo.',
]
let speed = 100
const textElements = document.querySelector('.typewriter-text')
let textIndex = 0
let characterIndex = 0


function typeWriter () {
    if(characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex)
        characterIndex ++
        setTimeout(typeWriter,speed)
    }
    else{
        setTimeout(eraseText,1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1)
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length
        characterIndex = 0
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

document.querySelectorAll('.nav-container .link a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        let offsetTop = targetElement.offsetTop; 

        
        if (targetId === '#services') {
            offsetTop -= 50; 
        } else {
            offsetTop -= 100; 
        }

        window.scrollTo({
            top: offsetTop, 
            behavior: 'smooth' 
        });
    });
});