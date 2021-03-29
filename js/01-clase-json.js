var bike = {
    color: "Rojo",
    model: "BMX",
    brakes: "Disco",
    maximumSpeed: "60km/h",

    colorShift: function(newColor){
        this.color = newColor;
    }
}
bike.colorShift("Negro");
console.log(bike);