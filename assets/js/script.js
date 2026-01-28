const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

// Dummy akun (SIMULASI - TIDAK ENCRYPT)
const dummyUser = {
  username: "admin",
  password: "123456"
};

// Toggle show / hide password
togglePassword.addEventListener("click", () => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
});

// Submit form (METHOD POST)
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  errorMsg.textContent = "";

  const formData = new FormData(loginForm);
  const username = formData.get("username").trim();
  const password = formData.get("password").trim();

  if (!username || !password) {
    showError("Username dan password wajib diisi");
    return;
  }

  // Simulasi request POST ke server
  fakePostLogin(username, password);
});

// Simulasi POST login (nanti bisa diganti fetch Flask)
function fakePostLogin(username, password) {
  setTimeout(() => {
    if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      // Login sukses → redirect
      window.location.href = "html2.html";
    } else {
      showError("Username atau password salah");
    }
  }, 600);
}

function showError(message) {
  errorMsg.style.display = "block";
  errorMsg.textContent = message;
}
