// Validação do formulário de cadastro
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const location = document.getElementById("location").value;
    const userType = document.getElementById("user-type").value;
    const terms = document.getElementById("terms").checked;

    // Validações
    if (!validateEmail(email)) {
      showError("Por favor, insira um e-mail válido");
      return;
    }

    if (password.length < 6) {
      showError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      showError("As senhas não coincidem");
      return;
    }

    if (!terms) {
      showError("Você deve aceitar os termos de uso");
      return;
    }

    // Simulando cadastro bem-sucedido
    const button = document.querySelector(".register-button");
    button.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Criando conta...';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = "Criar Conta";
      button.disabled = false;
      showSuccess("Cadastro realizado com sucesso! Redirecionando...");

      // Redirecionar após 1.5 segundos
      setTimeout(() => {
        // Em uma aplicação real: window.location.href = 'dashboard.html';
      }, 1500);
    }, 1500);
  });

// Função para validar e-mail
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Mostrar mensagem de erro
function showError(message) {
  // Remover mensagens anteriores
  const existingError = document.querySelector(".error-message");
  if (existingError) existingError.remove();

  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.style.backgroundColor = "#ffebee";
  errorElement.style.color = "#c62828";
  errorElement.style.padding = "10px";
  errorElement.style.borderRadius = "4px";
  errorElement.style.marginBottom = "15px";
  errorElement.style.textAlign = "center";
  errorElement.style.fontWeight = "500";
  errorElement.textContent = message;

  const form = document.getElementById("registerForm");
  form.insertBefore(errorElement, form.firstChild);

  // Remover a mensagem após 3 segundos
  setTimeout(() => {
    errorElement.style.opacity = "0";
    setTimeout(() => {
      form.removeChild(errorElement);
    }, 300);
  }, 3000);
}

// Mostrar mensagem de sucesso
function showSuccess(message) {
  // Remover mensagens anteriores
  const existingSuccess = document.querySelector(".success-message");
  if (existingSuccess) existingSuccess.remove();

  const successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.style.backgroundColor = "#e8f5e9";
  successElement.style.color = "#2e7d32";
  successElement.style.padding = "10px";
  successElement.style.borderRadius = "4px";
  successElement.style.marginBottom = "15px";
  successElement.style.textAlign = "center";
  successElement.style.fontWeight = "500";
  successElement.textContent = message;

  const form = document.getElementById("registerForm");
  form.insertBefore(successElement, form.firstChild);
}

// Animar elementos ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".input-group, .register-button, .social-btn"
  );

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });
});

function previewImage(event) {
    const preview = document.getElementById('image-preview');
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (file && file.size <= maxSize && file.type.startsWith('image/')) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
    } else {
        alert('Por favor, selecione uma imagem válida (máx. 2MB).');
        event.target.value = ''; // Limpa o input
        preview.style.display = 'none';
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

function toggleConfirmPassword() {
    const passwordInput = document.getElementById('confirm-password');
    const eyeIcon = document.getElementById('eyeIconConfirm');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}