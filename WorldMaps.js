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

window.WorldMaps = {
    DemoRoom: {
        lowerSrc: "./DemoLower.png",
        upperSrc: "./DemoUpper.png",
        gameObjects:{
            hero: new GameObject({
            x: 2,
            y: 6,
            }),
            npc1: new GameObject({
                x: 4,
                y: 4,
                src: "./npc1.png"
                }),
            

        }
    },
    Kitchen: {
        lowerSrc: "./KitchenLower.png",
        upperSrc: "./KithenUpper.png",
        gameObjects:{
            hero: new GameObject({
            x: 2,
            y: 6,
            }),
            npc1: new GameObject({
                x: 4,
                y: 4,
                src: "./npc1.png"
                }),
            

        }
    },
}