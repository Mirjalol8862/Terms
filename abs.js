function editProfile() {
  const newName = prompt("Yangi ismingizni kiriting:", document.getElementById("name").innerText);
  const newPhone = prompt("Yangi telefon raqamingizni kiriting:", document.getElementById("phone").innerText);
  if (newName) document.getElementById("name").innerText = newName;
  if (newPhone) document.getElementById("phone").innerText = newPhone;
}

function changeLanguage() {
  const langSpan = document.getElementById("lang-value");
  langSpan.innerText = langSpan.innerText === "O‘zbekcha" ? "Inglizcha" : "O‘zbekcha";
}

function changeTheme() {
  const themeSpan = document.getElementById("theme-value");
  const isNight = themeSpan.innerText === "Kunduzgi";
  themeSpan.innerText = isNight ? "Tungi" : "Kunduzgi";
  document.body.style.backgroundColor = isNight ? "#121212" : "#fff";
  document.body.style.color = isNight ? "#fff" : "#000";
}

function openSupport() {
  alert("Yordam markaziga o'tkazilmoqda...");
  // window.location.href = 'support.html';
}

function openPrivacy() {
  alert("Maxfiylik siyosati sahifasiga o'tkazilmoqda...");
  // window.location.href = 'privacy.html';
}

function deleteAccount() {
  if (confirm("Rostdan ham hisobni o‘chirmoqchimisiz?")) {
    alert("Hisob o‘chirildi.");
  }
}
