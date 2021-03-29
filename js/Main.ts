class Main{
    constructor(){
        console.log("Aplicación JS cargada");        
    }
    getWeapon(){
        return new Weapon("Espada de entrenamiento",5,"Espada",5,"Espada básica para entrenar");
    }
}

var main = new Main();