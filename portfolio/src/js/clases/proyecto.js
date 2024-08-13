"use strict";
// *  Voy a hacer una estructura similar al proyecto final del modulo 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
//? 1. Crear una clase proyectos
var Proyecto = /** @class */ (function () {
    // constructor
    function Proyecto(nombre, año, url, categoria, descripcion, imagenes) {
        this._nombre = nombre;
        this._año = año;
        this._url = url;
        this._categoria = categoria;
        this._descripcion = descripcion;
        this._imagenes = imagenes;
    }
    // getters
    Proyecto.prototype.getNombre = function () {
        return this._nombre;
    };
    Proyecto.prototype.getAño = function () {
        return this._año;
    };
    Proyecto.prototype.getUrl = function () {
        return this._url;
    };
    Proyecto.prototype.getCategoria = function () {
        return this._categoria;
    };
    Proyecto.prototype.getDescripcion = function () {
        return this._descripcion;
    };
    Proyecto.prototype.getImagenes = function () {
        return this._imagenes;
    };
    // setters
    Proyecto.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };
    Proyecto.prototype.setAño = function (año) {
        this._año = año;
    };
    Proyecto.prototype.setUrl = function (url) {
        this._url = url;
    };
    Proyecto.prototype.setCategoria = function (categoria) {
        this._categoria = categoria;
    };
    Proyecto.prototype.setDescripcion = function (descripcion) {
        this._descripcion = descripcion;
    };
    Proyecto.prototype.setImagenes = function (imagenes) {
        this._imagenes = imagenes;
    };
    return Proyecto;
}());
exports.Proyecto = Proyecto;
