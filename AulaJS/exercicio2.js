const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = form.inNome.value;
        const nota1 = Number(form.inNota1.value);
        const nota2 = Number(form.inNota2.value);
        const nota3 = Number(form.inNota3.value);
        const nota4 = Number(form.inNota4.value);
        if ((nota1 + nota2 + nota3 + nota4)/4 >= 7){
            resp.textContent = "Aprovado";
            resp.style.color = "blue";
        } else if ((nota1 + nota2 + nota3 + nota4)/4 <= 6.9 && (nota1 + nota2 + nota3 + nota4)/4 >= 4) {
            resp.textContent = "Recuperação";
            resp.style.color = "green";
        } else {
            resp.textContent = "Foi de F";
            resp.style.color = "red";
        }
})