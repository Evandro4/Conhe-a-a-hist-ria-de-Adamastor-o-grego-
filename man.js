const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Adamastor se depara com sátiros bebados e sonolentos, são uma presa fácil para caçadores. Você os matará?",
        alternativas: [
            {
                texto: "Não, pois vim para um objetivo muito maior, além de não ter motivo.",
                afirmacao: "Adamastor, encontrando frágeis e sololentos sátiros, descide poupa-los a vida, e segue a diante"
            },
            {
                texto: "Sim, pois mostrarei que dos fracos aos mais fortes, todos estão nas minhas mãos." ,
                afirmacao: "Com grande orgulho, Adamastor surpreende um grupo bebado de sátiros inocentes, apenas para demonstrar sua força perante os leitores."
            }
            
           
        ]
    },
    {
        enunciado: "Saindo do vale dos sátiros, um adivinho qualquer diz que teve visões sobre você, e ele diz que você perecerá em breve. Oque você faz?",
        alternativas: [
            {
                texto: "Respeito as palavras do adivinho, mas digo que não acho verdade, mas tomarei mais cuidado. E saio o agradecendo ",
                afirmacao: "Até, que encontrou um adivinho que previa uma morte breve a Adamastor, este que não acredita muito em sua palavra, mas promete ter mais cuidado em suas aventuras."
            },
            {
                texto: "Digo à ele que oque diz são mentiras cobertas por inveja, e o mato, para mostrar que as pessoas devem ter cautela, ao interagirem com o grande Adamastor." ,
                afirmacao: "Até, que encontrou um adivinho que previa uma morte breve a Adamastor, este com o orgulho tão grande para aceitatar suas palavras, acaba matando o adivinho, como sinal de aviso para quaisquer pessoas que cruzassem o caminho de Adamastor."
            }
            
            
        ]
    },
    {
        enunciado: "No caminho, Adamastor encontra um estranho mercante, com aparencia semelhante a de um lagarto, ele oferece ao nosso herói uma jarra de vinho rosa e com aparencia apetitosa. Ele diz que se ele beber desse liquido, não poderá mais beber de liquido algum além desse, porem, o seu sabor é indiscritivelmente superior á todas as bebidas da terra. Oque você faz?",
        alternativas: [
            {
                texto: "Saia daqui larápio, sei que esse bebida há de me levar á perdição, não aceitarei esse vil líquido.",
                afirmacao: "No caminho, Adamastor encontra um estranho mercante, com aparencia semelhante a de um lagarto, ele oferece ao nosso herói uma jarra de vinho rosa e com aparencia apetitosa. Ele diz que se ele beber desse liquido, não poderá mais beber de liquido algum além desse, porem, o seu sabor é indiscritivelmente superior á todas as bebidas da terra. Adamastor percebe o golpe do mercante e o despença, nunca tomando desse vil líquido."
            },
            {
                texto: "Minha vida de grande herói é coberta de incertezas, posso morrer tanto amanhã como hoje, não consigo prever um momento de felicidade e descanço. Eu mereço essa taça, então passe para cá. " ,
                afirmacao: "No caminho, Adamastor encontra um estranho mercante, com aparencia semelhante a de um lagarto, ele oferece ao nosso herói uma jarra de vinho rosa e com aparencia apetitosa. Ele diz que se ele beber desse liquido, não poderá mais beber de liquido algum além desse, porem, o seu sabor é indiscritivelmente superior á todas as bebidas da terra. Adamastor, levado pelo pessimismo e pensar que com tantas aventuras sua vida seria realmente breve, descide tomar a bebida, e assim, não podendo mais tomar qualquer outra bebida além daquela."
            }
              
             
         ]
     },
     {
        enunciado: "Finalmente você chega à seu destino, o terrível dragão de Cóssios. Apesar de seu tamanho, o dragão não esconde uma grande passagem, que passa de sua caverna até o castelo do rei. O que você faz?",
        alternativas: [
            {
                texto: "Enfrento bravamente o grande dragão de Cóssios, como fui chamado para fazer. E depois de vence-lo, vou para o castelo confirmar-le a morte do dragão", 
                afirmacao: "Até que enfim, Adamastor chega á caverda do temivel dragão de Cóssios, monstro que foi bravamente abatido pelo grande Adamastor, que é recebido com alegrias e festas quando chega ao castelo do rei, este que o nomeia como sussesor de seu reino, já que estava admirado e não tinha filhos."
            },
            {
                texto: "Desvio hábilmente do dragão, até que enfim, consigo sair pela saida aparente e vou para o castelo, e conto ao rei que o dragão acabou fugindo por conta própria, e solicito uma estadia de 2 noites no castelo real." ,
                afirmacao: "Até que enfim, Adamastor chega á caverda do temivel dragão de Cóssios, porém, covardemente Adamastor segue por uma brecha da caverna, e segue ao castelo do rei, deixando o dragão ileso. Chegando lá, Adamastor mente dizendo que o monstro fugiu, e Adamastor ainda pediu para passar duas noites no castelo real. Persebendo sua mentira infame, o rei manda matar Adamastor, e esse é o infeliz fim de nosso herói."
            }
         ]
            
             
             
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraPergunta(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaAlternativas = document.createElement("button")
        botaAlternativas.textContent = alternativa.texto;
        botaAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "E assim se seguiu, a grende aventura de Adamastor:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();