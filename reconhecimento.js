window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang ='pt-Br'
const botaoIniciar = document.querySelector('#comecar-gravacao')
const botaoParar = document.querySelector('#parar-gravacao')

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    const buscaGoogle = `https://www.google.com/search?q=${encodeURIComponent(chute)}`
    window.open(buscaGoogle, '_blank')
}

botaoIniciar.addEventListener('click', () => {
    recognition.start();
})

botaoParar.addEventListener('click', () => {
    recognition.stop();
})
