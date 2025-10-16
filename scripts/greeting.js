function greetUser(){
    window.alert("Test for Clearlify extension.")
}




function renderGreeting(){
    try{
        window.onload(greetUser())
    }
    catch{
        console.error("Error: ", err)
    }
}