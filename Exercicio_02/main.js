var ulElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
 
function render(repos){
    ulElement.innerHTML = '';
    
    for (repo of repos) { 
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }
} 
buttonElement.onclick = function(){ 
    var texto = inputElement.value; 
    axios.get(' https://api.github.com/users/' + texto + '/repos')
        .then(function (response){
            render(response.data);
        })
        .catch(function (error){
            console.error(error);
        });
}