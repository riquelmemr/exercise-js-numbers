const theNumber = Number(prompt('Digite um número:'));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

numberTitle.innerHTML = theNumber;

text.innerHTML = '';
text.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(theNumber)}.</p>`;
text.innerHTML += `<p>${theNumber} é inteiro: ${Number.isInteger(theNumber)}.</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(theNumber)}.</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(theNumber)}.</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(theNumber)}.</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${theNumber.toFixed(2)}.</p>`;
