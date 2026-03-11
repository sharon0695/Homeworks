class ATMdata {
    constructor(public name: string, public monto: number, public fecha: Date) {
        this.name = name;
        this.monto = monto;
        this.fecha = new Date();
    }

}
export default ATMdata;