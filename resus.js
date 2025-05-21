const finalResults = [
  { name: "Bozorboyev Asadbek", time: "5:12", score: 95, top: true },
  { name: "Bozorboyev Asadbek", time: "9:25", score: 65 },
  { name: "Bozorboyev Asadbek", time: "8:45", score: 62 },
  { name: "Bozorboyev Asadbek", time: "10:30", score: 58 },
  { name: "Bozorboyev Asadbek", time: "8:15", score: 55 }
];

const intermediateResults = [
  { name: "Bozorboyev Asadbek", time: "7:50", score: 70 },
  { name: "Bozorboyev Asadbek", time: "9:00", score: 68 },
  { name: "Bozorboyev Asadbek", time: "10:05", score: 64 }
];

let currentResults = finalResults;

function renderResults(results) {
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  results.forEach((item, index) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.onclick = () => updateMainStats(item);

    resultItem.innerHTML = `
      <div class="left">
        <div class="avatar">A</div>
        <div class="name-time">
          ${item.top ? '<span style="color: orange; font-size: 14px;">👑</span>' : ""}
          <strong>${item.name}</strong>
          <span>JS • ${item.time}</span>
        </div>
      </div>
      <div class="score">
        ${item.score} <span>🌕</span>
      </div>
    `;
    resultsList.appendChild(resultItem);
  });
}

function updateMainStats(item) {
  document.getElementById("foizi").innerText = item.score;
  document.getElementById("daqiqa").innerText = item.time;
  document.getElementById("xatolar").innerText = Math.max(0, 100 - item.score);
}

function showFinal() {
  currentResults = finalResults;
  document.getElementById("finalBtn").classList.add("active");
  document.getElementById("intermediateBtn").classList.remove("active");
  renderResults(finalResults);
  updateMainStats(finalResults[0]);
}

function showIntermediate() {
  currentResults = intermediateResults;
  document.getElementById("finalBtn").classList.remove("active");
  document.getElementById("intermediateBtn").classList.add("active");
  renderResults(intermediateResults);
  updateMainStats(intermediateResults[0]);
}

function goBack() {
  window.history.back();
}

function retakeTest() {
  alert("Qayta test topshirish bosqichi ishga tushdi!");
}

// Initial rendering
document.addEventListener("DOMContentLoaded", () => {
  renderResults(currentResults);
  updateMainStats(currentResults[0]);
});
