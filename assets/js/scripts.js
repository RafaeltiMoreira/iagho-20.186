AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active'); // Alterna a classe .active no menu móvel
    hamburgerMenu.classList.toggle('active'); // Alterna a classe .active no botão do hamburguer
  });
});

/*Cookies*/

let msgLgpd = document.getElementById('lgpd-msg')

function accept() {
  localStorage.lgpd = 'accepted'
  msgLgpd.classList.remove('show')

  document.querySelector('.style__switcher').classList.add('lgpd-accepted');
}

if (localStorage.lgpd == 'accepted') {
  msgLgpd.classList.remove('show')
} else {
  msgLgpd.classList.add('show')
}

/* CONTATOS */

var CELULAR_IAGHO = '556182577964';
var CELULAR_RAFAEL = '556192239354';

/* Iagho 20.186 - Form */

const whats = {
  metodos: {
    enviarMensagem: () => {
      // Evento ao botão de envio
      document.getElementById("btnEnviarMsg").addEventListener("click", () => {
        // Valores dos campos
        const nome = encodeURIComponent(document.getElementById("name").value);
        const email = encodeURIComponent(document.getElementById("email").value);
        const mensagem = encodeURIComponent(document.getElementById("mensagem").value);

        const mensagemWhatsApp = `Olá, me chamo *${nome}*. Meu e-mail: ${email}. Mensagem: ${mensagem}`;
        const encode = encodeURIComponent(mensagemWhatsApp);

        const urlCampanha = `https://wa.me/${CELULAR_IAGHO}?text=${encode}`;

        document.getElementById("btnEnviarMsg").href = urlCampanha;

        whats.metodos.validaMsg();
      });
    },

    validaMsg: () => {
      // Obtenha os valores dos campos
      let name = $("#name").val().trim();
      let email = $("#email").val().trim();
      let mensagem = $("#mensagem").val().trim();

      // Valide os campos
      if (name.length <= 0) {
        whats.metodos.mensagemModal('Por favor, informe seu Nome.');
        $("#name").focus();
        return;
      }

      if (email.length <= 0) {
        whats.metodos.mensagemModal('Por favor, informe seu E-mail.');
        $("#email").focus();
        return;
      }

      if (mensagem.length <= 0) {
        whats.metodos.mensagemModal('Por favor, digite sua mensagem.');
        $("#mensagem").focus();
        return;
      }

      
    },

    mensagemModal: (mensagemWhatsApp, cor = 'red', tempo = 3500) => {
      // Crie uma mensagem de feedback
      let id = Math.floor(Date.now() * Math.random()).toString();
      let msg = `<div id="msg-${id}" data-aos="zoom-out zoom-in-left" class="toast ${cor}">${mensagemWhatsApp}</div>`;

      // Adicione a mensagem à página
      $("#container-mensagens").append(msg);

      // Remova a mensagem após um certo tempo
      setTimeout(() => {
        $("#msg-" + id).removeClass('zoom-in-left');
        $("#msg-" + id).addClass('zoom-out');
        setTimeout(() => {
          $("#msg-" + id).remove();
        }, 800);
      }, tempo);
    },

    abrirWhatsRight: () => {

      var texto = 'Olá! gostaria de ajudar na campanha.';

      let encode = encodeURIComponent(texto);
      let URL = `https://wa.me/${CELULAR_IAGHO}?text=${encode}`;

      $("#msgSwitcher").attr('href', URL);

    },

    abrirWhatsSocialAbout: () => {

      var textoAbout = 'Olá! gostaria de ajudar na campanha.';

      let encodeAbout = encodeURIComponent(textoAbout);
      let URLAbout = `https://wa.me/${CELULAR_IAGHO}?text=${encodeAbout}`;

      $("#msgAbout").attr('href', URLAbout);

    },

    abrirWhatsSocialFooter: () => {

      var textoFooter = 'Olá! gostaria de ajudar na campanha.';

      let encodeFooter = encodeURIComponent(textoFooter);
      let URLFooter = `https://wa.me/${CELULAR_IAGHO}?text=${encodeFooter}`;

      $("#socialFooter").attr('href', URLFooter);

    },

    abrirWhatsSocialFooterLink: () => {

      var textoFooterPolicy = 'Olá! gostaria de conversar sobre o desenvolvimento de site.';

      let encodeFooterPolicy = encodeURIComponent(textoFooterPolicy);
      let URLPolicy = `https://wa.me/${CELULAR_RAFAEL}?text=${encodeFooterPolicy}`;

      $("#footerMoreira").attr('href', URLPolicy);

    },
  }
};

whats.metodos.enviarMensagem();

/* Footer Policy */

document.getElementById("socialFooterPolicy").addEventListener("click", enviarMensagemWhats);

function enviarMensagemWhats() {
  const mensagemWhatsAppPolicy = 'Olá! gostaria de ajudar na campanha.';

  const numeroCampanhaFooterPolicy = '556182577964';
  const encodePolicy = encodeURIComponent(mensagemWhatsAppPolicy);

  const urlPolicy = `https://wa.me/${numeroCampanhaFooterPolicy}?text=${encodePolicy}`;

  document.getElementById("socialFooterPolicy").href = urlPolicy;
}

document.getElementById("rafaPolicy").addEventListener("click", enviarMensagemRafa);

function enviarMensagemRafa() {
  const mensagemWhatsAppPolicy = 'Olá! gostaria de conversar sobre o desenvolvimento de site.';

  const numeroCampanhaRafaPolicy = '556192239354';
  const encodeRafaPolicy = encodeURIComponent(mensagemWhatsAppPolicy);

  const urlRafaPolicy = `https://wa.me/${numeroCampanhaRafaPolicy}?text=${encodeRafaPolicy}`;

  document.getElementById("rafaPolicy").href = urlRafaPolicy;
}

/* Footer Termos */

document.getElementById("socialFooterTerm").addEventListener("click", enviarMensagemWhatsTerm);

function enviarMensagemWhatsTerm() {
  const mensagemWhatsTerm = 'Olá! gostaria de ajudar na campanha.';

  const numeroCampanhaFooterTerm = '556182577964';
  const encodeTerm = encodeURIComponent(mensagemWhatsTerm);

  const urlTerm = `https://wa.me/${numeroCampanhaFooterTerm}?text=${encodeTerm}`;

  document.getElementById("socialFooterTerm").href = urlTerm;
}

document.getElementById("rafaTerm").addEventListener("click", enviarMensagemTerm);

function enviarMensagemTerm() {
  const mensagemAppTerm = 'Olá! gostaria de conversar sobre o desenvolvimento de site.';

  const numeroCampanhaRafaTerm = '556192239354';
  const encodeRafaTerm = encodeURIComponent(mensagemAppTerm);

  const urlRafaTerm = `https://wa.me/${numeroCampanhaRafaTerm}?text=${encodeRafaTerm}`;

  document.getElementById("rafaTerm").href = urlRafaTerm;
}

