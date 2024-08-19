// Crie uma classe de uma abstração;
function Dispositivo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

//Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
function Smartphone(marca, modelo, ano, sistemaOperacional) {
    Dispositivo.call(this, marca, modelo, ano);
    this.sistemaOperacional = sistemaOperacional;
}

function Laptop(marca, modelo, ano, tamanhoTela) {
    Dispositivo.call(this, marca, modelo, ano);
    this.tamanhoTela = tamanhoTela;
}


// Crie pelo menos três instâncias de objetos;
const smartphone1 = new Smartphone("Apple", "iPhone 12", 2020, "iOS");
const smartphone2 = new Smartphone("Samsung", "Galaxy S21", 2021, "Android");
const laptop1 = new Laptop("Dell", "XPS 13", 2022, 13.3);

console.log(smartphone1);
console.log(smartphone2);
console.log(laptop1);

