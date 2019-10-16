function sum(a, b){
    return a + b;
}

function sayName(name){
    if(name !== typeof 'string'){
        return 'Name should be a string'
    }else if(!name){
        return 'Jacob'
    }else{
        return name;
    }
}

module.exports ={
    sum,
    sayName
}