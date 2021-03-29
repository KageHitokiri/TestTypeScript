/**
 * Clase(molde del Objeto)
 * Propiedades (Características)
 * Métodos (Funciones o acciones del objeto)
 */
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    Weapon.prototype.setWeaponName = function (newWeaponName) {
        this.weaponName = newWeaponName;
    };
    Weapon.prototype.setDamage = function (newDamage) {
        this.damage = newDamage;
    };
    Weapon.prototype.setType = function (weaponType) {
        this.type = weaponType;
    };
    Weapon.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    Weapon.prototype.setDescription = function (newDescription) {
        this.description = newDescription;
    };
    Weapon.prototype.getWeaponName = function () {
        return this.weaponName;
    };
    Weapon.prototype.getDamage = function () {
        return this.damage;
    };
    Weapon.prototype.getType = function () {
        return this.type;
    };
    Weapon.prototype.getValue = function () {
        return this.value;
    };
    Weapon.prototype.getDescription = function () {
        return this.description;
    };
    return Weapon;
}());
var sword = new Weapon();
sword.setWeaponName("Espada de entrenamiento");
sword.setDamage(5);
sword.setType("Espada");
sword.setValue(5);
sword.setDescription("Espada básica para entrenar");
var axe = new Weapon();
axe.setWeaponName("Hacha de leñador");
axe.setDamage(7);
axe.setType("Hacha");
axe.setValue(6);
axe.setDescription("Herramienta para talar");
console.log(sword);
console.log(axe);
