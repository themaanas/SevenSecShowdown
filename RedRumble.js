//INITIALIZE APP AND VARS
const app = new PIXI.Application({ antialias: true, backgroundColor: 0xc0d9eb, width: 800, height: 600});

const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth
const height = window.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;

document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute"
app.renderer.view.style.left = (width / 2) - 400 + "px";
app.renderer.view.style.top = (height / 2) - 300 + "px";
app.renderer.view.style.borderRadius = "10px";
app.render()


//INITIALIZE SQUARES
var squares = []
const graphics = new PIXI.Graphics();

for (var i = 0; i < 7; i++) {
    var row = []
    for (var j = 0; j < 7; j++) {
        const square = PIXI.Sprite.from('squares.png');
        square.scale.set(0.5);
        square.x = 190 + j * 60;
        square.y = 90 + i * 60;
        app.stage.addChild(square);

        row.push(square);
    }
    squares.push(row);
}

app.stage.addChild(graphics);



const character = PIXI.Sprite.from('character.png');
character.scale.set(0.5);
character.x = 190;
character.y = 90;

var characterX = 0;
var characterY = 0;


app.stage.addChild(character);


document.addEventListener('keypress', function(event) {
    // character.renderer.view.classList.add("apply-shake");
    if(event.key == "w") {
        if (characterY > 0) {
            characterY--;
            character.y -= 60;
        }
    } else if(event.key == "a") {
        if (characterX > 0) {
            characterX--;
            character.x -= 60;
        }
    } else if(event.key == "d") {
        if (characterX < 6) {
            characterX++;
            character.x += 60;
        }
    } else if(event.key == "s") {
        if (characterY < 6) {
            characterY++;
            character.y += 60;
        }
    }
});

function() {
    
}
