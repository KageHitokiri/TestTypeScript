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

    constructor(
        weaponName:string, 
        damage:number, 
        type:string,
        value:number = 0, 
        description:string="Objeto sin descripción"
        ){
        this.weaponName=weaponName;
        this.damage=damage;
        this.type=type;
        this.value=value;
        this.description=description;
    }

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

var sword = new Weapon("Espada de entrenamiento",5,"Espada",5,"Espada básica para entrenar");
var axe = new Weapon("Hacha de leñador",7,"Hacha",6);

console.log(sword);
console.log(axe);