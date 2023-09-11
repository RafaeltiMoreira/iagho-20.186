document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active'); // Alterna a classe .active no menu móvel
    hamburgerMenu.classList.toggle('active'); // Alterna a classe .active no botão do hamburguer
  });

  const linksMobileMenu = document.querySelectorAll('.nav__link');
  linksMobileMenu.forEach((link) => {
    link.addEventListener('click', () => {
      // Remova a classe .active do menu mobile para fechar
      mobileMenu.classList.remove('active');
      hamburgerMenu.classList.remove('active'); // Botão hamburger também seja desativado
    });
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

      const btnEnviar = document.getElementById("btnEnviarMsg");

      btnEnviar.addEventListener("click", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const mensagemWhatsApp = `Olá, me chamo *${nome}*. Meu e-mail: ${email}. Mensagem: ${mensagem}`;
        const encode = encodeURIComponent(mensagemWhatsApp).replace(/%20/g, ' ');

        const urlCampanha = `https://wa.me/${CELULAR_IAGHO}?text=${encode}`;

        document.getElementById("erroNome").textContent = '';
        document.getElementById("erroEmail").textContent = '';
        document.getElementById("erroMensagem").textContent = '';

        btnEnviar.textContent = "Enviando...";
        btnEnviar.disabled = true;

        const validacaoOk = await whats.metodos.validaMsg();

        if (validacaoOk) {

          window.open(urlCampanha, "_blank");

          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mensagem").value = "";
          btnEnviar.textContent = "Enviar";
          btnEnviar.disabled = false;
        } else {
          btnEnviar.textContent = "Enviar";
          btnEnviar.disabled = false;
        }
      });

      document.getElementById("name").addEventListener("input", () => {
        document.getElementById("erroNome").textContent = '';
      });
    
      document.getElementById("email").addEventListener("input", () => {
        document.getElementById("erroEmail").textContent = '';
      });
    
      document.getElementById("mensagem").addEventListener("input", () => {
        document.getElementById("erroMensagem").textContent = '';
      });
    },

    validaMsg: async () => {
      // Obtenha os valores dos campos
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensagem = document.getElementById("mensagem").value.trim();

      document.getElementById("erroNome").textContent = '';
      document.getElementById("erroEmail").textContent = '';
      document.getElementById("erroMensagem").textContent = '';

      let validacaoOk = true;

      if (name.length <= 0) {
        document.getElementById("erroNome").textContent = 'Por favor, informe seu nome.';
        document.getElementById("name").focus();
        validacaoOk = false;
      }

      if (email.length <= 0) {
        document.getElementById("erroEmail").textContent = 'Por favor, informe seu e-mail.';
        document.getElementById("email").focus();
        validacaoOk = false;
      }

      if (mensagem.length <= 0) {
        document.getElementById("erroMensagem").textContent = 'Por favor, digite sua mensagem.';
        document.getElementById("mensagem").focus();
        validacaoOk = false;
      }

      return validacaoOk;
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

