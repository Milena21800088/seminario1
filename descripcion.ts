import { Conditional } from "@angular/compiler"

export class Descripcion {
    public id!: number
    public nombre!: string
    constructor (data: any){
        this.id = data.id
        this.nombre = data.nombre
        
    }
}

