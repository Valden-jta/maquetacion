import * as fs from "fs";
import "reflect-metadata";
import "es6-shim";
import { plainToClass, plainToClassFromExist } from "class-transformer";

export class Proyecto {
  private _nombre: string;
  private _año: number;
  private _url: string;
  private _categoria: string[]; //practicas, front end, back end
  private _descripcion: string;
  private _tags: string[];   
  private _imagenes: string[];

  // constructor
  constructor(
    nombre: string,
    año: number,
    url: string,
    categoria: string[],
    descripcion: string,
    tags: string[],
    imagenes: string[]
  ) {
    this._nombre = nombre;
    this._año = año;
    this._url = url;
    this._categoria = categoria;
    this._descripcion = descripcion;
    this._tags = tags;
    this._imagenes = imagenes;
  }

  // getters
  public getNombre(): string {
    return this._nombre;
  }
  public getAño(): number {
    return this._año;
  }
  public getUrl(): string {
    return this._url;
  }
  public getCategoria(): string[] {
    return this._categoria;
  }
  public getDescripcion(): string {
    return this._descripcion;
  }
  public getTags(): string[] {
    return this._tags;
  }
  public getImagenes(): string[] {
    return this._imagenes;
  }

  // setters
  public setNombre(nombre: string): void {
    this._nombre = nombre;
  }
  public setAño(año: number): void {
    this._año = año;
  }
  public setUrl(url: string): void {
    this._url = url;
  }
  public setCategoria(categoria: string[]): void {
    this._categoria = categoria;
  }
  public setDescripcion(descripcion: string): void {
    this._descripcion = descripcion;
  }
  public setTags(tags: string[]) {
    this._tags = tags;
  }
  public setImagenes(imagenes: string[]) {
    this._imagenes = imagenes;
  }
}

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

  //  Crear json
  public escribirEnFicheroJSON(nombreFichero: string): void {
    fs.writeFileSync(nombreFichero, JSON.stringify(this, null, 3));
  }

  //   obtener instancia del json
  public obtenerInstanciaJSON(nombreFichero: string): Proyectos {
    let data = JSON.parse(fs.readFileSync(nombreFichero, "utf8")); //  nos devuelve un objeto js, en este caso un objeto que contiene un array
    let proyectos: Proyecto[] = data.proyectos.map((proyecto: any) =>
      plainToClass(Proyecto, proyecto)
    );
    let instanciaProyectos = new Proyectos(proyectos);
    return instanciaProyectos;
  }
}
