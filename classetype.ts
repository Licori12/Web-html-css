class Endereco {
    constructor(
        public rua: string;
        public numero: number;
        public cidade: string;
        public estado: string;
    ) {};
};

class Telefone {
    constructor(
        public ddd: string;
        public numero: number;
        public tipo: string;
    ) {};
};

class Cliente {
    constructor(
        public nome: string;
        public cpf: number;
        public dataNascimento: number;
        public sexo: string;
        public endereco: Endereco;
        public telefones: Telefone[];
    ) {};
};

class Produto {
    constructor(
        public codigo: number;
        public descricao: string;
        public valor: number;
    ) {};
};

class Venda {
    constructor(
        public codigo: number;
        public data: number;
        public cliente: Cliente;
        public produtos: Produto[];
    ) {};

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.valor);    
    };
};

const endereco = new Endereco("Rua A", 123, "São Paulo", "SP");
const telefone = new Telefone("11", 999999999, "Celular");
const cliente = new Cliente("João Silva", 12345678900, 19900101, "Masculino", endereco, [telefone]);

const produto1 = new Produto(1, "Notebook", 3500);
const produto2 = new Produto(2, "Mouse", 150);
const venda = new Venda(1001, 20250403, cliente, [produto1, produto2]);

console.log(`Total da venda: R$${venda.calcularTotal()}`);
