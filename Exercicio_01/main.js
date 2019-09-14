function checaIdade(idade){
    return new Promise(function(res, rej){
        function exec(){ 
            if (idade >= 18) 
                res();
             else  
                rej(); 
        }
        setTimeout(exec, 2 * 1000);
    });
}

checaIdade(13)
    .then(function (){
        console.log('É maior de idade');
    })
    .catch(function(){
        console.log('É menor de idade');
    })

    