class Food{
constructor(){
    this.image=loadImage("images/Milk.png")
    this.foodStock=0
    this.lastFed
   
}

getFoodStock(){
//To get more food stock
//foodS+=1
return this.foodStock
}

updateFoodStock(foodStock){
//Update the food stock
database.ref("/").update({
    this.foodStock : foodStock
})

}

/*detuctFoodStock(){
    //Keep track of the food stock left
    foodS-=1
}*/

display(){
var x=100, y=100



imageMode(CENTER)
image(this.image,100,100,30,40)

if(this.foodStock!==0){
for(var i=0;i<this.foodStock;i++){
if(i%10===0){
x=20
y=y+10
}
image(this.image,x,y,30,40)
x=x+10
}
}

//feedPet.mousePressed(function (){
//this.image.hide()
    
//})

}




}