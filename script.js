function iniciar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
        
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('Algo de errado não está certo! Verifique os dados e tente novamente.')
            }else if(i <= f){
            res.innerHTML = ''
            
        for(let x = i; x <= f; x = x + p){
            res.innerHTML += `${x};`
        }
    }else{
    res.innerHTML = ''
    
        for(let x = i; x >= f; x = x - p){
            res.innerHTML += `${x};`
        }
    }res.innerHTML += 'FIM!'
}
