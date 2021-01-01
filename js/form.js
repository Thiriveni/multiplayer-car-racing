class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("Play");
        this.reset=createButton("reset");
        this.greeting=createElement("h3");
        this.title=createElement("h1");
    }
    display(){
        this.input.position(windowWidth/2-40,windowHeight/2-80);
        this.button.position(windowWidth/2+40,windowHeight/2);
        this.reset.position(windowWidth-100,20);
        
        this.title.html("Car Racing Game");
        this.title.position(windowWidth/2,0);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            console.log(playerCount);
           this.greeting.html("Hello"+player.name);
           this.greeting.position(windowWidth/2-70,windowHeight/4);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            Player.updateRank(0);

        })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

}