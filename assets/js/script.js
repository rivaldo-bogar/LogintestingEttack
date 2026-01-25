const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

// Dummy data (TIDAK DI-ENCRYPT)
const dummyUser = {
  username: "admin",
  password: "123456"
};

togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password"
      ? "text"
      : "password";
  passwordInput.setAttribute("type", type);
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    showError("Username dan password wajib diisi");
    return;
  }

  if (
    username === dummyUser.username &&
    password === dummyUser.password
  ) {
    alert("Login berhasil!");
    // window.location.href = "dashboard.html";
  } else {
    showError("Username atau password salah");
  }
});

function showError(message) {
  errorMsg.style.display = "block";
  errorMsg.textContent = message;
}
