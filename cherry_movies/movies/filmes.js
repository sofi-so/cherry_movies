const FILME = [
    {
        id:1,
        nome:"Coraline",
        nota:5,
        img:"https://preview.redd.it/ssqo1sjkg8u91.jpg?width=640&crop=smart&auto=webp&s=e23e426ebdd8c80bcad76cc4d58d94d389b362e9" ,
        sinopse:"Coraline descobre uma porta para um mundo alternativo onde tudo parece perfeito, pais afetuosos e desejos realizados. Porém todos têm botões nos olhos, e logo percebe que essa realidade paralela esconde intenções sombrias para mantê-la presa."
    },

    {
        id:2,
        nome:"Carros 2",
        nota:5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbgpVFPDFc_HZN5YKGT7xxzEvOSzknkF17pg2jba8YLOKFEQQXGtxclYCdYfwg6X85lk&usqp=CAU",
        sinopse:"O astro das corridas, Relâmpago McQueen, e o carro-guincho, Mate, viajam para disputar o primeiro Grand Prix Mundial, que irá revelar o carro mais veloz do planeta. Nessa jornada imperdível, Mate se envolve com um grupo de espionagem e vive grandes aventuras com seus amigos."
    },

    {
        id:3,
        nome:"Homem Aranha - sem volta para casa",
        nota:4.5,
        img:"https://br.web.img3.acsta.net/c_310_420/pictures/22/08/23/09/37/1541299.jpg",
        sinopse:"Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando o feitiço para reverter o evento não sai como esperado, o Homem-Aranha e o seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso."
    },

    {
        id:4,
        nome:"Como perder um homem em 10 dias",
        nota:5,
        img:"https://cultura.uol.com.br/webstories/2023/08/as-melhores-comedias-romanticas-para-assistir/assets/4.jpeg",
        sinopse:"Ben é um publicitário que aposta com o chefe que faz qualquer mulher se apaixonar por ele em dez dias. Se conseguir, será o responsável por uma cobiçada campanha de diamantes. Andie é uma jornalista que, por causa de uma matéria, está decidida a infernizar a vida de qualquer homem que se aproximar. Os dois se conhecem em um bar e escolhem um ao outro como alvo de seus planos totalmente opostos."
    },

    {
        id:5,
        nome:"Diário de uma princessa",
        nota:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMsspHKt8XYaTjXo-y-PiZnTm1zjVoigG6A&s",
        sinopse:"Mia é uma garota de 15 anos que vive com sua mãe em São Francisco. De repente, ela descobre que seu pai é o Príncipe de Genóvia, um pequeno país europeu. Ela recebe a visita de sua avó recém-descoberta, que passa a lhe dar aulas de etiqueta, ensinando-a como uma princesa deve se portar. Mas quando se aproxima a data de seu aniversário, Mia precisa definir que caminho pretende tomar em sua vida: tornar-se uma princesa e se mudar para Genóvia ou permanecer morando com a mãe."
    },

    {
        id:6,
        nome:"Enrolados",
        nota:5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw88JvtbpZ7WKlrF6XDAAtKSi-Akrnqww60A&s",
        sinopse:"O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante."
    },

    {
        id:7,
        nome:"Gente Grande 2",
        nota:4.5,
        img:"https://vejasp.abril.com.br/wp-content/uploads/2016/12/21004903_20130510170049514.jpeg?quality=70&strip=info&w=418&w=636",
        sinopse:"Lenny Feder e a família se mudam para a própria cidade natal com o objetivo ficarem perto dos amigos, mas acabam tendo que enfrentar alguns fantasmas do passado, como a covardia diante de valentões e o famigerado bullying na escola."
    },

    {
        id: 8,
        nome: "Moana",
        nota: 5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoN6G935Jm1A5Ullu16U-5KvxvtP9qHCME7g&s",
        sinopse:"Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível."
    },

    {
        id: 9,
        nome: "Miraculos - O filme",
        nota: 5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqu7jq7MU1fI3JQ_Krx2BzuUxSl0ruiEvYrw&s",
        sinopse:"Ladybug une forças com Cat Noir, o vigilante mascarado, para derrotar uma equipe de vilões que ameaçam destruir Paris. O que a garota não sabe é que, por trás da máscara de seu companheiro, se esconde um pessoa que ela conhece muito bem."
    },

    {
        id: 10,
        nome: "Batman lego - O filme",
        nota:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxeE_OFij040WOM3Q9wXKHR06HxyagsI3hQ&s",
        sinopse:"Batman descobre que acidentalmente adotou um garoto órfão, que se torna ninguém menos que Robin. A dupla formada pelo arrogante Homem-Morcego e o empolgado ajudante deve combater o crime e prender o Coringa."
    },

    {
        id: 11,
        nome:"The last Naruto - O filme",
        nota:5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_ee6hVq1Dgaly53pb9YvK2-MXHkglqBW6Q&s",
        sinopse:"Este filme mostra a Terra enfrentando o risco de colisão com a Lua, enquanto Hanabi é sequestrada. Naruto, Shikamaru, Hinata, Sakura e Sai precisam salvar Hanabi e resolver a situação"
    },

    {
        id: 12,
        nome:"O rei leão",
        nota:4.5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHvV5adT3Sam4vl8145s6iLBtJCDAxi6dg&s",
        sinopse:"Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar."
    },

    {
        id:13,
        nome:"Harry Potter e a Pedra Filosofal",
        nota: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiF0QU4oFJMgymPfi5bNVKBThxVwzRX1Nbg&s',
        sinopse:"Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."
    },

    {
        id: 14,
        nome: "Hotel Transilvânia ",
        nota: 5,
        img:'https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_FMjpg_UX1000_.jpg',
        sinopse:"O Hotel Transilvânia é um resort cinco estrelas que serve de refúgio para que os monstros possam descansar do árduo trabalho de perseguir e assustar os humanos. O local é comandado pelo Conde Drácula, que resolve convidar os amigos para comemorar, ao longo de um fim de semana, o 118º aniversário de sua filha Mavis. Ele só não espera a chegada de um humano sem noção chamado Jonathan, que aparece no local justo quando o hotel está repleto de convidados e, ainda por cima, se apaixona por Mavis."
    },

    {
        id: 15,
        nome: "Your name",
        nota: 5,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMhqx51V0Z3X6ERd-GfXvImdUDEraMdqhiQ&s',
        sinopse:"Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos."
    }
]
 export default FILME;