window.onload = function(){

    displayBingoBoard()
}

const displayBingoBoard = function(){
    
    let boardContainer = document.getElementById("board-container")
    boardContainer.innerHTML = ""

    for (let i = 1; i <= 76; i++){
        // Creating the new element (an object in memory)
        let newCell = document.createElement("div") // <div></div>
        
        // Customizing the new element (adding the number and the css class) 
        newCell.innerText = i  // <div>1</div>
        newCell.classList.add("Cell") // <div class="day">1</day>
        // newCell.onclick = selectDay // <div class="day" onlick="selectDay(event)">1</day>


        // Append the newly created element as a new child of the month container DIV
        boardContainer.appendChild(newCell)
    }
}

const randomNum = function(){
   let random = Math.floor(Math.random() * 76)

   return random
}