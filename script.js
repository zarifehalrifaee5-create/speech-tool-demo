// Modified from MDN web Speech API basic examples
const speakButton = document.getElementById('speakButton');
const stopButton = document.getElementById('stopButton');
const textInput = document.getElementById('textInput');

speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    speechSynthesis.speak(utterance);
});