  

// Função Construtora => (MOLDE) (Classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //this.nomeCompleto = () => 'Original' +  this.nome + ' ' + this.sobrenome
  }
  Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
   }

  // instancia
  const pessoa1 = new Pessoa ("Kauã", 'A') // <= Pessoa = Funcão Construtora
  const pessoa2 = new Pessoa ("Maria", 'A') // <= Pessoa = Funcão Construtora
  const data = new Date() // <= Date = Função Construtora

  
  console.log(pessoa1)
  console.log(data)