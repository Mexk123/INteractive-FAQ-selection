// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all open answers
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Toggle current answer
    item.classList.toggle('active');
  });
});
