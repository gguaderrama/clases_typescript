var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var editorVideo = /** @class */ (function (_super) {
    __extends(editorVideo, _super);
    function editorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    editorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    editorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    editorVideo.prototype.getAllData = function () {
        return this.getNombre() + "-" + this.getVersion() + "-" + this.getTimeline();
    };
    return editorVideo;
}(Programa));
var editor = new editorVideo();
editor.setVersion(1);
editor.setNombre("Estudio");
editor.setTimeline(4000);
console.log(editor.getAllData());
