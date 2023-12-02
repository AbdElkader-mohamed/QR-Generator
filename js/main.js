let url = "www.linkedin.com/in/abd-elkader-mohamed-13b029256";
const urlRegex =
  /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

let colorDark = "#000";
let colorLight = "#fff";

let validation = document.getElementById("validation");

let download = document.getElementById("download");

let mainQR = document.getElementById("qrcode");

const qrcode = new QRCode(mainQR, {
  text: url,
  width: 300,
  height: 300,
  colorDark: colorDark,
  colorLight: colorLight,
  correctLevel: QRCode.CorrectLevel.H
});

function handelSrc(src) {
  download.setAttribute("href", src);
}
window.onload = () => handelSrc(mainQR.querySelector("img").src);

const getUrl = () => {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", () => {
    let inputUrl = document.querySelector("#url").value;
    if (
      inputUrl !== "" &&
      inputUrl == inputUrl.trim() &&
      urlRegex.test(inputUrl)
    ) {
      validation.classList.remove("active");
      qrcode.makeCode(inputUrl);
      handelSrc(mainQR.querySelector("img").src);
      document.querySelector("#url").value = "";
    } else {
      validation.classList.add("active");
    }
  });
};
getUrl();
