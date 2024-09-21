document.body.innerHTML = `
    <div id="ex35">
        <input type="number" id="EX35N">
        <input type="button" id="ex35Button" value="Verificar">
        <p id="EX35res">Resultado</p>
    </div>
    <div id="ex37">
        <input type="text" id="EX37Nome">
        <input type="radio" name="EX37Sex" value="masculino" checked>
        <input type="radio" name="EX37Sex" value="feminino">
        <input type="number" id="EX37Numero1">
        <input type="number" id="EX37Numero2">
        <input type="button" id="ex37Button" value="Verificar">
        <p id="EX37resp">Resultado</p>
    </div>
    <div id="ex29">
        <input type="number" id="EX06Numero">
        <input type="button" id="ex29Button" value="Verificar">
        <p id="EX06res">Resultado</p>
    </div>
    <input type="number" id="numberInput" placeholder="Digite um número" />
    <button id="generateButton">Gerar Tabuada</button>
    <ul id="tList"></ul>
`;

const idadeInput = document.getElementById('EX35N');
const ex35Button = document.getElementById('ex35Button');
const ex35Result = document.getElementById('EX35res');

const nomeInput = document.getElementById('EX37Nome');
const sexInputs = document.getElementsByName('EX37Sex');
const alturaInput = document.getElementById('EX37Numero1');
const idadeInput37 = document.getElementById('EX37Numero2');
const ex37Button = document.getElementById('ex37Button');
const ex37Result = document.getElementById('EX37resp');

const mesInput = document.getElementById('EX06Numero');
const ex29Button = document.getElementById('ex29Button');
const ex29Result = document.getElementById('EX06res');

const numberInput = document.getElementById('numberInput');
const generateButton = document.getElementById('generateButton');
const tList = document.getElementById('tList');

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
    let nome = nomeInput.value;
    let sex = sexInputs;
    let h = parseFloat(alturaInput.value);
    let idade = parseInt(idadeInput37.value);
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
    ex37Result.innerHTML = "Olá " + nome + "<br/>Seu peso ideal é " + resp;
}

ex37Button.addEventListener('click', EX37CALC);

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
        window.alert('Você precisa digitar um número!');
        return;
    }
    tList.innerHTML = ''; 
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${number} x ${i} = ${number * i}`;
        tList.appendChild(listItem);
    }
});

describe('Testes de Natação, Peso Ideal, Mês e Tabuada', () => {
    test('deve calcular o nível de nadador corretamente', () => {
        idadeInput.value = '10';
        ex35Button.click();
        expect(ex35Result.innerHTML).toEqual("Você é um nadador Infantil B");
    });

    test('deve alertar para idade fora da faixa etária', () => {
        idadeInput.value = '30';
        ex35Button.click();
        expect(ex35Result.innerHTML).toEqual("Idade fora da faixa etária");
    });

    test('deve calcular o peso ideal para masculino', () => {
      nomeInput.value = 'Carlos';
      sexInputs[0].checked = true; 
      alturaInput.value = '1.80';
      idadeInput37.value = '25';
      ex37Button.click();
      expect(ex37Result.innerHTML).toContain("Olá Carlos<br>Seu peso ideal é");
  });
  
  test('deve calcular o peso ideal para feminino', () => {
      nomeInput.value = 'Ana';
      sexInputs[1].checked = true; 
      alturaInput.value = '1.60';
      idadeInput37.value = '20';
      ex37Button.click();
      expect(ex37Result.innerHTML).toContain("Olá Ana<br>Seu peso ideal é");
  });
  

    test('deve retornar o nome do mês corretamente', () => {
        mesInput.value = '3';
        ex29Button.click();
        expect(ex29Result.innerHTML).toEqual("Março");
    });

    test('deve tratar entrada de mês inválido', () => {
        mesInput.value = '13';
        ex29Button.click();
        expect(ex29Result.innerHTML).toEqual("Só possuímos 12 meses");
    });

    test('deve gerar a tabuada corretamente', () => {
        numberInput.value = '5';
        generateButton.click();
        expect(tList.children.length).toBe(10);
        expect(tList.children[0].textContent).toBe('5 x 1 = 5');
    });

    test('deve alertar se nenhum número for inserido na tabuada', () => {
        window.alert = jest.fn();
        numberInput.value = '';
        generateButton.click();
        expect(window.alert).toHaveBeenCalledWith('Você precisa digitar um número!');
    });
});
