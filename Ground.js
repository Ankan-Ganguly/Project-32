class Ground{
    constructor(x,y,width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("ground.png");
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world, this.body);
    }
    display(){
        var groundpos = this.body.position;
        imageMode(CENTER);
        image(this.image, groundpos.x, groundpos.y, 0,0);
    }
}