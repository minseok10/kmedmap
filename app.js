// 이 샘플 페이지는 서버 없이 브라우저에서만 동작합니다.
// 실제 서비스에서는 이 배열 대신 API나 서버 DB에서 데이터를 받아오면 됩니다.

const STORAGE_KEY = "kmed-map-user-clinics";
const RESERVATION_STORAGE_KEY = "kmed-map-reservations";
const TIME_SLOTS = ["09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

// 모든 기본 데이터는 실제 의료기관 정보가 아닌 가상의 샘플 데이터입니다.
const SAMPLE_CLINICS = [
  {
    id: 1,
    name: "근골편안 샘플한의원",
    region: "서울",
    address: "서울특별시 강남구 샘플로 12",
    lat: 37.4979,
    lng: 127.0276,
    specialties: ["근골격", "추나", "한약"],
    hasSpecialist: true,
    phone: "02-0000-0001",
    description: "근골격계 통증과 추나 치료를 중심으로 보는 가상 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 2,
    name: "맑은피부 샘플한의원",
    region: "서울",
    address: "서울특별시 마포구 예시길 24",
    lat: 37.5563,
    lng: 126.9236,
    specialties: ["피부미용", "체질상담"],
    hasSpecialist: false,
    phone: "02-0000-0002",
    description: "피부 고민과 체질 상담을 다루는 가상의 샘플 데이터입니다.",
    source: "sample"
  },
  {
    id: 3,
    name: "수원바른 샘플한의원",
    region: "경기",
    address: "경기도 수원시 팔달구 샘플중앙로 8",
    lat: 37.2636,
    lng: 127.0286,
    specialties: ["추나", "근골격", "보약"],
    hasSpecialist: true,
    phone: "031-0000-0003",
    description: "수원 중심부 좌표를 사용한 가상 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 4,
    name: "분당온기 샘플한의원",
    region: "경기",
    address: "경기도 성남시 분당구 가상로 101",
    lat: 37.3596,
    lng: 127.1054,
    specialties: ["한약", "보약", "체질상담"],
    hasSpecialist: false,
    phone: "031-0000-0004",
    description: "한약과 보약 상담 예시를 보여주는 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 5,
    name: "송도숨결 샘플한의원",
    region: "인천",
    address: "인천광역시 연수구 샘플해변로 77",
    lat: 37.3947,
    lng: 126.6502,
    specialties: ["체질상담", "한약"],
    hasSpecialist: true,
    phone: "032-0000-0005",
    description: "송도 인근의 그럴듯한 좌표를 사용한 가상 데이터입니다.",
    source: "sample"
  },
  {
    id: 6,
    name: "부평튼튼 샘플한의원",
    region: "인천",
    address: "인천광역시 부평구 예시대로 31",
    lat: 37.5074,
    lng: 126.7218,
    specialties: ["근골격", "추나"],
    hasSpecialist: false,
    phone: "032-0000-0006",
    description: "목록과 지도 마커 테스트를 위한 인천 지역 샘플입니다.",
    source: "sample"
  },
  {
    id: 7,
    name: "해운대밸런스 샘플한의원",
    region: "부산",
    address: "부산광역시 해운대구 샘플달맞이길 5",
    lat: 35.1631,
    lng: 129.1635,
    specialties: ["피부미용", "보약"],
    hasSpecialist: true,
    phone: "051-0000-0007",
    description: "부산 해운대 근처 좌표를 사용한 가상 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 8,
    name: "서면나음 샘플한의원",
    region: "부산",
    address: "부산광역시 부산진구 가상중앙대로 18",
    lat: 35.1577,
    lng: 129.0592,
    specialties: ["근골격", "한약", "체질상담"],
    hasSpecialist: false,
    phone: "051-0000-0008",
    description: "서면 인근을 기준으로 만든 가상의 샘플 데이터입니다.",
    source: "sample"
  },
  {
    id: 9,
    name: "동성로채움 샘플한의원",
    region: "대구",
    address: "대구광역시 중구 샘플로 66",
    lat: 35.8693,
    lng: 128.5940,
    specialties: ["보약", "한약"],
    hasSpecialist: true,
    phone: "053-0000-0009",
    description: "대구 중심부의 위치를 참고한 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 10,
    name: "수성맑음 샘플한의원",
    region: "대구",
    address: "대구광역시 수성구 예시청수로 9",
    lat: 35.8584,
    lng: 128.6307,
    specialties: ["피부미용", "체질상담", "보약"],
    hasSpecialist: false,
    phone: "053-0000-0010",
    description: "피부미용과 체질상담 태그 테스트용 샘플 데이터입니다.",
    source: "sample"
  },
  {
    id: 11,
    name: "둔산바른 샘플한의원",
    region: "대전",
    address: "대전광역시 서구 샘플둔산로 20",
    lat: 36.3510,
    lng: 127.3788,
    specialties: ["추나", "근골격"],
    hasSpecialist: true,
    phone: "042-0000-0011",
    description: "대전 지역 필터 확인을 위한 가상 한의원입니다.",
    source: "sample"
  },
  {
    id: 12,
    name: "유성온샘 샘플한의원",
    region: "대전",
    address: "대전광역시 유성구 가상온천로 44",
    lat: 36.3622,
    lng: 127.3563,
    specialties: ["한약", "보약", "체질상담"],
    hasSpecialist: false,
    phone: "042-0000-0012",
    description: "유성구 주변 좌표를 사용한 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 13,
    name: "상무휴 샘플한의원",
    region: "광주",
    address: "광주광역시 서구 샘플상무대로 15",
    lat: 35.1526,
    lng: 126.8914,
    specialties: ["피부미용", "한약"],
    hasSpecialist: true,
    phone: "062-0000-0013",
    description: "광주 상무지구 근처 좌표를 참고한 가상 데이터입니다.",
    source: "sample"
  },
  {
    id: 14,
    name: "충장튼튼 샘플한의원",
    region: "광주",
    address: "광주광역시 동구 예시충장로 3",
    lat: 35.1461,
    lng: 126.9231,
    specialties: ["근골격", "추나", "체질상담"],
    hasSpecialist: false,
    phone: "062-0000-0014",
    description: "광주 도심 위치를 바탕으로 만든 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 15,
    name: "삼산숨 샘플한의원",
    region: "울산",
    address: "울산광역시 남구 샘플삼산로 28",
    lat: 35.5384,
    lng: 129.3114,
    specialties: ["한약", "체질상담"],
    hasSpecialist: true,
    phone: "052-0000-0015",
    description: "울산 지역 표시를 위한 가상의 샘플 데이터입니다.",
    source: "sample"
  },
  {
    id: 16,
    name: "세종고운 샘플한의원",
    region: "세종",
    address: "세종특별자치시 샘플누리로 52",
    lat: 36.4800,
    lng: 127.2890,
    specialties: ["보약", "체질상담"],
    hasSpecialist: false,
    phone: "044-0000-0016",
    description: "세종시 중심부 근처 좌표를 사용한 샘플입니다.",
    source: "sample"
  },
  {
    id: 17,
    name: "춘천호반 샘플한의원",
    region: "강원",
    address: "강원특별자치도 춘천시 샘플호반로 11",
    lat: 37.8813,
    lng: 127.7298,
    specialties: ["근골격", "보약"],
    hasSpecialist: true,
    phone: "033-0000-0017",
    description: "강원 지역 필터 확인을 위한 가상 한의원입니다.",
    source: "sample"
  },
  {
    id: 18,
    name: "청주조화 샘플한의원",
    region: "충북",
    address: "충청북도 청주시 상당구 샘플상당로 17",
    lat: 36.6357,
    lng: 127.4917,
    specialties: ["한약", "추나"],
    hasSpecialist: false,
    phone: "043-0000-0018",
    description: "청주 도심 주변 좌표를 사용한 샘플 한의원입니다.",
    source: "sample"
  },
  {
    id: 19,
    name: "전주온담 샘플한의원",
    region: "전북",
    address: "전북특별자치도 전주시 완산구 예시한옥로 6",
    lat: 35.8242,
    lng: 127.1480,
    specialties: ["보약", "한약", "피부미용"],
    hasSpecialist: true,
    phone: "063-0000-0019",
    description: "전주 지역의 가상 샘플 한의원 데이터입니다.",
    source: "sample"
  },
  {
    id: 20,
    name: "제주바람 샘플한의원",
    region: "제주",
    address: "제주특별자치도 제주시 샘플해안로 21",
    lat: 33.4996,
    lng: 126.5312,
    specialties: ["체질상담", "피부미용", "보약"],
    hasSpecialist: false,
    phone: "064-0000-0020",
    description: "제주 지역 표시를 위한 가상의 샘플 데이터입니다.",
    source: "sample"
  }
];

const searchInput = document.querySelector("#searchInput");
const regionFilter = document.querySelector("#regionFilter");
const specialtyFilter = document.querySelector("#specialtyFilter");
const specialistFilter = document.querySelector("#specialistFilter");
const searchInMapButton = document.querySelector("#searchInMapButton");
const resetButton = document.querySelector("#resetButton");
const clinicList = document.querySelector("#clinicList");
const resultCount = document.querySelector("#resultCount");
const openAddModalButton = document.querySelector("#openAddModalButton");
const closeAddModalButton = document.querySelector("#closeAddModalButton");
const cancelAddButton = document.querySelector("#cancelAddButton");
const addModal = document.querySelector("#addModal");
const clinicForm = document.querySelector("#clinicForm");
const pickLocationButton = document.querySelector("#pickLocationButton");
const mapPickNotice = document.querySelector("#mapPickNotice");
const sheetToggle = document.querySelector("#sheetToggle");
const sidebar = document.querySelector("#sidebar");
const bookingModal = document.querySelector("#bookingModal");
const bookingForm = document.querySelector("#bookingForm");
const closeBookingModalButton = document.querySelector("#closeBookingModalButton");
const cancelBookingButton = document.querySelector("#cancelBookingButton");
const bookingClinicId = document.querySelector("#bookingClinicId");
const bookingClinicName = document.querySelector("#bookingClinicName");
const bookingClinicMeta = document.querySelector("#bookingClinicMeta");
const bookingDate = document.querySelector("#bookingDate");
const bookingTime = document.querySelector("#bookingTime");
const timeSlotGrid = document.querySelector("#timeSlotGrid");
const bookingConfirmation = document.querySelector("#bookingConfirmation");

let map;
let markerLayer;
let clinics = [];
let selectingLocation = false;
let isBoundsFiltering = false;

init();

function init() {
  clinics = [...SAMPLE_CLINICS, ...loadUserClinics()];
  initMap();
  bindEvents();
  applyFilters();
}

function initMap() {
  map = L.map("map", {
    zoomControl: false
  }).setView([37.5665, 126.9780], 7);

  L.control.zoom({
    position: "topright"
  }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);

  // 사용자가 지도를 이동하거나 확대/축소하면 현재 보이는 영역 기준으로 목록을 다시 만듭니다.
  map.on("moveend", () => {
    isBoundsFiltering = true;
    applyFilters();
  });

  map.on("click", (event) => {
    if (!selectingLocation) return;

    document.querySelector("#clinicLat").value = event.latlng.lat.toFixed(6);
    document.querySelector("#clinicLng").value = event.latlng.lng.toFixed(6);
    selectingLocation = false;
    mapPickNotice.classList.add("hidden");
    addModal.classList.remove("hidden");
  });
}

function bindEvents() {
  searchInput.addEventListener("input", applyFilters);
  regionFilter.addEventListener("change", applyFilters);
  specialtyFilter.addEventListener("change", applyFilters);
  specialistFilter.addEventListener("change", applyFilters);
  searchInMapButton.addEventListener("click", () => {
    isBoundsFiltering = true;
    applyFilters();
  });
  resetButton.addEventListener("click", resetFilters);

  openAddModalButton.addEventListener("click", openAddModal);
  closeAddModalButton.addEventListener("click", closeAddModal);
  cancelAddButton.addEventListener("click", closeAddModal);
  addModal.addEventListener("click", (event) => {
    if (event.target === addModal) closeAddModal();
  });

  clinicForm.addEventListener("submit", addClinic);
  pickLocationButton.addEventListener("click", startLocationPick);
  bookingForm.addEventListener("submit", saveReservation);
  bookingDate.addEventListener("change", renderTimeSlots);
  closeBookingModalButton.addEventListener("click", closeBookingModal);
  cancelBookingButton.addEventListener("click", closeBookingModal);
  bookingModal.addEventListener("click", (event) => {
    if (event.target === bookingModal) closeBookingModal();
  });

  sheetToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    sheetToggle.textContent = sidebar.classList.contains("collapsed") ? "목록 열기" : "목록 접기";
    setTimeout(() => map.invalidateSize(), 240);
  });

  window.addEventListener("resize", () => {
    map.invalidateSize();
  });
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedRegion = regionFilter.value;
  const selectedSpecialty = specialtyFilter.value;
  const selectedSpecialist = specialistFilter.value;
  const bounds = map.getBounds();

  const filteredClinics = clinics.filter((clinic) => {
    const isInCurrentMap = !isBoundsFiltering || bounds.contains([clinic.lat, clinic.lng]);
    const matchesKeyword =
      !keyword ||
      clinic.name.toLowerCase().includes(keyword) ||
      clinic.address.toLowerCase().includes(keyword) ||
      clinic.specialties.join(" ").toLowerCase().includes(keyword);
    const matchesRegion = selectedRegion === "전체" || clinic.region === selectedRegion;
    const matchesSpecialty = selectedSpecialty === "전체" || clinic.specialties.includes(selectedSpecialty);
    const matchesSpecialist =
      selectedSpecialist === "전체" ||
      (selectedSpecialist === "있음" && clinic.hasSpecialist) ||
      (selectedSpecialist === "없음" && !clinic.hasSpecialist);

    return isInCurrentMap && matchesKeyword && matchesRegion && matchesSpecialty && matchesSpecialist;
  });

  renderMarkers(filteredClinics);
  renderClinicList(filteredClinics);
}

function renderMarkers(filteredClinics) {
  markerLayer.clearLayers();

  filteredClinics.forEach((clinic) => {
    const marker = L.marker([clinic.lat, clinic.lng]).bindPopup(createPopupHtml(clinic));
    marker.clinicId = clinic.id;
    markerLayer.addLayer(marker);
  });
}

function renderClinicList(filteredClinics) {
  resultCount.textContent = `${filteredClinics.length}개`;
  clinicList.innerHTML = "";

  if (filteredClinics.length === 0) {
    clinicList.innerHTML = '<p class="empty-state">조건에 맞는 한의원이 없습니다.</p>';
    return;
  }

  filteredClinics.forEach((clinic) => {
    const card = document.createElement("article");
    card.className = "clinic-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.innerHTML = createClinicCardHtml(clinic);

    card.addEventListener("click", () => {
      moveToClinic(clinic);
      if (window.innerWidth <= 760) {
        sidebar.classList.add("collapsed");
        sheetToggle.textContent = "목록 열기";
      }
    });

    card.addEventListener("keydown", (event) => {
      if (event.target.closest("button")) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveToClinic(clinic);
      }
    });

    const reserveButton = card.querySelector(".reserve-button");
    reserveButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openBookingModal(clinic.id);
    });

    const deleteButton = card.querySelector(".delete-button");
    if (deleteButton) {
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteUserClinic(clinic.id);
      });
    }

    clinicList.appendChild(card);
  });
}

function createClinicCardHtml(clinic) {
  const specialistLabel = clinic.hasSpecialist ? "전문의 있음" : "전문의 없음";
  const deleteButton =
    clinic.source === "user"
      ? '<button class="delete-button" type="button">삭제</button>'
      : "";

  return `
    <div class="card-top">
      <div>
        <h3>${escapeHtml(clinic.name)}</h3>
        <p class="clinic-meta">${escapeHtml(clinic.region)} · ${escapeHtml(clinic.address)}</p>
      </div>
      <div class="card-actions">
        <button class="reserve-button" type="button">예약</button>
        ${deleteButton}
      </div>
    </div>
    <div class="tag-row">
      ${clinic.specialties.map((specialty) => `<span class="tag">${escapeHtml(specialty)}</span>`).join("")}
      <span class="status-badge ${clinic.hasSpecialist ? "yes" : ""}">${specialistLabel}</span>
    </div>
    <p class="clinic-phone">${escapeHtml(clinic.phone)}</p>
    <p class="clinic-description">${escapeHtml(clinic.description)}</p>
  `;
}

function createPopupHtml(clinic) {
  const specialistLabel = clinic.hasSpecialist ? "전문의 있음" : "전문의 없음";

  return `
    <h3 class="popup-title">${escapeHtml(clinic.name)}</h3>
    <p class="popup-text">${escapeHtml(clinic.address)}</p>
    <p class="popup-text">진료분야: ${clinic.specialties.map(escapeHtml).join(", ")}</p>
    <p class="popup-text">${specialistLabel}</p>
    <p class="popup-text">샘플 데이터입니다.</p>
  `;
}

function moveToClinic(clinic) {
  map.setView([clinic.lat, clinic.lng], Math.max(map.getZoom(), 15), {
    animate: true
  });

  // setView 뒤 markerLayer가 갱신될 수 있으므로 약간 기다린 뒤 팝업을 엽니다.
  setTimeout(() => {
    markerLayer.eachLayer((marker) => {
      if (marker.clinicId === clinic.id) marker.openPopup();
    });
  }, 180);
}

function resetFilters() {
  searchInput.value = "";
  regionFilter.value = "전체";
  specialtyFilter.value = "전체";
  specialistFilter.value = "전체";
  applyFilters();
}

function openAddModal() {
  clinicForm.reset();
  addModal.classList.remove("hidden");
}

function closeAddModal() {
  addModal.classList.add("hidden");
  selectingLocation = false;
  mapPickNotice.classList.add("hidden");
}

function startLocationPick() {
  selectingLocation = true;
  addModal.classList.add("hidden");
  mapPickNotice.classList.remove("hidden");
  collapseMobileSheet();
}

function addClinic(event) {
  event.preventDefault();

  const selectedSpecialties = [...clinicForm.querySelectorAll('input[name="specialties"]:checked')].map(
    (input) => input.value
  );

  if (selectedSpecialties.length === 0) {
    alert("진료분야를 하나 이상 선택해주세요.");
    return;
  }

  const lat = Number(document.querySelector("#clinicLat").value);
  const lng = Number(document.querySelector("#clinicLng").value);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    alert("위도와 경도를 올바르게 입력해주세요.");
    return;
  }

  const newClinic = {
    id: `user-${Date.now()}`,
    name: document.querySelector("#clinicName").value.trim(),
    region: document.querySelector("#clinicRegion").value,
    address: document.querySelector("#clinicAddress").value.trim(),
    lat,
    lng,
    specialties: selectedSpecialties,
    hasSpecialist: document.querySelector("#clinicHasSpecialist").checked,
    phone: document.querySelector("#clinicPhone").value.trim(),
    description: document.querySelector("#clinicDescription").value.trim(),
    source: "user"
  };

  const userClinics = loadUserClinics();
  userClinics.push(newClinic);
  saveUserClinics(userClinics);

  clinics = [...SAMPLE_CLINICS, ...userClinics];
  closeAddModal();
  map.setView([newClinic.lat, newClinic.lng], 15);
  applyFilters();
}

function openBookingModal(clinicId) {
  const clinic = clinics.find((item) => String(item.id) === String(clinicId));
  if (!clinic) return;

  bookingForm.reset();
  bookingClinicId.value = clinic.id;
  bookingClinicName.textContent = clinic.name;
  bookingClinicMeta.textContent = `${clinic.region} · ${clinic.address}`;
  bookingDate.min = getTodayDateString();
  bookingDate.value = getTodayDateString();
  bookingConfirmation.classList.add("hidden");
  bookingConfirmation.textContent = "";
  renderTimeSlots();
  bookingModal.classList.remove("hidden");
  collapseMobileSheet();
}

function closeBookingModal() {
  bookingModal.classList.add("hidden");
}

function renderTimeSlots() {
  const clinicId = bookingClinicId.value;
  const date = bookingDate.value;
  const reservations = loadReservations();
  const reservedTimes = reservations
    .filter((reservation) => String(reservation.clinicId) === String(clinicId) && reservation.date === date)
    .map((reservation) => reservation.time);

  bookingTime.value = "";
  timeSlotGrid.innerHTML = "";

  TIME_SLOTS.forEach((time) => {
    const button = document.createElement("button");
    const isReserved = reservedTimes.includes(time);

    button.type = "button";
    button.className = "time-slot";
    button.textContent = isReserved ? `${time} 마감` : time;
    button.disabled = isReserved;

    button.addEventListener("click", () => {
      bookingTime.value = time;
      timeSlotGrid.querySelectorAll(".time-slot").forEach((slot) => slot.classList.remove("selected"));
      button.classList.add("selected");
    });

    timeSlotGrid.appendChild(button);
  });
}

function saveReservation(event) {
  event.preventDefault();

  if (!bookingTime.value) {
    alert("예약 시간을 선택해주세요.");
    return;
  }

  const clinic = clinics.find((item) => String(item.id) === String(bookingClinicId.value));
  if (!clinic) return;

  const reservations = loadReservations();
  const newReservation = {
    id: `reservation-${Date.now()}`,
    clinicId: clinic.id,
    clinicName: clinic.name,
    date: bookingDate.value,
    time: bookingTime.value,
    name: document.querySelector("#bookingName").value.trim(),
    phone: document.querySelector("#bookingPhone").value.trim(),
    memo: document.querySelector("#bookingMemo").value.trim(),
    createdAt: new Date().toISOString()
  };

  reservations.push(newReservation);
  saveReservations(reservations);
  renderTimeSlots();

  bookingConfirmation.textContent = `${newReservation.date} ${newReservation.time} 예약 신청이 샘플로 저장되었습니다. 실제 한의원으로 전송되지는 않습니다.`;
  bookingConfirmation.classList.remove("hidden");
}

function deleteUserClinic(id) {
  const userClinics = loadUserClinics().filter((clinic) => clinic.id !== id);
  saveUserClinics(userClinics);
  clinics = [...SAMPLE_CLINICS, ...userClinics];
  applyFilters();
}

function loadUserClinics() {
  const savedText = localStorage.getItem(STORAGE_KEY);
  if (!savedText) return [];

  try {
    const savedClinics = JSON.parse(savedText);
    return Array.isArray(savedClinics) ? savedClinics : [];
  } catch (error) {
    console.warn("localStorage 데이터를 읽을 수 없습니다.", error);
    return [];
  }
}

function saveUserClinics(userClinics) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userClinics));
}

function loadReservations() {
  const savedText = localStorage.getItem(RESERVATION_STORAGE_KEY);
  if (!savedText) return [];

  try {
    const reservations = JSON.parse(savedText);
    return Array.isArray(reservations) ? reservations : [];
  } catch (error) {
    console.warn("예약 데이터를 읽을 수 없습니다.", error);
    return [];
  }
}

function saveReservations(reservations) {
  localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(reservations));
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

function collapseMobileSheet() {
  if (window.innerWidth > 760) return;

  sidebar.classList.add("collapsed");
  sheetToggle.textContent = "목록 열기";
  setTimeout(() => map.invalidateSize(), 240);
}

// 사용자가 입력한 글자를 HTML로 넣을 때 문제가 생기지 않도록 바꿔주는 작은 함수입니다.
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
