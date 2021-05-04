class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Corona Killer");
        this.title.position(370, 0);
        this.title.style('font-size', '50px');
        this.title.style('color', 'black');
        this.input.position(435,307);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'yellow');
        this.button.position(445,430);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');
        this.reset.position(895, 5);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'yellow');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(390,350);
            this.greeting.style('color', 'red');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        });

    }
}