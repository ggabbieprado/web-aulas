let aluno = {
  nome: "Carlos",
  idade: 20,
  curso: "Sistemas de Informação",
  nota: 7
};

aluno.nota = 9;
aluno.idade = 21;
aluno.aprovado = true; // adiciona nova propriedade

console.log(aluno);

//Nova saída:
//{
  //nome: "Carlos",
  //idade: 21,
  //curso: "Sistemas de Informação",
  //nota: 9,
  //aprovado: true
//}