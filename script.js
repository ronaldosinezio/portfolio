// Aqui é menu Mobile Toggle
const menuIcon = document.getElementById('menu-mobile');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Aqui é para alternar o ícone hambúrguer/X
});
// Aqui é para fechar o menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active'); // Aqui é para garantir que o ícone volte ao estado original
    });
});
/////
// Aqui é para fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) { // Aqui é para verificar se o clique foi fora do menu e do ícone
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active'); // Aqui é para garantir que o ícone volte ao estado original
    }           
});

// Aqui é para fechar o menu ao redimensionar a janela
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) { // Aqui é para garantir que o menu só feche em telas maiores que 900px
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active'); // Aqui é para garantir que o ícone volte ao estado original
    }
}); 

//rolagem da página suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) { 
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }       
    );
}       

);
// Aqui é para o formulário de contacto com EmailJS
  //  Aqui é para inicializar o EmailJS


  (function(){
    //  Aqui é Public Key
    emailjs.init("fWNV71St8bJquxMvh");
  })();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nomeInput = form.querySelector('input[name="name"]');
        const mensagemInput = form.querySelector('textarea[name="message"]');
        const nome = nomeInput.value.trim();
        const mensagem = mensagemInput.value.trim();
        // Regex: impede apenas espaços, traços, pontos ou vazio
        const regexValido = /^(?![ .\-]+$)[A-Za-zÀ-ÿ0-9 .\-]{3,}$/;
        let erro = "";
        // Validação do formulário
        
        if (!regexValido.test(nome)) {
             erro = "Por favor, insira um nome válido.";
             nomeInput.focus();
        //  } else if (!regexValido.test(mensagem)) {
        //      erro = "Esse formato de mensagem não é suportanda. Por favor, escreva uma mensagem válida.";
        //      mensagemInput.focus();
         }
         if (erro) {
             status.innerHTML = erro;
             status.style.color = "red";
             return;
         }
        status.innerHTML = "A enviar...";

        //Os dados do emailJS
        emailjs.sendForm("service_su2ushm", "template_kpr5urs", this)
            .then(function() {
                status.innerHTML = "Sua mensagem foi enviada com éxito!";
                status.style.color = "green";
                form.reset();
            }, function(error) {
                console.error(error);
                status.innerHTML = "Ops! ocorreu um erro ao enviar. Tente novamente.";
                status.style.color = "red";
            });
  });
