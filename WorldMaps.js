class WorldMap {
    constructor(config){
        this.gameObjects = config.gameObjects;
        
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }
    drawlowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0);

    }
    drawupperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0);

    }
}