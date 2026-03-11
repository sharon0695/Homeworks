class ATMdata {
    public name:string;
    public monto:number
    public fecha:Date;

    constructor(name:string, monto:number) {
        this.name = name;
        this.monto = monto;
        this.fecha = new Date();
    }
}
export default ATMdata;