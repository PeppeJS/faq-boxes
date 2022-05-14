// PRENDO DAL DOM LE VARIE CLASSI
let faqContainerText = document.querySelectorAll('.container-text');
let faqSecondText = document.querySelectorAll('.second-text');
let buttonFaq = document.querySelectorAll('.faq-container');

// ESEGUO UN CICLO E UN event listener E ATTIVO E DISATTIVO LA CLASSE CON toggle
buttonFaq.forEach((element) => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('active');
  });
});
