class System{

    constructor(){
        
    }

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        textFont("Wolf Rubeus Demo Font");
        text(code,300,300)
        if(actualCode === enteredCode) 
            return true
        else
            return false
    }

}