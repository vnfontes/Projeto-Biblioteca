type Livro = {
    id : string;
    titulo : string;
    disponivel: boolean;
    multa?: number;
    data?:Date;
    ano: number;
};
let biblioteca: Livro[] = [];
function adicionarLivro(livro: Livro){
    biblioteca.push(livro);
};
function alugarLivro(id: string){
    const livro = biblioteca.find((f) => f.id ===id);
    if (livro && livro.disponivel){
        livro.disponivel = false;
        console.log(`Livro"${livro.titulo}" alugado!`);
    }else{
        console.log("Livro nao disponivel");
    }
}
function listarDisponiveis(){
    return biblioteca.filter((f) =>f.disponivel);
}
adicionarLivro({id:"1", titulo:"harry potter", disponivel:false, ano:1998});
adicionarLivro({id:"2", titulo:"batman", disponivel:true, ano:1939});
adicionarLivro({id:"3", titulo:"dc", disponivel:false, ano:1930});
console.log("Filmes disponiveis:", listarDisponiveis().map(f =>f.titulo));
alugarLivro("1");
console.log("apos aluguel:", listarDisponiveis().map(f => f.titulo));