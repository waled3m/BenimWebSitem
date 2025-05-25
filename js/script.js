// ============================================
// 📅 NASA APOD (Astronomy Picture of the Day)
// ============================================

// 👉 Elements
const input = document.querySelector("input.bday-date");
const apodCard = document.querySelector(".apod");

// 👉 API Key
const API_KEY = "jeedZalahZm8ZxpF8fAdRE4w0GLLWovZVFUK3M2c";

// 👉 Set max date to today
input.max = new Date().toLocaleDateString("en-ca");

// 👉 Listen for input date change
input.addEventListener("change", (event) => getAPOD(event.target.value));

// ============================================
// 🚀 Fetch image from NASA API
// ============================================
const getAPOD = (date) => {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Veri alınamadı");
    })
    .then((data) => displayAPOD(data))
    .catch(() => displayNotFound());
};

// ============================================
// 🎨 Display result in card format
// ============================================
const displayAPOD = (data) => {
  const isImage = data.media_type === "image";

  apodCard.innerHTML = `
    <div class="card mt-4 shadow">
      <div class="card-body text-center">
        <h4 class="card-title">${data.title}</h4>
        <p class="text-muted">${data.date}</p>
        ${
          isImage
            ? `<img src="${data.url}" alt="${data.title}" class="img-fluid img-thumbnail mb-3" />`
            : `<p>Bu içerik bir <strong>video</strong>: <a href="${data.url}" target="_blank">Videoyu Gör</a></p>`
        }
        <p class="card-text">${data.explanation}</p>
      </div>
    </div>
  `;
};

// ============================================
// ❌ No image found or error
// ============================================
const displayNotFound = () => {
  apodCard.innerHTML = `
    <div class="alert alert-warning mt-4" role="alert">
      Bu doğum tarihine ait NASA görseli bulunamadı.
    </div>
  `;
};
