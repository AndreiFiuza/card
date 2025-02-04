'use strict'

const cidades = [
    {nome:'Jandira', cor: 'red', icon: 'cidade1.png'}, 
    {nome: 'Itapevi', cor: 'blue', icon: 'cidade2.png' }, 
    {nome: 'Osasco', cor: 'yellow', icon: 'cidade3.png'}, 
    {nome: 'Barueri', cor: 'pink', icon: 'cidade4.png'}
    
]

function criarMenu (cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icon/${cidade.icon}`



    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}

cidades.forEach(criarMenu)

