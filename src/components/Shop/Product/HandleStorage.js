import { storageItem } from "../../Storage/Storage";

const handleStorage = (id) =>{
    const items = storageItem();
    const isHas = items.filter(item => item.id === id)
    if(isHas.length !== 0){
        isHas[0].quantity = isHas[0].quantity + 1;
    }else{
        items.push({id, quantity: 1})
    }
    localStorage.setItem("carts", JSON.stringify(items))
};

export { handleStorage };

