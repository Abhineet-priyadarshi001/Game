import {useState } from "react"

function Game(){

    const[playerChoice , setPlayerchoice] = useState(null)
    const[computerChoice , setComputerChoice] = useState(null)
    const[Result , setResult] = useState(null)
    const[Matches , setTotalMatches] = useState(0)
    const[PlayerWins , setPlayerWins] = useState(0)
    const[computerScore , setComputerScore] = useState(0)
    const[resultStyle, setResultStyle] = useState("")

    const Tools = ["Stone" ,"Paper" , "Scissor"]

    function handleChoice(choice){
        setPlayerchoice(choice)
        const randomchoice = Tools[Math.floor(Math.random() * Tools.length)]     
        setComputerChoice(randomchoice)
        determineWinner(choice, randomchoice)
    }


    

    const determineWinner = (player , computer) =>{
        if(player === computer){
            
            setResult("Draw !")
            setResultStyle("draw")
        }
        else if((player === 'Stone' && computer === 'scissor') || (player === 'Paper' && computer === 'Stone') || (player === 'Scissor' && computer === 'Paper' )){
            setResult("Player Wins !")
            setPlayerWins(PlayerWins + 1)
            setResultStyle("win")
        }
        else if((computer === 'stone' && player === 'scissor') || (computer === 'Paper' && player === 'Stone')||(computer === 'Scissor' && player === 'Paper')){
            setResult("Computer Wins !")
            setComputerScore(computerScore + 1)
            setResultStyle("lose")
        }
        
        setTotalMatches(Matches+1)
    }


    return(
        <div>
                
                <button className="button1" onClick={() => handleChoice("Stone")}>🗿 Stone</button>
                <button className = "button2" onClick={() => handleChoice("Paper")}>📃 Paper</button>
                <button className="button3" onClick={() => handleChoice("Scissor")}>✂ Scissor</button>

            <div className="container">

                <div className="para">
                    <p>Show player Choise : {playerChoice} </p>
                    <p>Show Computer Choice : {computerChoice} </p>
                    <p>Total Matches : {Matches} </p>
                    <p>Player Score : {PlayerWins } </p>
                    <p>Computer Score : {computerScore} </p>
                    <p id="result" className={resultStyle}>Result : {Result} </p>
                    <p></p>
                    
                </div>
                
                
            </div>
            
            
        </div>
    )
}

export default Game
