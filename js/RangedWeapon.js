var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RangedWeapon = /** @class */ (function (_super) {
    __extends(RangedWeapon, _super);
    function RangedWeapon(weaponName, damage, type, value, description, range, ammoType) {
        if (value === void 0) { value = 0; }
        if (description === void 0) { description = "Dispara cosas"; }
        if (range === void 0) { range = 2; }
        if (ammoType === void 0) { ammoType = "Flechas"; }
        var _this = _super.call(this, weaponName, damage, type, value, description) || this;
        _this.range = range;
        _this.ammoType = ammoType;
        return _this;
    }
    RangedWeapon.prototype.getRange = function () {
        return this.range;
    };
    RangedWeapon.prototype.getAmmoType = function () {
        return this.ammoType;
    };
    RangedWeapon.prototype.getDetails = function () {
        return this.weaponName + ": \nTipo: " + this.type + "\n" +
            this.description + "\n" +
            "Daño: " + this.damage + " Rango máximo: " + this.range + "\nTipo de munición: " + this.ammoType + " Precio: " + this.value + " monedas de oro.";
    };
    return RangedWeapon;
}(Weapon));
var bow = new RangedWeapon("Arco corto", 2, "Arco", 6, "Arco de entrenamiento", 3, "Flechas");
console.log(bow.getDetails());
