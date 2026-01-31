document.querySelector("#btn").addEventListener("click", function () {
    let mesestrabalhados = Number(document.querySelector("#meses").value);
    let salario = Number(document.querySelector("#salario").value);
    let mesdesligado = Number(document.querySelector("#desligou").value);
    let dias_trabalhados = Number(document.querySelector("#dias").value)

    let FGTS = (salario * 0.08) * mesestrabalhados + 0.4
    let ferias = ((salario / 12) * mesdesligado) + 0.33;
    let saldosalario = salario / 30 * dias_trabalhados
    let total = FGTS + ferias + salario

    let saida_saldo_salario = document.querySelector("#saldosalario").innerHTML = `SALDO SALÁRIO: R$${saldosalario.toFixed}`
    let saida_ferias = document.querySelector("#ferias").innerHTML = `FERIAS: R$${ferias.toFixed}`
    let saida_fgts = document.querySelector("#fgts").innerHTML = `FGTS: R$${FGTS.toFixed}`
    let saida_total = document.querySelector("#total").innerHTML = `TOTAL: R$${total.toFixed}`
})