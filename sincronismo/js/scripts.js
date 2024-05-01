function onPageLoad(){

    fetch("https://randomuser.me/api/?results=50")
    .then(function response(data){

        const promlsData = data.json()
        console.log(promlsData)

        promlsData.then(response =>{
        insertUsers(response.results)
        })
   })

        loadComponents()

}

function insertUsers(data){
    console.log(data)
}

function loadComponents(){
    console.log("loadComponents")

}

