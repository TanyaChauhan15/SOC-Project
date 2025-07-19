const button = document.getElementById("submit");
const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");

function createQRCode(data) {
 
  outputDiv.innerHTML = "";

  
 
    const qrCode = new QRCode(outputDiv, {
      text: data,
      width: 300,
      height: 300,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  
}

button.onclick = () => {
  const text = inputField.value.trim();
  createQRCode(text);
};
