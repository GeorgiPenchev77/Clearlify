
// function to greet the user and let them know the extension is working
// by creating an alert in the 
function renderGreeting(){
  
    window.addEventListener("load", ()=> {
        try{
            alert("Clearlify extension is active!")
        }
        catch{
            console.error("Error: ", err)
        }
    })

}

renderGreeting()