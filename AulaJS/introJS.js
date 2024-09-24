const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNum1.value;
    const tempo = Number(frm.inNum2.value);
    const tempohora = (tempo / 60).toFixed(0);
    resp.innerText = `O filme ${nome} tem duração de ${tempohora} horas e ${tempo % 60} minutos`;
})

console.log(frm);
console.log(resp);