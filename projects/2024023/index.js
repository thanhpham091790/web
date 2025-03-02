

document.addEventListener("click", (event)=>{
    if(event.target.id === "triggerBtn"){
        getData();
    }
});

const getData = function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response=>{
        if(!response.ok)
            throw new Error("Response is not ok.");
        return response.json();
    })
    .then(data=>{
        document.querySelector("#random-activity").textContent = data.activity;
    })
    .catch(error=>{
        console.error("Error: ", error);
    });
}

