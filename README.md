># Resumo
>Apenas fazendo (pelo menos tentando fazer) alguns Coding Challenge do The Coding Train.
>
>Meu principal objetivo aqui é fazer um diário mostrando as dificuldades e aprendizados que eu vou tendo em cada desafio utilizando o p5.js.
>Todos os desafios aqui são do canal do youtube [The Code Train](https://www.youtube.com/c/TheCodingTrain) - os códigos finais também em sua maioria serão os feito pelo **Daniel Shiffman**, caso haja algo de minha autoria será relatado em cada um separadamente.
>
>
>## Diário
>001. Starfield:
>
>  O máximo que eu consegui fazer nesse desafio foi aparecer os pontos na tela, o resto eu não fazia ideia em como colocar em código e nem pensei na utilização do eixo z. 
>
>  Com esse primeiro desafio eu descobri como utilizar melhor o poo (programação orientada a objetos) no p5.js. Minhas maiores dificuldades era com a utilização de classes no javascript do que com código.
>
>
>002. Fractal:
>
>  Esse aqui foi difícil. Primeiramente eu quis fazer como o Shiffman fez em 3d mas estava absurdamente difícil, eu nem entendia exatamente algumas coisas que ele estava fazendo. 
>
>  Para não falhar e ir procurar outro desafio eu tentei fazer em 2d pois seria mais simples dividir os blocos. Após uma leve dificuldade - tentando pensar na fórmula para os blocos ficarem adjacentes - saiu exatamente o que eu queria. Meu navegador não suportou mais de 5 cliques, gostaria de ver como ficaria com uns 7 ou mais.
>
>
>003. Snake Game
>
>  Esse eu achei que seria bem divertido e simples e no final não foi tão simples quanto eu esperava. A parte de criar o bloco e fazer pontos era a parte simples, o problema foi para fazer a cobra aumentar de tamanho. Segui a ideia e não o código do Shiffman no início e consegui aumentar a cobra, o problema é que ela aumentava completamente e virava um único bloco gigante e a velocidade estava escalonando pelo tamanho da cobra.
>  Depois de muito bater cabeça eu percebi que já estava fazendo isso a mais tempo do que deveria. a parte de criação de uma nova parte do corpo da cobra foi difícil fazer funcionar acabei copiando o código do Shiffman tanto do crescimento como da parte de morrer ao tocar no próprio corpo. Ainda falta um polimento nas funcionalidades mas não é necessário ir tão longe também, o objetivo é tentar fazer em uma tarde/noite cada um desses desafios.
>  Achei mais difícil do que eu esperava e tive boas ideias nesse desafio, uma boa parte eu consegui fazer por conta própria.
>
>
>004. Purple Rain
>
>  Hoje foi simples, apenas uma chuva, só que roxa. Nem vi o código do Shiffman, olhei só o final do vídeo para ter uma ideia. Ele fez com a geração sendo em um campo 3d tendo eixo z e dando sensação de profundidade, até pensei em fazer isso mas acabou que eu só implementei uma opacidade diferente para cada uma gota, o que também gera uma sensação de profundidade.
> Sem muito o que falar, por hoje terminei cedo, ainda são 16h e não 23h como nos outros dias.
>
>
>005. Space Invaders
>
>  Estou gostando bastante do resultado não sei nem como está o código do Shiffman, mais uma vez fiz tudo de cabeça do meio jeito. Não tive muita dificuldade em nenhuma parte, as coisas que mais me travaram eram variáveis sendo utilizadas em momentos errados. O único bug que eu não consegui resolver é que o jogo quebrava quando acertava o invader mais a esquerda, possivelmente algum problema com o tamanho da array, porém, não tive sucesso ao tentar resolver, necessitando usar gambiarra. O que fiz foi simplesmente teleportar os blocos para uma área não visível quando acertados e zerar a velocidade X deles, fazendo com que eles não pudessem ser vistos/acertados. O objetivo principal é terminar o desafio em um dia.
>  Bem, mais um dia concluído amanhã é sábado, provavelmente só voltarei segunda. Ainda tenho 1 semana até o início do período da faculdade, espero conseguir seguir a semana que vem com os 5 desafios feitos/concluídos.
>
>
>006. Mitosis Simulation
>
> Hoje foi simples também, algo rápido para terminar o dia. Mais uma vez vi apenas o vídeo final e criei o meu. Na proposta do Shiffman ele duplicava as células com o clique em cima da célula desejada. Eu achei mais interessante ver elas se multiplicando com o passar do tempo e fiz uma função de clique que divide todas instantaneamente. Por hoje foi, sigo nos desafios.
>
>
>007. Solar System 2D
>
> Hoje foi complicado, para falar a verdade eu iniciei essa ontem mas não consegui terminar. Para a criação dos planetas foi tranquilo, mas eu não consegui por hipótese nenhuma fazer eles orbitarem os planetas. O problema principal é que eu não fazia ideia do que precisaria para fazer um planeta orbitar outro. Assisti um pouco do vídeo do Shiffman e fui tentando por conta própria e consegui fazer a parte da órbita, porém, eu não esperava pela pior parte. Não sei o motivo, mas, eu não conseguia fazer as luas orbitarem os planetas, só não ia, apenas isso. Tentei n formas e não consegui. Depois de quase desistir e só deixar os planetas orbitando a estrela, eu resolvi trocar a forma como o código estava escrito, e magicamente tudo funcionou. Não sei exatamente o porquê não estava criando da forma que eu queria, acredito que o problema tenha sido a recursividade. Acho que não estava desenvolvendo corretamente a programação orientada a objetos no javaScript, mas agora parece que eu aprendi a forma correta de implementar. 
>Enfim, por hoje terminei, não farei o desafio 008 pois é a mesma coisa desse só que em 3D e eu estou fugindo de coisas em 3D.
>
>
>008. Maze Generator
>
> A partir desse ponto o número do desafio não será o mesmo do vídeo do shiffman, pois ele fez vários de sistema solar 3D que como eu disse anteriormente não é algo que eu me interesse então eu apenas pulei.
> Sobre o desafio de hoje eu fui incapaz de entender como faria algo semelhante então apenas assisti ao desafio como uma aula e reproduzi o mesmo comentando algumas partes com o que eu entendi da explicação.
> Foi utilizado o modelo de **Depth-first search** e **Recursive Backtracker** para gerar o labirinto. Foi algo bastante satisfatório de se fazer e acredito que isso me ajude muito em problemas futuros a serem resolvidos. O modélo de **Recursive Backtracker** utiliza pilha para poder armazenar as células já visitadas em ordem e sempre retorna para a anterior caso não tenha célula próxima para ir.
> Achei bastante interessante e no meu do caminho apenas pela explicação já dava para ter uma ideia do que precisava ser feito.
>**Obs.: não colocar nomes de funções do processing como nomes de variáveis/funções, perdi muito tempo tentando resolver esse problema bobo**
