ex35Button.addEventListener('click', () => {
    const idade = parseInt(idadeInput.value);
    if (idade < 6 || idade > 25) {
        ex35Result.innerHTML = "Idade fora da faixa etária";
        return;
    }
    if (idade <= 10) {
        ex35Result.innerHTML = "Você é um nadador Infantil B";
    }
});



function EX37CALC() {
    let nome = document.getElementById("EX37Nome").value;
    let sex = document.getElementsByName("EX37Sex");
    let h = parseFloat(document.getElementById("EX37Numero1").value);
    let idade = parseInt(document.getElementById("EX37Numero2").value);
    let res;

    if (sex[0].checked) { // Masculino
        if (h > 1.70) {
            res = idade <= 20 ? ((72.7 * h) - 58) : ((72.7 * h) - (idade < 40 ? 53 : 45));
        } else {
            res = idade < 40 ? ((72.7 * h) - 50) : ((72.7 * h) - 58);
        }
    } else { // Feminino
        res = h >= 1.50 ? ((62.1 * h) - 44.7) : ((62.1 * h) - (idade >= 35 ? 45 : 49));
    }
    let resp = res.toFixed(2);
    document.getElementById("EX37resp").innerHTML = "Olá " + nome + "<br/>Seu peso ideal é " + resp;
}
ex29Button.addEventListener('click', () => {
    const mes = parseInt(mesInput.value);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (mes < 1 || mes > 12) {
        ex29Result.innerHTML = "Só possuímos 12 meses";
        return;
    }
    ex29Result.innerHTML = meses[mes - 1];
});





generateButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
       window.alert('Usa')
        return;
    }
    tList.innerHTML = ''; 
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${number} x ${i} = ${number * i}`;
        tList.appendChild(listItem);
    }
});

