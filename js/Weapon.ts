/**
 * Clase(molde del Objeto)
 * Propiedades (Características)
 * Métodos (Funciones o acciones del objeto)
 */

class Weapon {
    private weaponName:string;
    private damage:number;
    private type:string;
    private value:number;
    private description:string;

    public setWeaponName(newWeaponName:string):void{
        this.weaponName=newWeaponName;
    }
    public setDamage(newDamage:number):void {
        this.damage=newDamage;
    }
    public setType(weaponType:string):void {
        this.type = weaponType;
    }
    public setValue(newValue:number):void {
        this.value = newValue;
    }
    public setDescription(newDescription:string):void {
        this.description = newDescription;
    }

    public getWeaponName():string{
        return this.weaponName;
    }
    public getDamage():number{
        return this.damage;
    }
    public getType():string{
        return this.type;
    }
    public getValue():number{
        return this.value;
    }
    public getDescription():string{
        return this.description;
    }


}

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