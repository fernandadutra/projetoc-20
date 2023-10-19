class Ground{
    constructor(x,y,l,a){
        this.x=x;
        this.y=y;
        this.l=l;
        this.a=a;
        var solo_caracteristica={
            isStatic:true,
        }
        this.body=Bodies.rectangle(this.x,this.y,this.l,this.a,solo_caracteristica);
        World.add(world,this.body);
    }
    show(){
        push();
     strokeWeight(3);
    rectMode(CENTER);
    stroke("Green");
    fill("Yellow");
    rect(this.x,this.y,this.l,this.a);
        pop();

    }
}