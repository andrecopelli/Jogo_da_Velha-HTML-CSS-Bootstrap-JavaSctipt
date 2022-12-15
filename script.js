const tabuleiro = document.getElementById('tabuleiro');
const posicao = document.getElementById('posicao');

const manipuladorClick = (evento) => {
    const colunaSelecionada = document.querySelector('.col-4.selecionado');
    if (colunaSelecionada) {
        colunaSelecionada.classList = 'col-4';
    }
    evento.target.classList = 'col-4 selecionado';
    posicao.textContent = evento.target.id;
}

tabuleiro.addEventListener('click', manipuladorClick);

const manipuladorKey = (evento) => {
    const keyName = evento.key.toLowerCase();
    if (keyName !== 'x' && keyName !== 'o') {
        return;
    }
    if (posicao.textContent && posicao.textContent !== " ") {
        const area = document.getElementById(posicao.textContent);
        if (area.textContent) {
            alert("Essa posição já está ocupada");
        }
        else {
            area.textContent = keyName;
        }
    }
    else{
        alert('Por favor selecione uma posição!')
    }
};

document.addEventListener('keypress', manipuladorKey);