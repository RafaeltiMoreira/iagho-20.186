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
}

if (localStorage.lgpd == 'accepted') {
    msgLgpd.classList.remove('show')
} else {
    msgLgpd.classList.add('show')
}

/* Iagho 20.186 - Form */

document.getElementById("btnEnviarMsg").addEventListener("click", enviarMensagem);

function enviarMensagem() {
  const nome = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const mensagem = encodeURIComponent(document.getElementById("mensagem").value);

  const mensagemWhatsApp = `Olá, me chamo ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}`;

  const numeroCampanha = '556182577964';
  const encode = encodeURI(mensagemWhatsApp);

  const urlCampanha = `https://wa.me/${numeroCampanha}?text=${encode}`;

  document.getElementById("btnEnviarMsg").href = urlCampanha;
}

/* Iagho 20.186 - Footer */ 

document.getElementById("socialFooter").addEventListener("click", enviarMensagemFooter);

function enviarMensagemFooter() {
  const mensagemWhatsAppFooter = 'Olá, gostaria de conversar sobre a campanha.';

  const numeroCampanhaFooter = '556182577964';
  const encode = encodeURI(mensagemWhatsAppFooter);

  const urlCampanhaFooter = `https://wa.me/${numeroCampanhaFooter}?text=${encode}`;

  document.getElementById("socialFooter").href = urlCampanhaFooter;
}

/* Iagho 20.186 - Footer P */

document.getElementById("socialFooterPrivate").addEventListener("click", enviarMensagemFooterP);

function enviarMensagemFooterP() {
  const mensagemWhatsAppFooterP = 'Olá, gostaria de conversar sobre a campanha.';

  const numeroCampanhaFooterP = '556182577964';
  const encode = encodeURI(mensagemWhatsAppFooterP);

  const urlCampanhaFooterP = `https://wa.me/${numeroCampanhaFooterP}?text=${encode}`;

  document.getElementById("socialFooterPrivate").href = urlCampanhaFooterP;
}

/* Iagho 20.186 - Footer LinkP */ 

document.getElementById("socialFooterLink").addEventListener("click", enviarMensagemFooterLink);

function enviarMensagemFooterLink() {
  const mensagemWhatsAppFooterLink = 'Olá, gostaria de conversar sobre a campanha.';

  const numeroCampanhaFooterLink = '556182577964';
  const encode = encodeURI(mensagemWhatsAppFooterLink);

  const urlCampanhaFooterLink = `https://wa.me/${numeroCampanhaFooterLink}?text=${encode}`;

  document.getElementById("socialFooterLink").href = urlCampanhaFooterLink;
}

/* Rafael Moreira - Footer PP */ 

document.getElementById("LinkPrivate").addEventListener("click", enviarMensagemLinkP);

function enviarMensagemLinkP() {
  const mensagemWhatsAppLinkP = 'Olá, gostaria de conversar sobre um desenvolvimento de site.';

  const numeroCampanhaLinkP = '556192239354';
  const encode = encodeURI(mensagemWhatsAppLinkP);

  const urlCampanhaLinkP = `https://wa.me/${numeroCampanhaLinkP}?text=${encode}`;

  document.getElementById("LinkPrivate").href = urlCampanhaLinkP;
}

/* Rafael Moreira - Footer IdP */ 

document.getElementById("IdFooterP").addEventListener("click", enviarMensagemIdP);

function enviarMensagemIdP() {
  const mensagemWhatsAppIdP = 'Olá, gostaria de conversar sobre um desenvolvimento de site.';

  const numeroCampanhaIdP = '556192239354';
  const encode = encodeURI(mensagemWhatsAppIdP);

  const urlCampanhaIdP = `https://wa.me/${numeroCampanhaIdP}?text=${encode}`;

  document.getElementById("IdFooterP").href = urlCampanhaIdP;
}

/* Iagho 20.186 - About */ 

document.getElementById("msgAbout").addEventListener("click", enviarMensagemAbout);

function enviarMensagemAbout() {
  const mensagemWhatsAppAbout = 'Olá, gostaria de conversar sobre a campanha.';

  const numeroCampanhaAbout = '556182577964';
  const encode = encodeURI(mensagemWhatsAppAbout);

  const urlCampanhaAbout = `https://wa.me/${numeroCampanhaAbout}?text=${encode}`;

  document.getElementById("msgAbout").href = urlCampanhaAbout;
}

/* Iagho 20.186 - Switcher */ 

document.getElementById("msgSwitcher").addEventListener("click", enviarMensagemSwitcher);

function enviarMensagemSwitcher() {
  const mensagemWhatsAppSwitcher = 'Olá, gostaria de conversar sobre a campanha.';

  const numeroCampanhaSwitcher = '556182577964';
  const encode = encodeURI(mensagemWhatsAppSwitcher);

  const urlCampanhaSwitcher = `https://wa.me/${numeroCampanhaSwitcher}?text=${encode}`;

  document.getElementById("msgSwitcher").href = urlCampanhaSwitcher;
}

/* Rafael Moreira - Footer */ 

document.getElementById("footerMoreira").addEventListener("click", enviarMensagemMoreira);

function enviarMensagemMoreira() {
  const mensagemWhatsAppMoreira = 'Olá, gostaria de conversar sobre um desenvolvimento de site.';

  const numeroCampanhaMoreira = '556192239354';
  const encode = encodeURI(mensagemWhatsAppMoreira);

  const urlCampanhaMoreira = `https://wa.me/${numeroCampanhaMoreira}?text=${encode}`;

  document.getElementById("footerMoreira").href = urlCampanhaMoreira;
}