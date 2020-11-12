export class Producto {
    public nombre: string;
    public imagen: string;
    public precio: number;
    constructor(nom, img, precio){
        this.nombre = nom;
        this.imagen = img;
        this.precio = precio;
    }
}