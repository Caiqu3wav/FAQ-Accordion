function toggleAnswer(element) {
var faqitem = element.closest('.faqItem');
var answer = faqitem.querySelector('.answer');
var toggleButton = faqitem.querySelector('[data-toggle="toggleButton"]');

if(answer.classList.contains('active')) {
  answer.classList.remove('active');
  toggleButton.querySelector('img').src = 'assets/images/icon-plus.svg';
} else {
    answer.classList.add('active');
    toggleButton.querySelector('img').src = 'assets/images/icon-minus.svg';
}
}

document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faqItem');
    faqItems.forEach(function (faqItem) {
      faqItem.addEventListener('click', function () {
        toggleAnswer(this);
        setTimeout(function () {
          toggleAnswer(faqItem);
        }, 0);
      });
    });
  });