const renderItems = (data) => {
    for (let dataItem of data){
        console.log(dataItem)
    }
}

fetch(`db/partners.json`)
    .then((res) => res.json())
    .then((data) => renderItems(data))