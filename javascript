const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
  let img = document.querySelector('.qr-body img');

  if (img !== null) {
    let imgAttr = img.getAttribute('src');
    downloadBtn.setAttribute("href", imgAttr);
  } else {
    downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
  }
});

function isEmptyInput() {
  qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrContainer.innerHTML = ""; // Clear previous QR code content
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}

// Debugging: Check if the library is loaded
if (typeof QRCode === 'undefined') {
  console.error('QRCode.js library is not loaded.');
} else {
  console.log('QRCode.js library is loaded.');
}

// Debugging: Check event listeners
generateBtn.addEventListener('click', () => {
  console.log('Generate button clicked.');
});

sizes.addEventListener('change', () => {
  console.log('Size changed to:', size);
});
