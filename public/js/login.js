function logar(){
    var nomes = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value

console.log(JSON.stringify({
    nomes,
    senha
}));

    fetch("http://localhost:3000/login",{
        method:'POST',
        body: JSON.stringify({
            nomes,
            senha
        }) , 
        headers: { "Content-Type" : "application/json" }
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            location.href = '/acesso-restrito/acesso.html'
        }else {
            alert('nome e senha invalidos!!')
        }
        
    });

}
