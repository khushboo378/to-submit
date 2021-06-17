//Create variables here
var dog,HappyDog,database,foodS,foodStock
var foodObj//milk
var feedPet,addFood
var fedTime,lastFed
var milk=[]

function preload(){

dogIMG=loadImage("images/dog1.png")
dog2IMG=loadImage("images/dog2.png")

}



function setup() {
  database=firebase.database()

	createCanvas(500,500);
  dog=createSprite(250,250,50,50)
  dog.addImage(dogIMG)
  dog.scale=0.2

  foodObj=new Food()
  foodStock=database.ref('FOOD');
  foodStock.on("value",readStock)
  
  /*for(var i=10; i<=width; i=i+10){
    milk.push(new Food())
  }*/
  //var feedPet,addFood
  feedPet=createButton("HUNGRY")
  feedPet.position(250,300)
  feedPet.mousePressed(feedDog);

  addFood=createButton("MORE FOOD")
  addFood.position(300,100)
  addFood.mousePressed(addMeals)

}


function draw() {  
background(46,139,87)



fedTime=database.ref("FeedTime");
fedTime.on("value",function (data){
  lastFed=data.val()
})


fill("white")
textSize(15)

if(lastFed>=12){
    text("LAST FEED :"+lastFed%12 + "PM",200,30)
}

else if(lastFed===0){
    text("LAST FEED : 12 AM",200,30)
}

else{
    text("LAST FEED"+lastFed+"AM",200,30)
}




//milk.display()

/*for(var i=0;i<milk.length;i++){
  milk[i].display()    
  }*/

  drawSprites();
  //add styles here
  //noStroke()
  /*fill("white")
  textSize(30)
  text("FOOD STOCK :"+ foodS ,200,100)*/
}



function readStock(data){
 foodS=data.val() 
 foodObj.updateFoodStock(foodS)
}



/*
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

}
*/

  
function addMeals(){
foodS++
database.ref("/").update({
  FOOD:foodS
})


}

//get minused 
function feedDog(){
dog.addImage(dog2IMG)

//milk.updateFoodStock(milk.getFoodStock());
foodObj.updateFoodStock(foodObj.getFoodStock()-1);

database.ref("/").update({
  FOOD:foodObj.getFoodStock(),
  fedTime:hour()
})

}