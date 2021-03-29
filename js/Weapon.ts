/**
 * interface
 */
 interface baseWeapon{
    setWeaponName(newWeaponName);
    setDamage(newDamage);
    setType(weaponType);
    setValue(newValue);
    setDescription(newDescription);

    getWeaponName();
    getDamage();
    getType();
    getValue();
    getDescription();
    getDetails();
}

/**
 * Clase(molde del Objeto)
 * Propiedades (Características)
 * Métodos (Funciones o acciones del objeto)
 */

class Weapon implements baseWeapon{
    protected weaponName:string;
    protected damage:number;
    protected type:string;
    protected value:number;
    protected description:string;

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
    public getDetails():string{
        return this.weaponName +": \nTipo: "+this.type+"\n"+
        this.description+"\n"+
        "Daño: "+this.damage+" Precio: "+this.value+" monedas de oro.";
    }

}

var sword = new Weapon("Espada de entrenamiento",5,"Espada",5,"Espada básica para entrenar");
var axe = new Weapon("Hacha de leñador",6,"Hacha",7);

console.log(sword.getDetails());
console.log(axe.getDetails());