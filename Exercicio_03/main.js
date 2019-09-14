var ulElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
 
function createElement(text){
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(text);

    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);
}
function render(repos){
    ulElement.innerHTML = '';
    for (repo of repos) {  
        createElement(repo.name);
    }
} 
function loading(){
    ulElement.innerHTML = '';
    createElement('Carregando....');
}
buttonElement.onclick = function(){ 
    loading();

    var texto = inputElement.value; 
    axios.get(' https://api.github.com/users/' + texto + '/repos')
        .then(function (response){
            render(response.data);
        }) 
        .catch(function (error){
            ulElement.innerHTML = '';
            alert('Usuário não existe');
        });
}
