function colculateItemQuantity(barcodesArray){
    var objItem={}
    for(let item of barcodesArray){
        objItem[item]=(objItem[item])+1||1
    }
    return objItem
}
module.exports = colculateItemQuantity;
