function loader() {
  setTimeout(() => {
    const formsect = document.querySelector(".form-sect");
    const loader = document.querySelector(".load-cont");

    loader.style.display = "none";
    formsect.style.display = "block";
    setTimeout(() => {
      const text = document.querySelector(".failed-text");
      text.classList.add("opacity-none");
      setTimeout(() => {
        const text = document.querySelector(".failed-text");
        text.style.display = "none";
      }, 1000);
    }, 2000);
  }, 3500);
}
loader();

function validatorform() {    

}     

function removereq() {
  const text = document.querySelector(".formInputBlockchain");
  text.classList.remove("required");
  document.querySelector("#warningmessage").style.display = "none";
}

