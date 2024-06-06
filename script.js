const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você sai, prefere se inturmar com pessoas que ainda não conhece ou prefere nao conversar com ninguem ?",
        alternativas: [
            "a)Me inturmar com pessoas novas",
            "b)Prefiro não me inturmar"
        ]
    },
    {
        enunciado: "No futuro você pretende focar mais em seu trabalho/carreira profissional ou sua vida pessoal/familia ?",
        alternativas: [
            "a)Carreira profissonal",
            "b)Vida pessoal"
        ]
    },
    {
        enunciado: "Se você pretender sair de casa prefere ir em uma área urbana/cidades ou área rural/sítio  ?",
        alternativas: [
            "a)Prefiro área urbana/cidades",
            "b)Prefiro área rural/sítio"
        ]
    },
    {
        enunciado: "Você imagina que meu estilo de vida futuro será mais voltado para viagens e aventuras ou mais centrado em estabilidade e rotina?",
        alternativas: [
            "a)Viagens e aventuras",
            "b)Estabilidade e rotina"
        ]
    },
    {
        enunciado: "Você acha que no futuro economizará dinheiro para investimentos futuros ou irá aproveitar o presente e gastar em experiências imediatas?",
        alternativas: [
            "a)Economizar dinheiro para investimentos futuros",
            "b)Aproveitar o presente e gastar em experiências imediatas"
        ]
    },
    {
        enunciado: "Você acredita que no futuro irá preferir ter um trabalho estável e seguro, ou buscar constantemente novos desafios ?",
        alternativas: [
            "a)Trabalho estável e seguro",
            "b)Buscar por novos desafios"
        ]
    },
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta() {
    if (atual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostasSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPergunta();