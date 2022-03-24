const getItemFromStorage = () =>{
    const getItem = localStorage.getItem("carts");
    let cartGuns = [];
    if(getItem){
        cartGuns = JSON.parse(getItem)
    }
    return cartGuns;
}

export { getItemFromStorage as storageItem };

