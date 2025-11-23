function getComputerChoice() {
   
    let comp = Math.floor(Math.random() * 3);
        
        switch(comp) {
            case 0:
                return ("Rock");
            case 1:
                return ("Scissors");
            case 2:
                return ("Paper");
          }
    
}

