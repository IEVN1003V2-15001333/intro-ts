
abstract class Figura {
    
    abstract calcularArea(): number;
    abstract calcularVolumen(): number;
  
    
    abstract imprimir(): void;
  }
  
  
  class Cilindro extends Figura {
    private radio: number;
    private altura: number;
  
    constructor(radio: number, altura: number) {
      super();
      this.radio = radio;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return 2 * Math.PI * this.radio * this.altura + 2 * Math.PI * this.radio ** 2;
    }
  
    calcularVolumen(): number {
      return Math.PI * this.altura * this.radio ** 2;
    }
  
    imprimir() {
      console.log('--- Cilindro ---');
      console.log(`Área del cilindro: ${this.calcularArea()}`);
      console.log(`Volumen del cilindro: ${this.calcularVolumen()}`);
    }
  }
  
  
  class Pentagono extends Figura {
    private perimetro: number;
    private apotema: number;
    private altura: number;
  
    constructor(perimetro: number, apotema: number, altura: number) {
      super();
      this.perimetro = perimetro;
      this.apotema = apotema;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.perimetro * this.apotema) / 2;
    }
  
    calcularVolumen(): number {
      return this.calcularArea() * this.altura;
    }
  
    imprimir() {
      console.log('--- Pentágono ---');
      console.log(`Área del pentágono: ${this.calcularArea()}`);
      console.log(`Volumen del pentágono: ${this.calcularVolumen()}`);
    }
  }
  
  
  class Circulo extends Figura {
    private radio: number;
    private altura: number;
  
    constructor(radio: number, altura: number) {
      super();
      this.radio = radio;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return Math.PI * this.radio ** 2;
    }
  
    calcularVolumen(): number {
      return this.altura * Math.PI * this.radio ** 2;
    }
  
    imprimir() {
      console.log('--- Círculo ---');
      console.log(`Área del círculo: ${this.calcularArea()}`);
      console.log(`Volumen del círculo: ${this.calcularVolumen()}`);
    }
  }
  
  class PrismaRectangular extends Figura {
    private largo: number;
    private ancho: number;
    private altura: number;
  
    constructor(largo: number, ancho: number, altura: number) {
      super();
      this.largo = largo;
      this.ancho = ancho;
      this.altura = altura;
    }
  
    calcularArea(): number {
      const perimetro = 2 * (this.largo + this.ancho);
      const base = this.largo * this.ancho;
      return perimetro * this.altura + 2 * base;
    }
  
    calcularVolumen(): number {
      return this.largo * this.ancho * this.altura;
    }
  
    imprimir() {
      console.log('--- Prisma Rectangular ---');
      console.log(`Área del prisma rectangular: ${this.calcularArea()}`);
      console.log(`Volumen del prisma rectangular: ${this.calcularVolumen()}`);
    }
  }
  
  
  let cilindro = new Cilindro(5, 10);
  cilindro.imprimir();
  
  let pentagono = new Pentagono(20, 5, 10);
  pentagono.imprimir();
  
  let circulo = new Circulo(7, 10);
  circulo.imprimir();
  
  let prisma = new PrismaRectangular(10, 5, 7);
  prisma.imprimir();