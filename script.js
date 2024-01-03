window.onload = () => {

    let imgBanner = document.querySelector(".banner .blocoBanner .imgBanner");
    let contador = 1;
    let time = 5000;
    let inversao = -1;

    let imagens = new Array();
    imagens.push("img/carrosBanner/benira-enquadramento-capa-9-removebg-preview.png");
    imagens.push("img/carrosBanner/hyundai.png");
    imagens.push("img/carrosBanner/destaque-v1.png");
    
    function mudar(){
        imgBanner.classList.add("esconder");
        setTimeout(()=>{
            imgBanner.src = imagens[contador];
            imgBanner.classList.remove("esconder");
            contador++;
            if(contador > (imagens.length -1)) contador = 0;
            setTimeout(mudar,time);
        },1000);
    }
    setTimeout(mudar,time);
}