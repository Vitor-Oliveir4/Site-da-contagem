function iniciar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('Algo de errado não está certo! Verifique os dados e tente novamente.')
    }else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for(let x = i; x <= f; x = x + p){
            res.innerHTML += `${x};  `
        }    res.innerHTML += `FIM!`
      }else{
        for(let x = i; x >= f; x = x-p){
            res.innerHTML += `${x};  `
        }    res.innerHTML += `FIM!`
    }
    }
    
}
