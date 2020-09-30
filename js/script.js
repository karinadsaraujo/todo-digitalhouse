//criar uma função chamada criarTarefa e criar um alerta quando o usuario clicar na imagem + do footer

let btnAddTarefa = document.getElementById('img-add');
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector('#tarefas')
console.log('Projeto to-do')

function addAcaoDeFinalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

    for (let i = 0; i < listaDeBotoes.length; i++) {
        let botao  = listaDeBotoes[i]; 

        botao.addEventListener('click', function(){
            if(window.confirm("tem certeza?")){
                botao.parentElement.parentElement.remove()
            }
        })
    }
}


function criarTarefa(){
    //se o usuario tentar adicionar uma tarefa vazia, dar um alerta e nao pode deixar criar a tarefa vazia
    if(inputTarefa.value.trim() == ''){
        inputTarefa.style.border = '2px solid red'
        return alert('voce deve digitar uma tarefa primeiro')
    }

    //adicionando um novo card
    let tarefa = `
    <div class="col-md-4 mb-2">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${inputTarefa.value}
            </div>
            <div class="botao-tarefa">
                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
    </div>
    `
    divTarefas.innerHTML += tarefa

    alert('Tarefa Criada ' + inputTarefa.value);

    //apos adicionar uma tarefa, o input deve ficar vazio
    inputTarefa.value = ""

    addAcaoDeFinalizarTarefa()

}

btnAddTarefa.addEventListener('click', criarTarefa)
//adicionar a tarefa com a tecla enter
inputTarefa.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        criarTarefa();
    }
})




