// Função para enviar evento para o GA4
function enviarEventoGA4(nomeEvento, params) {
  if (typeof gtag === 'function') {
    gtag('event', nomeEvento, params);
  }
}

// Rastrear cliques em todos os botões com a classe .nav-button
document.querySelectorAll('.nav-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    enviarEventoGA4('clique_nav_button', {
      button_text: btn.innerText || btn.value || 'nav-button'
    });
  });
});

// Rastrear cliques em todos os botões com a classe .diagnostic-button
document.querySelectorAll('.diagnostic-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    enviarEventoGA4('clique_diagnostic_button', {
      button_text: btn.innerText || btn.value || 'diagnostic-button'
    });
  });
});
