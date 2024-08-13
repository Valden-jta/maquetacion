// *  Voy a hacer una estructura similar al proyecto final del modulo 1

//? 1. Crear una clase proyectos

export class Proyecto {
  private _nombre: string;
  private _año: number;
  private _url: string;
  private _categoria: string[]; //practicas, front end, back end
  private _descripcion: string;
  private _imagenes: string[];

  // constructor
  constructor(
    nombre: string,
    año: number,
    url: string,
    categoria: string[],
    descripcion: string,
    imagenes: string[]
  ) {
    this._nombre = nombre;
    this._año = año;
    this._url = url;
    this._categoria = categoria;
    this._descripcion = descripcion;
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
  public setImagenes(imagenes: string[]) {
    this._imagenes = imagenes;
  }
}



