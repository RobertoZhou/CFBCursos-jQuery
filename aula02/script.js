//  JavaScript
const btn_somarjs = document.getElementById("btn_somarjs").addEventListener("click", () => {
    const v1 = document.getElementById("v1").value;
    const v2 = document.getElementById("v2").value;

    const soma = parseInt(v1) + parseInt(v2);

    const res = document.getElementById("res").value = soma;
});

//  jQuery
$("#btn_somarjq").click(() => {
    const v1 = parseInt($("#v1").val());
    const v2 = parseInt($("#v2").val());

    const soma = v1 + v2;
    $("#res").val(soma);
});
