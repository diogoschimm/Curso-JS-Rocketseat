function checaIdade(idade){
    return new Promise(function(resolve, reject){
        function exec(){ 
            if (idade >= 18) 
                resolve();
             else  
                reject(); 
        }
        setTimeout(exec, 2 * 1000);
    });
}

checaIdade(25)
    .then(function (){
        console.log('É maior de idade');
    })
    .catch(function(){
        console.log('É menor de idade');
    })

    