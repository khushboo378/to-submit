/*if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dog2IMG)
}

else if(keyWentDown(DOWN_ARROW)){
  foodS=foodS+1
  noStroke()
  fill("white")
  textSize(18)
  text("FOOD SUPPLIED!",100,200)  

}*/

//CODE - 2 




/*var score,database,foodStock,foodS

function setup(){
database=firebase.database()
createCanvas(400,400)
foodStock=database.ref('FOOD')
  foodStock.on("value",readStock)
}

function draw(){

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
}

noStroke()
fill("black")
textSize(30)
text("SCORE :" + foodS,100,200)

}

function readStock(data){
foodS=data.val()
}

function writeStock(x){
if(x<=0){
  x=0
}

else{
  x=x-1
}

database.ref('/').update({//DIDNT unterstood 
  'FOOD':x
})

}*/
