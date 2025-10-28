type Filme = {
    id : string;
    titulo : string;
    disponivel: boolean;
};
let locadora: Filme[] = [];
function adicionarFilme(filme: Filme){
    locadora.push(filme);
};
function alugarFilme(id: string){
    const filme = locadora.find((f) => f.id ===id);
    if (filme && filme.disponivel){
        filme.disponivel = false;
        console.log(`Filme"${filme.titulo}" alugado!`);
    }else{
        console.log("filme nao disponivel");
    }
}
function listarDisponiveis(){
    return locadora.filter((f) =>f.disponivel);
}
adicionarFilme({id:"1", titulo:"matrix", disponivel:true});
adicionarFilme({id:"2", titulo:"carros", disponivel:true});
console.log("Filmes disponiveis:", listarDisponiveis().map(f =>f.titulo));
alugarFilme("1");
console.log("apos aluguel:", listarDisponiveis().map(f => f.titulo));