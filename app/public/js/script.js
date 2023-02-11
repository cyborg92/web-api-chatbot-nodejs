const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition= new speechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;