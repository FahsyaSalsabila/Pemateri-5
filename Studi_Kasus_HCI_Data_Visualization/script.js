// Data simulasi untuk latihan HCI dan visualisasi data.
const salesData = [
  { month: "Jan", product: "Roti", category: "Makanan", units: 120, revenue: 1800000 },
  { month: "Jan", product: "Kopi", category: "Minuman", units: 95, revenue: 1425000 },
  { month: "Jan", product: "Gantungan Kunci", category: "Kerajinan", units: 45, revenue: 675000 },
  { month: "Feb", product: "Roti", category: "Makanan", units: 145, revenue: 2175000 },
  { month: "Feb", product: "Kopi", category: "Minuman", units: 110, revenue: 1650000 },
  { month: "Feb", product: "Gantungan Kunci", category: "Kerajinan", units: 52, revenue: 780000 },
  { month: "Mar", product: "Roti", category: "Makanan", units: 138, revenue: 2070000 },
  { month: "Mar", product: "Kopi", category: "Minuman", units: 128, revenue: 1920000 },
  { month: "Mar", product: "Gantungan Kunci", category: "Kerajinan", units: 60, revenue: 900000 },
  { month: "Apr", product: "Roti", category: "Makanan", units: 165, revenue: 2475000 },
  { month: "Apr", product: "Kopi", category: "Minuman", units: 140, revenue: 2100000 },
  { month: "Apr", product: "Gantungan Kunci", category: "Kerajinan", units: 64, revenue: 960000 },
  { month: "Mei", product: "Roti", category: "Makanan", units: 172, revenue: 2580000 },
  { month: "Mei", product: "Kopi", category: "Minuman", units: 152, revenue: 2280000 },
  { month: "Mei", product: "Gantungan Kunci", category: "Kerajinan", units: 70, revenue: 1050000 },
  { month: "Jun", product: "Roti", category: "Makanan", units: 190, revenue: 2850000 },
  { month: "Jun", product: "Kopi", category: "Minuman", units: 160, revenue: 2400000 },
  { month: "Jun", product: "Gantungan Kunci", category: "Kerajinan", units: 82, revenue: 1230000 }
];

const filter = document.getElementById("categoryFilter");
const resetButton = document.getElementById("resetButton");
const rupiah = value => new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", maximumFractionDigits: 0
}).format(value);

function getFilteredData() {
  return filter.value === "Semua"
    ? salesData
    : salesData.filter(item => item.category === filter.value);
}

function updateDashboard() {
  const data = getFilteredData();
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalUnits = data.reduce((sum, item) => sum + item.units, 0);
  const byProduct = {};
  data.forEach(item => {
    byProduct[item.product] = (byProduct[item.product] || 0) + item.units;
  });
  const bestProduct = Object.entries(byProduct).sort((a, b) => b[1] - a[1])[0];

  document.getElementById("totalRevenue").textContent = rupiah(totalRevenue);
  document.getElementById("totalUnits").textContent = totalUnits.toLocaleString("id-ID");
  document.getElementById("bestProduct").textContent = bestProduct ? bestProduct[0] : "—";
  document.getElementById("filterStatus").textContent = filter.value === "Semua"
    ? `Menampilkan semua kategori (${data.length} catatan).`
    : `Filter aktif: ${filter.value} (${data.length} catatan).`;

  renderTable(data);
  renderBars(byProduct);
  renderLineChart(data);
}

function renderTable(data) {
  const tbody = document.getElementById("dataTable");
  tbody.replaceChildren();
  data.forEach(item => {
    const row = document.createElement("tr");
    [item.month, item.product, item.category, item.units.toLocaleString("id-ID"), rupiah(item.revenue)]
      .forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
    tbody.appendChild(row);
  });
  document.getElementById("emptyState").hidden = data.length > 0;
}

function renderBars(byProduct) {
  const container = document.getElementById("barChart");
  container.replaceChildren();
  const entries = Object.entries(byProduct).sort((a, b) => b[1] - a[1]);
  const maxValue = Math.max(1, ...entries.map(entry => entry[1]));
  entries.forEach(([name, value]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    const label = document.createElement("span");
    label.className = "bar-name";
    label.textContent = name;
    const track = document.createElement("div");
    track.className = "bar-track";
    track.setAttribute("aria-label", `${name}: ${value} unit`);
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${(value / maxValue) * 100}%`;
    track.appendChild(fill);
    const number = document.createElement("span");
    number.className = "bar-value";
    number.textContent = value;
    row.append(label, track, number);
    container.appendChild(row);
  });
}

function renderLineChart(data) {
  const canvas = document.getElementById("salesChart");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(300, rect.width) * dpr;
  canvas.height = 260 * dpr;
  ctx.scale(dpr, dpr);
  const width = Math.max(300, rect.width);
  const height = 260;
  ctx.clearRect(0, 0, width, height);

  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];
  const totals = months.map(month => data
    .filter(item => item.month === month)
    .reduce((sum, item) => sum + item.revenue, 0));
  const max = Math.max(1, ...totals);
  const left = 48, right = 14, top = 18, bottom = 35;
  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;

  ctx.font = "11px Arial";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 0; i <= 4; i++) {
    const y = top + chartHeight * i / 4;
    const value = max * (1 - i / 4);
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(width - right, y); ctx.stroke();
    ctx.fillStyle = "#5f6b7a";
    ctx.fillText(value === 0 ? "0" : `${(value / 1000000).toFixed(1)} jt`, left - 7, y);
  }

  const points = totals.map((value, i) => ({
    x: left + chartWidth * i / (months.length - 1),
    y: top + chartHeight * (1 - value / max)
  }));
  ctx.strokeStyle = "#2764a5";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, i) => i === 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y));
  ctx.stroke();
  points.forEach((point, i) => {
    ctx.fillStyle = "#2764a5";
    ctx.beginPath(); ctx.arc(point.x, point.y, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#374151";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(months[i], point.x, height - bottom + 10);
  });
}

filter.addEventListener("change", updateDashboard);
resetButton.addEventListener("click", () => {
  filter.value = "Semua";
  updateDashboard();
});

document.getElementById("feedbackForm").addEventListener("submit", event => {
  event.preventDefault();
  const rating = document.getElementById("rating").value;
  const feedback = document.getElementById("feedbackText").value.trim();
  const message = `Terima kasih! Penilaian Anda: ${rating}/5.` +
    (feedback ? " Saran tersimpan sementara di tampilan ini." : "");
  document.getElementById("feedbackStatus").textContent = message;
});

window.addEventListener("resize", () => {
  // Menggambar ulang grafik agar tetap terbaca ketika ukuran layar berubah.
  renderLineChart(getFilteredData());
});

updateDashboard();
