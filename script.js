// Web Speech API Example
const speakButton = document.getElementById('speakButton');
const textToSpeak = "Hello, this is a simple speech synthesis example.";

speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
});