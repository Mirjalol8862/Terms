const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

// Form header bosilganda formani almashtirish
loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Signup formani olish
const signupForm = document.querySelector(".signup form");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("phone", phone);

  alert("Ro‘yxatdan o‘tildi! Endi login qiling.");
  wrapper.classList.add("active");
});

// Login formani olish
const loginForm = document.querySelector(".login form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (loginEmail === storedEmail && loginPassword === storedPassword) {
    showProfile();
  } else {
    alert("Email yoki parol noto‘g‘ri!");
  }
});

// Profil ko‘rsatish
function showProfile() {
  const profileDiv = document.createElement("div");
  profileDiv.className = "form login";
  profileDiv.innerHTML = `
    <header>Profilingiz</header>
    <p><strong>Ism Familya:</strong> ${localStorage.getItem("fullName")}</p>
    <p><strong>Email:</strong> ${localStorage.getItem("email")}</p>
    <p><strong>Telefon:</strong> ${localStorage.getItem("phone")}</p>
    <input type="button" value="Chiqish" onclick="logout()" />
  `;
  document.querySelector(".signup").style.display = "none";
  document.querySelector(".login").style.display = "none";
  document.querySelector(".wrapper").appendChild(profileDiv);
}

function logout() {
  localStorage.clear();
  location.reload();
}

// Google Sign-In sozlamasi
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "SENING_CLIENT_IDING", // ← bu yerga Google Client ID'ni yozing
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("g_id_signup"),
    {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width: "100%",
    }
  );

  google.accounts.id.renderButton(
    document.getElementById("g_id_login"),
    {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width: "100%",
    }
  );
};

function handleCredentialResponse(response) {
  console.log("Google JWT Token: ", response.credential);
  alert("Google orqali muvaffaqiyatli kirildi!");
}
