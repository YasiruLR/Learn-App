function updatePreview() {
  const code = document.getElementById("codeInput").value;
  const iframe = document.getElementById("preview");
  iframe.srcdoc = code;
}


function toggleDarkMode() {
  document.body.classList.toggle("dark");
}


function checkAnswer(selected, feedbackId, message, quizContainerId) {
  
  document.getElementById(feedbackId).innerText = message;

 
  const quizContainer = document.querySelector(`#${quizContainerId} .quiz-options`);
  const buttons = quizContainer.getElementsByTagName('button');
  for (let button of buttons) {
    button.disabled = true;
  }
}


document.addEventListener('DOMContentLoaded', function() {
 
});