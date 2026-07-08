const htmlOriginalExtrato = document.querySelector('#lista-transacoes').innerHTML;
const form = document.getElementById('form-transacao');
let getChave = localStorage.getItem('minhasTransacoes');
let listaTransacoes = JSON.parse(getChave) || [];

mostrarNaTela(listaTransacoes);
alterarSituacaoFinanceira(listaTransacoes);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const novaTransacao = {
        descricao: form.elements['descricao'].value,
        valor: Number(form.elements['valor'].value),
        tipoTransacao: form.elements['tipo_transacao'].value
    }
    
    listaTransacoes.push(novaTransacao);
    form.reset();
    
    mostrarNaTela(listaTransacoes);
    alterarSituacaoFinanceira(listaTransacoes);
    localStorage.setItem('minhasTransacoes', JSON.stringify(listaTransacoes));
})

function formatarMoeda(resultado) {
    if (resultado === 0) { return 'R$ 00,00'; }
    return resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

function alterarSituacaoFinanceira(lista) {
    const paragrafoReceita = document.querySelector('#total-entrada');
    const paragrafoDespesa = document.querySelector('#total-saida');
    const paragrafoSaldoTotal = document.querySelector('#total-saldo');

    paragrafoReceita.innerHTML = formatarMoeda(alterarValor(lista, 'entrada'));
    paragrafoDespesa.innerHTML = formatarMoeda(alterarValor(lista, 'saida'));
    paragrafoSaldoTotal.innerHTML = formatarMoeda(alterarSaldoTotal(lista));
}

function mostrarNaTela(lista) {
    const extrato = document.querySelector('#lista-transacoes');
    if (lista.length === 0) {
        extrato.innerHTML = htmlOriginalExtrato;
        return; //Early Return
    }

    const itemLista = lista.map((transacao, index) => {
        const classeTipo = transacao.tipoTransacao === 'entrada' ? 'entrada' : 'saida';

        return `<li class="extrato-${classeTipo}"><p>${transacao.descricao}</p> <div><p>${formatarMoeda(transacao.valor)}</p> <i class="ti ti-trash" data-index="${index}"></i></div></li>`;
    });
    extrato.innerHTML = itemLista.join('');
}

function alterarValor(transacao, tipo){
    return transacao.filter(t => t.tipoTransacao === tipo).reduce((acumulador, t) => acumulador + t.valor, 0);
}

function alterarSaldoTotal(listaValores){
    return alterarValor(listaValores, 'entrada') - alterarValor(listaValores, 'saida');
}

const listaExtrato = document.querySelector('#lista-transacoes');
listaExtrato.addEventListener('click', (e) => {
    if (e.target.classList.contains('ti-trash')) {
        const index = e.target.getAttribute('data-index');
        listaTransacoes.splice(index, 1);
        mostrarNaTela(listaTransacoes);
        alterarSituacaoFinanceira(listaTransacoes);

        localStorage.setItem('minhasTransacoes', JSON.stringify(listaTransacoes));
    }
})