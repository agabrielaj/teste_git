let nome: string = 'Gabriela';
console.log(nome);
// SINTAXE: variavel + nomeVariavel: TypeAnnotation = valor;

//Array: []
let animais: string [] = ['Elefante', 'Cachorro', 'Cobra'];
console.log(animais);


//Objeto: {}
let carro: {
    nome: string;
    ano: number;
    preco: number;
}
carro = {nome: 'Jeep Renegade', ano: 2023, preco: 50000};
console.log(carro);


//Função: ()
function multiplicarNum (num1: number, num2: number)
{
    return num1 * num2
}
console.log(multiplicarNum(2,8));




//TypeAnnotation
//letra minúscula no inicio: PRIMITIVO | letra maiúscula no inicio: OBJECT
    //BOOLEAN:
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);

    //demo:
let concluida: boolean = false;
if (concluida)
    {
console.log('Tarefa concluida com sucesso!');
} else {
    console.log('Pendente!');
}
// para que o if se torne TRUE, basta colocar NOT, que na lógica de programação seria !
let concluido: boolean = false;
if (!concluido)
  {
console.log('Tarefa concluida com sucesso!');
} else {
    console.log('Pendente!');
}

    //NUMBER|BIGINT:
//number: todos os tipos (inteiros, flutuantes, infinito..)
let num1: number = 35.0; //flutuante
let num2: number = 0x78CF; //hexadecimal
let num3: number = 0o577; //octal
let num4: number = 0b1100011; //binario
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//bigint: numeros inteiros grande (N no final, e só está disponível a partir do target ES2020 ou ESNEXT)
let big1: bigint = 90007199595n;
let big2: bigint = 0x20000000000007n; //hexadecimal
let big3: bigint = 0o400000000000007n; //octal
let big4: bigint = 0b1100000000000000011n; //binario
console.log(big1);
console.log(big2);
console.log(big3);
console.log(big4);

//STRING:
let comida: string = 'Lasanha';

//demo:
// string com back-ticks ou acento grave (back-tciks, o cifrão e colchetes seguido da variavel `${})
let nomePessoa: string = 'Gabriela';
let nomeEmpresa: string = 'Microsoft';

let detalhePessoa: string = `${nomePessoa} trabalha na empresa ${nomeEmpresa}.`;
console.log(detalhePessoa);

//ARRAY:
let frutas: string [] = ['Melancia', 'Mamao', 'Morango', 'Abacaxi'];
console.log(frutas [0]);
//sempre colchetes e sempre começa na posição 0
//sintaxe: let + nomeVariavel : TypeAnnotation [];

//demo:
let frutas1: Array <string> = ['Melancia', 'Mamao', 'Morango', 'Abacaxi'];
console.log(frutas1 [3]); //exemplo de Array Object, que é mais usado do que o Array com colchetes

//metodo push, que adiciona elementos no final do array
let frutas2: Array <string> = ['Melancia', 'Mamao', 'Morango', 'Abacaxi'];
console.log(frutas2);
frutas2.push ('Uva');
console.log(frutas2);

//TUPLE ou TUPLA:
//sintaxe: let + nomeTupla : [diferentes tipos: boolean, string, number..]
let pessoa : [string, string, number];
pessoa = ['Gabriela', 'Microsoft', 26];   //na ordem que você colocar na tupla, se alterar a ordem dará erro de sintaxe
console.log(pessoa);

//demo:
let pessoa1 : [string, string, number];
pessoa1 = ['Gabriela', 'Microsoft', 26];
console.log(pessoa1[1]); //acessando valores da tupla, lembrando que sempre começa na posição 0


let listaFrutas: [string, ... string []] = ['Morango', 'Melancia', 'Banana', 'Abacate'];
console.log(... listaFrutas);
// exemplo de lista homogenea (lista com apenas um tipo de dado). Spred operator, que é não ficar repetindo o type. Se eu sei que todos os valores são string eu uso o spred operator(...)


let listaFrutas2: [number, boolean, ... string[]] = [5, true, ... listaFrutas];
console.log(listaFrutas2);
// exemplo de lista heterogenea (com mais de um tipo de dado), e spred operator. Usa-se quando ha um grande numero de campos.


//ex: um parametro(NOME) seguido de um dado primitivo(STRING) + colchete [], é uma tupla de dado primitivo de tupla de nome
function listarPessoa (nome: string [], idade: number [])
{
    return [... nome, ... idade]; //spred operator
}

let resultado = listarPessoa (['Gabriela', 'Gustavo'], [26, 30]);
console.log(resultado);

//UNKNOWN
let valorVariavel: unknown;
valorVariavel = 123;  //number
valorVariavel = true; //boolean
valorVariavel = []; //array vazio
valorVariavel = 'Olá Gabriela!'; // string
console.log(valorVariavel);
//podemos usar o unknown quando não sabemos que tipo definir. Ele é um coringa, serve para number, string, boolean, array...




//FluxosDeControle
//IF...ELSE
const max = 100;
let contador = 100;
if (max < contador) {
    contador++
}
console.log(contador);

//uso do ELSE
const permissaoDirigir = 18;
if (permissaoDirigir <= 17){
    console.log('Você está habilitado para dirigir!')
}
else {
    console.log('Você não está habilitado para dirigir!')
}

//ternário
const idadeVotacao = 18;
const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar' : 'Você não é elegível para votar'
console.log(podeVotar);
//? se for verdadeiro
//: se não for



//SWITCH CASE
let flor = 'tulipa';
switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas');
        break;
    case 'violeta':
        console.log('Violetas são azuis');
        break;
    case 'tulipa':
        console.log('Tulipas são brancas');
        break;

    default:
        console.log('Selecione outra flor'); //quando nenhum case for correspondido
}


//FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//O ++ é para incrementar



//Funções
function somarNum (a: number, b:number) : number {
    return a + b;
}
const result = somarNum(5,5);
console.log(result);




//Herança
class Animal {
    mover(distancia = 0) {
      console.log(`Animal se moveu...: ${distancia} metros.`);
    }
  }
  //cachorro é filha da classe animal (EXTENDS)
  class Cachorro extends Animal {
    latir() {
      console.log('Au, Au!');
    }
  }

  const cachorro = new Cachorro();
  cachorro.latir();
  cachorro.mover(10);
  cachorro.latir();
 //tudo que aparece pra animal, aparece para cachorro. Colocando o PONTO(.), vai aparecer, pq usamos a palavra EXTENDS


 //Classe
 class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;

    // Definir o Construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
      this.codigoEstudante = codigoEstudante;
      this.nomeEstudante = nomeEstudante;
    }

    // Criar o método
    listarEstudante(): void {
      console.log('Código do Estudante...: ' + this.codigoEstudante);
      console.log('Nome do Estudante...: ' + this.nomeEstudante);
    }
  }

  // Acessar os campos:
  const estudante_1 = new Estudante_1(9845, 'Bolt super cão');
  console.log(
    'Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante,
  );
  console.log(
    'Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante,
  );


//temos o modificador public, private e protected
//PRIVATE
class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigEstudante: number, nomeEstudante: string, idade: number) {
      this.codigoEstudante = codigEstudante;
      this.nomeEstudante = nomeEstudante;
      this.idade = idade;
    }

    retornarDadosEstudante() {
      return `Código do Aluno...: ${this.codigoEstudante}.
        Nome do Estudante...: ${this.nomeEstudante}.
        Idade do Estudante...: ${this.idade}`;
    }
  }

  const estudante_02 = new Estudante_02(98765, 'Gabriela Azevedo', 26);
  console.log(estudante_02.retornarDadosEstudante());



 //PROTECTED
 class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
      this.codigoEstudante = codigoEstudante;
      this.nomeEstudante = nomeEstudante;
    }
  }
  //herança: EXTENDS
  class Pessoa extends Estudante_03 {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
      super(codigoEstudante, nomeEstudante); //super() chama o construtor da classe pai
      this.curso = curso;
    }

    retornarDados() {
      return `Código do Aluno: ${this.codigoEstudante}.
      Nome do Estudante: ${this.nomeEstudante}.
      Matéria: ${this.curso}`;
    }
  }

  const estudante_03 = new Pessoa(783212, 'Gabriela Azevedo', 'Filosofia');
  console.log(estudante_03.retornarDados());


  //READONLY
  class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
      this.dataNascimento = dataNascimento;
    }
  }

  const funcionario = new Funcionario(new Date(1986, 10, 24));
  //o readonly garante que uma propriedade, uma vez atribuída, não pode ser alterada. Resumidamente, é um valor importante que não deve ser alterado após ser atribuido
  //Readonly (somente leitura)


//Interface
interface Pessoa01 {
    nome: string;
    sobrenome: string;
    idade: number;
  }
  //parametro "pessoa" que é do tipo "Pessoa"
  function exibirNome(pessoa: Pessoa01): string {
    return `
      Nome...: ${pessoa.nome}
      Sobrenome...: ${pessoa.sobrenome}
      Idade...: ${pessoa.idade}
    `;
    //ex: pessoa (parametro).nome (de acordo com a interface)
  }
  const gabir: Pessoa01 = {
    nome: 'Gabriela',
    sobrenome: 'Azevedo',
    idade: 26,
  }
  console.log(exibirNome(gabir)); //resultado, chamando o método exibirNome, dentro dele esperando o argumento pessoa (no caso GABRI)



//Interface com IMPLEMENTS
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void; //método comer
  }
  //tudo que está contido em interface, vamos implementar dentro da classe "Hamster"
  class Hamster implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
      this.nome = nome;
      this.idade = idade;
      this.estaVivo = estaVivo;
    }
   //implementando o metodo que criei na interface IAnimal
    comer(tipoComida: string): void {
      console.log(`O hamster ${this.nome} está comendo ${tipoComida}`);
    }
  }
  //definindo informações
  const hamster = new Hamster('TopoGigio', 2, true);
  console.log(hamster);
  hamster.comer('Ração'); //chamando o método comer


  //Interface com EXTENDS
  interface Animal_01 {
    nome: string;
    idade: number;
    porte: string;
  }
  //todas as propriedades contidas na interface animal vai se extender para a interface cachorro que tem dentro dela a propriedade RAÇA do tipo string
  interface Cachorro_01 extends Animal_01 {
    raca: string;
  }

  const cachorrinho: Cachorro_01 = {
    nome: 'Bolt',
    idade: 2,
    porte: 'Médio',
    raca: 'Husky',
  };

  console.log(cachorrinho);


//Tipos avançados e novos operadores
//Intersection type
interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}
//operador & (and) para juntar uma classe com a outra
type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

//agora tudo que contém em DadosBancarios, Cliente e DadosPessoaFisica entra aqui, pq unimos todos eles
const dadosCliente: DadosCliente = {
  conta: 123456,
  agencia: 123,
  banco: "Banco do Brasil",
  nome: "Gabriela Azevedo",
  email: "gab.a.juliao@hotmail.com",
  cpf: 123456789,
}

console.log(dadosCliente);


//Casting
const nome_01: unknown = 'Gabriela Azevedo';
console.log((nome_01 as string).toLowerCase());
// deixa de ser unknown e passa a ser string, usando AS
//toLowerCase sequencia de caracteres em  minúsculo
//toUpperCase sequencia de caracteres em  maiúsculo



//Omit
interface Livro {
  titulo: string;
  autor: string | null;
  preco: number;
  numeroPaginas: number;
}

//o Omit vai omitir uma propriedade, no caso aqui vamos omitir o numeroPaginas da interface Livro
type Artigo = Omit<Livro, 'numeroPaginas'>;

//readonly, somente leitura
type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
  autor: 'Boris Cherny',
  numeroPaginas: 324,
  preco: 19.99,
  titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
}


//Generic Constraints: restrição de dados
//<> função genérica, que pode ser representada por T, ou outras letras.
function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
  return {
    ...objeto1, //spred operator
    ...objeto2, //spred operator
  }
}

const pessoa_002 = juntarObjetos(
  { nome: 'Gabriela', }, //meu objeto1 será nome (Gabriela)
  { idade: 26, }  //meu objeto2 será idade (26)
);

console.log(pessoa_002);

//Uso do Regex
//util para validações
const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const phone = '(44) 99813-9265';
console.log(phoneRegex.test(phone));

