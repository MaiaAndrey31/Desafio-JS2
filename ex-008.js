function cauculateDiscount(name, value, firstPurchase, cashPay){

    let discount = 0

        if (firstPurchase && cashPay) {

            if (value >1000) { 
                discount = value * 0.30
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            

            else if (value <500){
                discount = value * 0.20
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else{
                discount = value * 0.25
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
    }

        if (firstPurchase && !cashPay) {
            
            if (value >1000){
                discount = value * 0.20
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else if (value <500){
                discount = value * 0.10
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else{
                discount = value * 0.15
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
    } 

        if (!firstPurchase && cashPay) {
            
            if (value >1000){
                discount = value * 0.20
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else if (value <500){
                discount = value * 0.10
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else{
                discount = value * 0.15
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
    }
        if (!firstPurchase && !cashPay) {
            if (value >1000){
                discount = value * 0.10
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
            else if (value <500){
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: Sem desconto nesta compra`)
                console.log (` Valor Total: ${value}`)
                
                console.log(`Você ganhou um desconto na proxima compra de ${Math.floor (Math.random()*(20 - 10) +10)}%`)
                
            }
            else{
                discount = value * 0.05
                console.log (` Comprador: ${name}`) 
                console.log (` Valor sem desconto: ${value}`)
                console.log (` valor do desconto: ${discount}`)
                console.log (` Valor Total: ${value - discount}`)
            }
    }

}

cauculateDiscount( "José" , 2000, false, true)