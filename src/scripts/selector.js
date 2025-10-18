// function to get word by hovering over it with a mouse
async function getByHover(){


    

    document.addEventListener("mouseup", async () => {
        
        // try to get the "hovered" text by using window selection
        try{
        const selectedText = window.getSelection().toString().trim();
        if(selectedText && selectedText.length >1){
            chrome.runtime.sendMessage
        }


        }
        // catch if an error occurs
        catch{
            console.error("Error: ", err);
        }    
    })
}