class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;
   
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    public calcularRaices(): { x1: number | null; x2: number | null } {
      const dis = this.b ** 2 - 4 * this.a * this.c; 
      if (dis < 0) {
        console.log('La ecuación no tiene soluciones reales.');
        return { x1: null, x2: null }; 
      }
      const x1 = (-this.b + Math.sqrt(dis)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(dis)) / (2 * this.a);
      return { x1, x2 };
    }
    public imprimir() {
      const { x1, x2 } = this.calcularRaices(); 
      if (x1 !== null && x2 !== null) {
        console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`); 
      }
    }
  }
  let ecuacion = new EcuacionCuadratica(1, -3, 2);
  ecuacion.imprimir();
