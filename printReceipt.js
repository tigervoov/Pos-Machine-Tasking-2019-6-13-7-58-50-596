const formatItemObject=require('./formatItemObject')
const barcodesArray=['0001', '0003', '0005', '0003']
function printReceipt(barcodesArray){
    var cartItems=formatItemObject(barcodesArray)
    var headerStr="Receipts\n"+"----------------------------------------------\n"
    var cartItemStr=''
    var totalStr=''
    if(cartItems=='Error'){
        return 'Error';
    }else{
        var totalPrice=null
        for(let cartItem of cartItems){
            cartItemStr+=cartItem.name+"                "+cartItem.price+"       "+cartItem.quantity+"\n"
            totalPrice+=parseInt(cartItem.price)*parseInt(cartItem.quantity)
        }
        cartItemStr+="----------------------------------------------\n"
        totalStr="Price:  "+totalPrice
    }
    console.log(headerStr+cartItemStr+totalStr)
    
}
printReceipt(barcodesArray)