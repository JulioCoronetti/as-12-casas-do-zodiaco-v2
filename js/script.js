function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const descricao = document.getElementById('desc')
    var d = document.getElementById('valor').value
    var [ano, mes, dia] = d.split('-').map(Number)
    const audio = new Audio("/audio/o_neyma.mp3")
    
    if((ano == 1992) && (mes == 2) && (dia == 5)) {
        texto.innerHTML = "NEYMAR ✋😜🤚";
        imagem.setAttribute("src","img/neymar.jpg");
        imagem.setAttribute("width","300px");
        audio.play()
    }
    //gemeos
    else if((dia >= 21 && mes == 5) && (dia <= 31 && mes <= 5) ||(dia>=1 && mes == 6) && (dia <= 20 && mes == 6)){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";

    //escorpiao
    } else if((dia >= 23 && mes == 10) && (dia <= 31 && mes <= 10) ||(dia>=1 && mes == 11) && (dia <= 21 && mes == 11)){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "A Casa de Escorpião é a oitava das Doze Casas do Zodíaco de Ouro, o coração do Santuário e uma fortaleza de proteção em torno do Palácio do Grande Mestre e do Templo de Atena. "
    
    //peixes
    } else if((dia >= 19 && mes == 2) && (dia <= 31 && mes <= 2) ||(dia>=1 && mes == 3) && (dia <= 20 && mes == 3)){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas."

    //aries
    }  else if((dia >= 21 && mes == 3) && (dia <= 31 && mes <= 3) ||(dia>=1 && mes == 4) && (dia <= 20 && mes == 4)){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco."

    //touro
    }  else if((dia >= 21 && mes == 4) && (dia <= 31 && mes <= 4) ||(dia>=1 && mes == 5) && (dia <= 20 && mes == 5)){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Fazendo jus à sua constelação, Aldebaran de Touro é o maior dos Cavaleiros de Ouro de Atena, um verdadeiro tanque. No entanto, sua velocidade não deve ser subestimada por isso, afinal ele tem um dos golpes mais velozes de Cavaleiros do Zodíaco, o Grande Chifre"

    //libra
    }  else if((dia >= 23 && mes == 9) && (dia <= 31 && mes <= 9) ||(dia >= 1 && mes == 10) && (dia <= 22 && mes == 10)){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades."

    //cancer
    }  else if((dia >= 21 && mes == 6) && (dia <= 31 && mes <= 6) ||(dia>=1 && mes == 7) && (dia <= 22 && mes == 7)){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "O verdadeiro nome do Cavaleiro de Câncer até hoje não foi revelado, sendo somente chamado de Máscara da Morte (Deathmask no original)."

    //leao
    }  else if((dia >= 23 && mes == 7) && (dia <= 31 && mes <= 7) ||(dia>=1 && mes == 8) && (dia <= 22 && mes == 8)){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "o Cavaleiro de Leão é Regulus, companheiro de treinamento de Yato de Unicórnio. Ele é o mais jovem dos 12 Cavaleiros de Ouro e é considerado um prodígio, tendo muito poder e compreensão do Cosmo, aprendendo e entendendo golpes rapidamente."

    //virgem
    }  else if((dia >= 23 && mes == 8) && (dia <= 31 && mes <= 8) ||(dia>=1 && mes == 9) && (dia <= 22 && mes == 9)){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências."

    //aquario
    }  else if((dia >= 21 && mes == 1) && (dia <= 31 && mes <= 1) ||(dia>=1 && mes == 2) && (dia <= 18 && mes == 2)){
        texto.innerHTML = "Áquario";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade."

    //sagitario
    }  else if((dia >= 22 && mes == 11) && (dia <= 31 && mes <= 11) ||(dia>=1 && mes == 12) && (dia <= 21 && mes == 12)){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação."

    //capricornio
    }  else if((dia >= 22 && mes == 12) && (dia <= 31 && mes <= 12) ||(dia>=1 && mes == 1) && (dia <= 20 && mes == 1)){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito."

    } else{
        texto.innerHTML = "O cavaleiro não foi encontrado 😥👍";
        imagem.setAttribute("src","img/o_meu_momento.png");
        imagem.setAttribute("width","250px");
    }
}