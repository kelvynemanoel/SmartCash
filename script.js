const form = document.getElementById('form-transacao');
const listaTransacoes = [];

function formatarMoeda(resultado) {
    return resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
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

    const paragrafoReceita = document.querySelector('#total-entrada');
    const paragrafoDespesa = document.querySelector('#total-saida');
    const paragrafoSaldoTotal = document.querySelector('#total-saldo');
    

    mostrarNaTela(listaTransacoes);
    paragrafoReceita.innerHTML = formatarMoeda(alterarReceita(listaTransacoes));
    paragrafoDespesa.innerHTML = formatarMoeda(alterarDespesa(listaTransacoes));
    paragrafoSaldoTotal.innerHTML = formatarMoeda(alterarSaldoTotal(listaTransacoes));
})

function mostrarNaTela(elemento) {
    const extrato = document.querySelector('#lista-transacoes');

    const itemLista = elemento.map(transacao => {
        let resultado;
        if (transacao.tipoTransacao === 'entrada') {
            resultado = `<li class="extrato-entrada"><p>${transacao.descricao}</p> <p>${formatarMoeda(transacao.valor)}</p> <i class="ti ti-trash"></i></li>`;
        } else {
            resultado = `<li class="extrato-saida"><p>${transacao.descricao}</p> <p>${formatarMoeda(transacao.valor)}</p> <i class="ti ti-trash"></i></li>`;
        }
        return resultado;
    });

    const mostrarNaTela = itemLista.join('');
    return extrato.innerHTML = mostrarNaTela;
}

function alterarReceita(transacao){
    const totalReceita = transacao.filter(entradas => entradas.tipoTransacao == 'entrada');
    const somaReceita = totalReceita.reduce((acumulador, valorObjeto) => acumulador + valorObjeto.valor, 0);
    return somaReceita;
}

function alterarDespesa(transacao){
    const totalDespesa = transacao.filter(saidas => saidas.tipoTransacao == 'saida');
    const somaDespesa = totalDespesa.reduce((acumulador, valorObjeto) => acumulador + valorObjeto.valor, 0);
    return somaDespesa;
}

function alterarValores(transacao){
    //ideia -> juntar em uma única função os duas funções alterar()
}

function alterarSaldoTotal(somaTransacoes){
    return alterarReceita(somaTransacoes) - alterarDespesa(somaTransacoes);
}