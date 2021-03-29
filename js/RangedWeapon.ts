class RangedWeapon extends Weapon{
    private range:number;
    private ammoType:string;

    constructor(
        weaponName:string, 
        damage:number, 
        type:string,
        value:number = 0, 
        description:string="Dispara cosas",
        range:number=2, 
        ammoType:string="Flechas") {
        super(weaponName,damage,type,value,description);
        this.range=range;
        this.ammoType=ammoType;
    }
    
    public getRange():number{
        return this.range;
    }

    public getAmmoType():string{
        return this.ammoType;
    }

    public getDetails():string{
        return this.weaponName +": \nTipo: "+this.type+"\n"+
        this.description+"\n"+
        "Daño: "+this.damage+" Rango máximo: "+this.range+"\nTipo de munición: "+this.ammoType+" Precio: "+this.value+" monedas de oro.";
    }

}

var bow = new RangedWeapon("Arco corto", 2,"Arco",6,"Arco de entrenamiento",3,"Flechas");
console.log(bow.getDetails());