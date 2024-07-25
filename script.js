const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            {
                texto: "Infiltração da água da chuva no solo.",
                afirmações: "Não sei.",
                
            },
            {
                texto:  " Caça de diversos animais silvestres.",
                afirmações: "Não sei.",
               
            }
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        alternativas: [
            {
                texto: "sustentabilidade.",
                afirmações: "Não sei.",
                
            },
            {
                texto: "meio natural."
            
            }
        ]
    },
    {
        enunciado: "Como é corretamente denominado o sistema ambiental caracterizado pelo conjunto de relações estabelecidas entre uma comunidade e o meio ambiente?",
        alternativas: [
            {
                texto: "Ecossistema.",
                afirmações: "Não sei.",
                
            },
            {
                texto: "Natureza.",
                afirmações: "Não sei.",
                
            }
        ]
    },
    {
        enunciado: "Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?",
        alternativas: [
            {
                texto: "Reserva sustentável.",
                afirmações: "Não sei.",
                
            },
            {
                texto: "Preservação Ambiental.",
                afirmações: "Não sei.",
                
            }
        ]
    },
    {
        enunciado:  "Segundo a Organização das Nações Unidas (ONU), o ___________ é definido como o conjunto de elementos e processos biológicos, químicos e físicos que orientam e criam as condições necessárias para a manutenção da vida no planeta Terra.",
        alternativas: [
            {
                texto: "ecossistema.",
                afirmação: "Não sei.",

            },
            {
                texto: "meio ambiente."
            
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Por um Ecosistema Melhor";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=  " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado Pela Realização!!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();