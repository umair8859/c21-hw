var radius=20;
var sun;
var mercury;
var venus;
var earth;
var jupiter;
var saturn;
var uranus;
var neptune;
function setup() {
  createCanvas(900,400);
  sun=createSprite(0, 200,radius,radius);
  sun.shapeColor="yellow"
  mercury=createSprite(100,200,10,10);
  mercury.shapeColor="brown";
  venus=createSprite(200,100,20,20);
  venus.shapeColor="red";
  earth=createSprite(300,150,20,20);
  earth.shapeColor="blue"
  mars=createSprite(400,200,15,15);
  mars.shapeColor="chartreuse";
  jupiter=createSprite(600,350,40,40);
  jupiter.shapeColor="orange";
  saturn=createSprite(700,370,35,35);
  saturn.shapeColor="pink";
  uranus=createSprite(800,200,30,30);
  uranus.shapeColor="purple";
  neptune=createSprite(900,400,25,25);
  neptune.shapeColor="violet";
}

function draw() {
  background(0);  
  if(frameCount%5===0){
    radius=radius+10;
    sun.height = radius;
    sun.width = radius;
  }
  mercury.velocityY=-0.2;
  venus.velocityY=0.15;
  earth.velocityY=-0.17;
  mars.velocityY=-0.25;
  jupiter.velocityY=-0.3;
  saturn.velocityY=-0.2;
  uranus.velocityY=0.1;
  neptune.velocityY=-0.1;
  destroy_mercury(sun,mercury);
  destroy_venus(sun,venus);
  destroy_earth(sun,earth);
  destroy_mars(sun,mars);
  destroy_jupiter(sun,jupiter);
  destroy_saturn(sun,saturn);
  destroy_uranus(sun,uranus);
  destroy_neptune(sun,neptune);
  if(frameCount%973===0){
    radius=20;
    sun.height=radius;
    sun.width=radius;
    mercury.visible=true;
    mercury.y=200;
    venus.visible=true;
    venus.y=100;
    earth.visible=true;
    earth.y=150;
    mars.visible=true;
    mars.y=200;
    jupiter.visible=true;
    jupiter.y=350;
    saturn.visible=true;
    saturn.y=370;
    uranus.visible=true;
    uranus.y=200;
    neptune.visible=true;
    neptune.y=400;
  }
  drawSprites();
}
function destroy_mercury(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_venus(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_earth(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_mars(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_jupiter(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_saturn(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_uranus(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}
function destroy_neptune(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj2.visible=false;
}
}