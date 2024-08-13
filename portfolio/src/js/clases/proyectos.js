"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyectos = void 0;
var Proyectos = /** @class */ (function () {
    function Proyectos(proyectos) {
        this._proyectos = proyectos;
    }
    // Getters
    Proyectos.prototype.getProyectos = function () {
        return this._proyectos;
    };
    // Setters
    Proyectos.prototype.setProyectos = function (proyectos) {
        this._proyectos = proyectos;
    };
    // Añadir proyecto
    Proyectos.prototype.addProyecto = function (proyecto) {
        this._proyectos.push(proyecto);
    };
    // Borrar proyecto
    Proyectos.prototype.removeProyecto = function (index) {
        if (index > -1 && index < this._proyectos.length) {
            this._proyectos.splice(index, 1);
        }
    };
    return Proyectos;
}());
exports.Proyectos = Proyectos;
