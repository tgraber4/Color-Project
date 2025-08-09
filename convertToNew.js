var Instructions = [];

function parseColorCoords(input) {
    let lines = input.split(/\n|;/).map(line => line.trim()).filter(line => line);
    let colorCoords = {};
    
    lines.forEach(line => {
        let match = line.match(/(\D+)(startx|starty|endx|endy)\s*=\s*(\d+)/);
        if (match) {
            let [_, col, coord, value] = match;
            if (!colorCoords[col]) {
                colorCoords[col] = { startx: undefined, starty: undefined, endx: undefined, endy: undefined };
            }
            if (coord === "startx") colorCoords[col].startx = value;
            else if (coord === "starty") colorCoords[col].starty = value;
            else if (coord === "endx") colorCoords[col].endx = value;
            else if (coord === "endy") colorCoords[col].endy = value;
        }
    });
    
    Object.keys(colorCoords).forEach(color => {
        let { startx, starty, endx, endy } = colorCoords[color];
        if (startx !== undefined && starty !== undefined && endx !== undefined && endy !== undefined) {
            Instructions.push(`colorInfo[\"${color}\"].updateCoords(${startx}, ${starty}, ${endx}, ${endy});`);
        } else {
            console.log(`Error: Missing coordinates for color ${color}`);
        }
    });
}




var myFunction = function () {
    var inputBox = document.getElementById("inputText");
    const box = document.getElementById("box");
    parseColorCoords(inputBox.value)
    for (var i = 0; i < Instructions.length; i++) {
        const p1 = document.createElement("p");
        const node = document.createTextNode(Instructions[i]);    
        p1.appendChild(node);
        box.appendChild(p1);
    }
}

