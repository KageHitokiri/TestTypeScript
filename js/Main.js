var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada");
    }
    Main.prototype.getWeapon = function () {
        return new Weapon("Espada de entrenamiento", 5, "Espada", 5, "Espada básica para entrenar");
    };
    return Main;
}());
var main = new Main();
