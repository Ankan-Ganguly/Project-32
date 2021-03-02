class Land{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            density: 1.3,
            friction: 1.0
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("piece_of_land.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
        World.add(world, this.body);
    }
}