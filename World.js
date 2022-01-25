let tableauPositions = [0,32,64,96,128,160,192,224,256,288];
let largeurCase = 16;

// Creation de la classe canvas
class World {
  
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  } 
  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image,0,0)
    };
    image.src = "./DemoLower.png";
 
    //Place some Game Objects!
    const hero = new GameObject({
      x: 5,
      y: 6,
    })
    const npc1 = new GameObject({
     x: 3,
     y: 4,
     src: "./npc1.png"
   })
 
   setTimeout(() => {
     hero.sprite.draw(this.ctx);
     npc1.sprite.draw(this.ctx);
   }, 200)
 
 
  }
 
 }