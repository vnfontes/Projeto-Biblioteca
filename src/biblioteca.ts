type Livro = {
    id: string;
    titulo: string;
    ano: number;
    disponivel: boolean
    DataEmprestimo?: Date;
};

let biblioteca: Livro[] = [];

function AdicionarLivro(livro: Livro) {
    biblioteca.push(livro);
}

function BuscarLivro(valor: string | number) {
    return biblioteca.filter(
        (livro) =>
            livro.id === valor ||
            livro.titulo.toLowerCase().includes(String(valor).toLowerCase()) ||
            livro.ano === valor
    );
}

function AlugarLivro(id: string) {
    const livro = biblioteca.find((l) => l.id === id);

    if (livro && livro.disponivel) {
        livro.disponivel = false;
        livro.DataEmprestimo = new Date();
        console.log(` Livro "${livro.titulo}" emprestado!`);

    } else {
        console.log("Livro não encontrado ou indisponível.");
    }
}

function ListarLivrosDisponiveis() {
    return biblioteca.filter((livro) => livro.disponivel);
}

function CalcularMulta(
    dataDevolucaoPrevista: Date,
    dataDevolucaoReal: Date,
    valorPorDia: number = 2

): number {
  const umDiaEmMs = (1000 * 60 * 60 * 24);

  const diferencaemMs = (dataDevolucaoReal.getTime() - dataDevolucaoPrevista.getTime());

  const diasAtraso = Math.floor(diferencaemMs / umDiaEmMs);

  if (diasAtraso <= 0) return 0;

  const multa = diasAtraso * valorPorDia;

  return multa;
}

const dataPrevista = new Date('2025-10-20');
const dataReal = new Date('2025-10-27');
const valorMulta = CalcularMulta(dataPrevista, dataReal);

AdicionarLivro({ id: "01", titulo: "O Senhor dos Anéis", disponivel: true, ano: 1954});
AdicionarLivro({ id: "02", titulo: "Harry Potter", disponivel: true, ano: 1997 });
AdicionarLivro({ id: "03", titulo: "As Crônicas de Nárnia", disponivel: false, ano: 1950 });
AdicionarLivro({ id: "04", titulo: "Jogos Vorazes", disponivel: false, ano:2008});
AdicionarLivro({ id: "05", titulo: "Crepúsculo", disponivel: true, ano:2005});

console.log( "Livro disponível para aluguel:", ListarLivrosDisponiveis().map(l => l.titulo));

AlugarLivro("02");

console.log( "Após aluguel:", ListarLivrosDisponiveis().map(l => l.titulo));
console.log(`Multa total: R$ ${valorMulta.toFixed(2)}`);
