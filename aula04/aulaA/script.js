$("#bloco").click(() => { 
    $("#texto").text("Clicado no quadrado");
});

$("#bloco").mouseenter(() => {
    $("#texto").text("Mouse entrou no quadrado");
});

$("#bloco").mouseleave(() => {
    $("#texto").text("Mouse saiu do quadrado");
})

$("#bloco").mousemove(() => {
    $("#texto").text("Mouse movendo no quadrado");
});