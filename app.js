function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = ` <div class="cartao__conteudo">
                    <h3>Alien</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que são aliens??</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                       <p>Somos nozes</p>
                    </div>
                </div>
                `
}