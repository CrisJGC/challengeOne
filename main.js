import { encrypt, decrypt } from "./utils/encrypt.js"


// Obtener elementos del DOM
const input = document.getElementById("inputArea");
const response = document.getElementById("response");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

// Estado de la aplicación
const state = {
  inputSaved: localStorage.getItem("inputSaved") || "",
  responseSaved: localStorage.getItem("responseSaved") || "",
};

// Contenido por defecto
const responseContentDefault = `
<img src="public/defaultResultImg.svg" alt="default response" class="responseImgDefault" />
<h2>Ningún mensaje fue encontrado</h2>
<p>Ingresa el texto que desees encriptar o desencriptar.</p>
`;

// Funciones auxiliares
const updateCopyBtn = () => {
  copyBtn.style.display = input.value ? "block" : "none";
};

const setResponse = (text) => {
  response.innerHTML = text ? `<h2 class="responseText">${text}</h2>` : responseContentDefault;
  if (text) {
    localStorage.setItem("responseSaved", text);
  } else {
    localStorage.removeItem("responseSaved");
  }
  updateCopyBtn();
};

const updateInput = () => {
  if (input.value) {
    localStorage.setItem("inputSaved", input.value);
  } else {
    localStorage.removeItem("inputSaved");
  }
};

const copyText = () => {
  const responseSaved = localStorage.getItem("responseSaved");
  if (responseSaved) {
    navigator.clipboard.writeText(responseSaved);
  }
};

const handleSubmit = (submitFn) => () => {
  setResponse(submitFn(input.value));
};

encryptBtn.addEventListener("click", handleSubmit(encrypt));
decryptBtn.addEventListener("click", handleSubmit(decrypt));
copyBtn.addEventListener("click", copyText);
input.addEventListener("input", updateInput);

// Establecer valores iniciales
input.value = state.inputSaved;
copyBtn.style.display = state.responseSaved ? "block" : "none";
setResponse(state.responseSaved);