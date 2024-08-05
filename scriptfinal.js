function playVoiceOver() {
    const utterance = new SpeechSynthesisUtterance("Welcome to the home page for Scholar's Connect. Download now and connect with your peers and professors easily and without giving up on your privacy. Thank You!");
    speechSynthesis.speak(utterance);
}

window.onload = function() {
    playVoiceOver();
};
