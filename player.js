class Player{
    constructor(){
        this.size = 100;
        this.x = 70;
        this.y = height - 50;
        this.velocityY =0;
        this.gravity = -0.6     
    }
    show(){
        image(playerImg,this.x , this.y,this.size,this.size);
    }

    jump(){
        this.velocityY = -60;
    }

    move(){
        this.velocityY = this.velocityY +5  
        this.y = this.y + this.velocityY;
        this.y = constrain(this.y , 0, height - this.size);
    }

    collided(currenyObs){
        let isColliding = collideRectRect(
            this.x,
            this.y,
            this.size-20,
            this.size-20,

            currenyObs.x,
            currenyObs.y,
            currenyObs.size-20,
            currenyObs.size-20,
        );
        return isColliding;
    }

}   