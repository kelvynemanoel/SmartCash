const form = document.getElementById('form-transacao');
const htmlOriginalExtrato = document.querySelector('#lista-transacoes').innerHTML;
const getChave = localStorage.getItem('listaDeTransacoes');
const listaTransacoes = JSON.parse(getChave);

function pegarTransacoes() {
    return getChave ? listaTransacoes : [];
}

function criarTransacoes(lista) {
    localStorage.setItem('listaDeTransacoes', JSON.stringify(lista));
}

const transacoesIniciais = pegarTransacoes();
if (transacoesIniciais.length === 0) {
    criarTransacoes([]);
} else {
    mostrarNaTela(transacoesIniciais);
    alterarSituacaoFinanceira(transacoesIniciais);
}

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
    return localStorage.setItem('listaDeTransacoes', JSON.stringify(listaTransacoes));
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
        alterarAlturaExtrato(lista);
        return; //Early Return
    }

    const itemLista = lista.map((transacao, index) => {
        const id = transacao.descricao.length > 34 ?  'id="passouTamanho"' : '';

        const classe = transacao.tipoTransacao === 'entrada' ? 'class="extrato-entrada"' : 'class="extrato-saida"';

        return `<li ${classe} ${id}><p>${transacao.descricao}</p> <div><p>${formatarMoeda(transacao.valor)}</p> <i class="ti ti-trash" data-index="${index}"></i></div></li>`;
    });

    alterarAlturaExtrato(lista);
    extrato.innerHTML = itemLista.join('');
}

function alterarValor(transacao, tipo){
    return transacao.filter(t => t.tipoTransacao === tipo).reduce((acumulador, t) => acumulador + t.valor, 0);
}

function alterarSaldoTotal(listaValores, tipo){
    return alterarValor(listaValores, 'entrada') - alterarValor(listaValores, 'saida');
}

const listaExtrato = document.querySelector('#lista-transacoes');
listaExtrato.addEventListener('click', (e) => {
    if (e.target.classList.contains('ti-trash')) {
        const index = e.target.getAttribute('data-index');
        listaTransacoes.splice(index, 1);
        mostrarNaTela(listaTransacoes);
        alterarSituacaoFinanceira(listaTransacoes);

        localStorage.setItem('listaDeTransacoes', JSON.stringify(listaTransacoes));
    }
})

function alterarAlturaExtrato(lista) {
    if (lista.length >= 3) {
        extrato.style.height = 'fit-content'; 
    } if ((lista.length === 2)) {
        const caminhoExtrato = document.querySelector('#lista-transacoes');
        if (caminhoExtrato.querySelector('#passouTamanho')){
            extrato.style.height = 'fit-content'; 
        } else {
            extrato.style.height = '220px';
        }
    } else {
        extrato.style.height = '220px';
        '';
    }
}