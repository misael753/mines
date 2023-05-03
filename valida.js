const usuarios = [
    {
        login: 'victor',
        pass: 'victor'
    },
    {
        login: 'julio',
        pass: 'julio'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]


let botao = document.getElementById('btnlogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validalogin =false


    for(let i in usuarios){

        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validalogin = true
            location.href = "index.html"
            break  
        }


    }

    if(validalogin == true){
    }else{
        alert('erro')
    }
})

