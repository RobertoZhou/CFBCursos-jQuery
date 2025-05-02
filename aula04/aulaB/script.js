$("#nome").keyup(() => {
    const nome = $("#nome").val();
    $("#texto").text(nome);
});
