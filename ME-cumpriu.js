document.querySelector("#btn").addEventListener("click", function () {
    let mesestrabalhados = Number(document.querySelector("#meses").value);
    let salario = Number(document.querySelector("#salario").value);
    let mesdesligado = Number(document.querySelector("#desligou").value);
    if (mesdesligado > 12){
        alert(`O mês do desligamento não pode ser maior que 12!!`)
        ferias = 0
    }
    let dias_trabalhados = Number(document.querySelector("#dias").value)
    if(dias_trabalhados > 31){
        alert(`Os dias trabalhados não podem ser maior que 31`)
        saldosalario = 0
    }

    let FGTS = (salario * 0.08) * mesestrabalhados
    let ferias = ((salario / 12) * mesdesligado) + (salario * 0.33);
    let saldosalario = salario / 30 * dias_trabalhados
    let total = FGTS + ferias + salario

    let saida_saldo_salario = document.querySelector("#saldosalario").innerHTML = `SALDO SALÁRIO: R$${Math.round(saldosalario * 100) / 100}`
    let saida_ferias = document.querySelector("#ferias").innerHTML = `FERIAS: R$${Math.round(ferias * 100) / 100}`
    let saida_fgts = document.querySelector("#fgts").innerHTML = `FGTS: R$${Math.round(FGTS * 100) / 100}`
    let saida_total = document.querySelector("#total").innerHTML = `TOTAL: R$${Math.round(total * 100) / 100}`
})