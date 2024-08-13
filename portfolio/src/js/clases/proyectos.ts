import { Proyecto } from "./proyecto";

export class Proyectos {

    private _proyectos: Proyecto[];

    constructor(proyectos: Proyecto[]) {
        this._proyectos = proyectos;
    }

      // Getters
      public getProyectos(): Proyecto[] {
        return this._proyectos;
    }

    // Setters
    public setProyectos(proyectos: Proyecto[]): void {
        this._proyectos = proyectos;
    }

    // Añadir proyecto
    public addProyecto(proyecto: Proyecto): void {
        this._proyectos.push(proyecto);
    }

    // Borrar proyecto
    public removeProyecto(index: number): void {
        if (index > -1 && index < this._proyectos.length) {
            this._proyectos.splice(index, 1);
        }
    }


}