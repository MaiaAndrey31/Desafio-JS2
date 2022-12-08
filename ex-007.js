

function calculate (valorInicial, valorAtual, tempo){

    const juros = (valorAtual - valorInicial) / (valorInicial* tempo)

    console.log(( juros * 100).toFixed(2) + '%')

}

calculate(1000, 2600, 29)