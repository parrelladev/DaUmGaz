document.querySelectorAll('button, .nav-button, .cta-button').forEach(btn => {
  btn.addEventListener('click', function() {
    gtag('event', 'clique_botao', {
      'event_category': 'Botão',
      'event_label': this.textContent.trim()
    });
  });
});
