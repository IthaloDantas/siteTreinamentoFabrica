var btnDecrementa = document.querySelectorAll('.btn-decrementa');

for(let botao of btnDecrementa){
    botao.addEventListener('click', decrementa);

function decrementa(){
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');

         if(input.value <= 0){
             input.value = 0;
        }else{
            input.value--;
            var preco = pegaPrecoItem(item);
            addTotal(-preco);
        }
    }
}
var btnIncrementas = document.querySelectorAll('.btn-incrementa');

for(let botao of btnIncrementas){
    botao.addEventListener('click', incrementa )

    function incrementa(){
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');
        input.value++;

        var preco = pegaPrecoItem(item);
        addTotal(preco);
    }

}

var btnDecrementa = document.querySelectorAll('.btn-decrementa');

for(let botao of btnDecrementa){
    botao.addEventListener('click', decrementa);

function decrementa(){
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');

         if(input.value <= 0){
             input.value = 0;
        }else{
            input.value--;
            var preco = pegaPrecoItem(item);
            addTotal(-preco);
        }
    }
}

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', (event) => {

    var contator = 0;

    var inputs = formPedido.querySelectorAll('input.quantidade');

    for(let input of inputs){
        if(input.value > 0){
            contador++;
        }
    }

    if(contador == 0){
        alert('Deve ter pelo menos 1 pizza no pedido. ');
        event.preventDefault();
    }
})

function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return (Number(precoItem.textContent))
}

function addTotal(preco){
    var Total = document.querySelector('#total');
    Total.textContent = preco + Number(Total.textContent);
}