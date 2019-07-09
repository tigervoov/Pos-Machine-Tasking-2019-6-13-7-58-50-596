const colculateItemQuantity=require('./colculateItemQuantity')
const database=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]
const barcodesArray=['0001', '0003', '0005', '0003']
function formatItemObject(barcodesArray){
    var itemQuantity=colculateItemQuantity(barcodesArray)
    var cartItem=[]
    if(itemQuantity!=null){
        for(let item of Object.keys(itemQuantity)){
            for(let dbItem of database)
            if(dbItem.id==item)
            {
                let objItem={id:'',name:'',price:'',quantity:''}
                objItem.id=dbItem.id;
                objItem.name=dbItem.name;
                objItem.price=dbItem.price;
                objItem.quantity=itemQuantity[item]
                cartItem.push(objItem) 
            }
        }
    }else{
        return 'Error'
    }
    
    return cartItem;
}
//formatItemObject(barcodesArray)
module.exports=formatItemObject;