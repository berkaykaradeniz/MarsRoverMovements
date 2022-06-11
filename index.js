
var roverNewX, roverNewY, roverDirection;

function roverStart(){

    if ((document.getElementById('platoRange').value.length > 0) && (document.getElementById('roverStartPosition').value.length > 0) && (document.getElementById('roverMovements').value.length > 0))
    {
        var result = "";
        var platoRangeVal = document.getElementById('platoRange').value;
        var roverStartPositionVal = document.getElementById('roverStartPosition').value;
        var roverMovementsVal = document.getElementById('roverMovements').value;

        var platoRangeArray =  platoRangeVal.split(" ");
        var roverStartPositionArray =  roverStartPositionVal.split(" ");
        var roverMovementsArray =  roverMovementsVal.split("");

        var platoX = platoRangeArray[0];
        var platoY = platoRangeArray[0];

        var roverX = roverStartPositionArray[0];
        var roverY = roverStartPositionArray[1];
        roverDirection = roverStartPositionArray[2];

        roverNewX = parseInt(roverX);
        roverNewY = parseInt(roverY);
        var message = "";
        var direction;
        roverMovementsArray.forEach(movement => {
            if (roverNewY <= platoY || roverNewX <= platoX)
            {
                switch (movement)
                {
                    case "L":
                        roverLeft(roverDirection)
                        break;
                    case "R":
                        roverRight(roverDirection)
                        break;
                    case "M":
                        roverMove(roverDirection);
                        break;
                }
            }else
            {
                message = "Plato Too Small. Rover fall out This Position" + roverNewX + " " + roverNewY + " " + roverDirection;
                result = "";
            }
        });

        result = roverNewX + " " + roverNewY + " " + roverDirection;

        if (roverNewY > platoY || roverNewX > platoX)
        {
            message = "Plato Too Small. Rover fall out This Position" + roverNewX + " " + roverNewY + " " + roverDirection;
            result = "";
        }

        document.getElementById('roverCordinates').innerHTML += result + message + "<br>";
        var roverCount = document.getElementById('roverNumber').innerHTML;
        document.getElementById('roverNumber').innerHTML = parseInt(roverCount) + 1;
        document.getElementById('roverSend').innerHTML = "Move Rover " + (parseInt(roverCount) + 1);        
    }
}
function roverMove(roverDirection){
    switch(roverDirection)
    {   
        case "N":
            roverNewY += 1;
            break;    
        case "S":
            roverNewY -= 1;
            break;  
        case "W":
            roverNewX -= 1;
            break;    
        case "E":
            roverNewX += 1;
            break;    
    }
}
function roverRight(Direction)
{
    switch(Direction)
    {   
        case "N":
            roverDirection = "E";
            break;    
        case "S":
            roverDirection = "W";
            break;  
        case "W":
            roverDirection = "N";
            break;    
        case "E":
            roverDirection = "S";
            break;    
    }  
}
function roverLeft(Direction)
{
    switch(Direction)
    {   
        case "N":
            roverDirection = "W";
            break;    
        case "S":
            roverDirection = "E";
            break;  
        case "W":
            roverDirection = "S";
            break;    
        case "E":
            roverDirection = "N";
            break;    
    }
}

function testCase(state){
    //Test Values Filling
    if(state == 1)
    {
        document.getElementById('platoRange').setAttribute('value','5 5');
        document.getElementById('roverStartPosition').setAttribute('value','1 2 N');
        document.getElementById('roverMovements').setAttribute('value','LMLMLMLMM');
    }
}