class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset= createButton('Reset');
    this.replay=createButton('Play Again');
    this.greet2=createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.replay.position(displayWidth-160,20);
    this.reset.position(displayWidth-80,20);


  }

  end(){
    this.greet2.html(player.name+'Rank is '+player.rank);
    this.greet2.position(displayWidth/2 - 70, displayHeight/4);
    this.reset.mousePressed(()=>{
      this.greet2.hide();
      player.updateCount(0);
      game.update(0);
      player.updateCarsAtEnd(0);
    })

    this.replay.mousePressed(()=>{
      var playerRef=database.ref("players");
      playerRef.remove();
      clear();
      game.start();
    })
  }

}
