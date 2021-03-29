/**
 * Clase(molde del Objeto)
 * Propiedades (Características)
 * Métodos (Funciones o acciones del objeto)
 */
var Weapon = /** @class */ (function () {
    function Weapon(weaponName, damage, type, value, description) {
        if (value === void 0) { value = 0; }
        if (description === void 0) { description = "Objeto sin descripción"; }
        this.weaponName = weaponName;
        this.damage = damage;
        this.type = type;
        this.value = value;
        this.description = description;
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
var sword = new Weapon("Espada de entrenamiento", 5, "Espada", 5, "Espada básica para entrenar");
var axe = new Weapon("Hacha de leñador", 7, "Hacha", 6);
console.log(sword);
console.log(axe);
