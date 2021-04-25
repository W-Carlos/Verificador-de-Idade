function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//Vai pegar o ano com 4 digitos.
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')//ou document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value.length > ano){
        /*vai transformar o conteudo da variavel em numero, e verificar se esse valor é menor que zero ou maior que o ano atual*/
        //validação de dado
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // cria um elemento html.
        img.setAttribute('id', 'foto')// Cria um id='foto'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}