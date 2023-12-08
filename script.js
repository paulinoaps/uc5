document.addEventListener("DOMContentLoaded", function() {
        const meuVideo = document.getElementById('meuVideo');
      
        meuVideo.autoplay = true;
        meuVideo.loop = true;
        meuVideo.controls = false;
        meuVideo.playbackRate = 0.65;
        meuVideo.muted = true; // Garante que o áudio não será reproduzido, já que os controles foram removidos
      
        // Adiciona um evento para reiniciar o vídeo quando terminar
        meuVideo.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
        });
      
        // Adiciona um evento para alternar o estado de mudo ao clicar no vídeo
        meuVideo.addEventListener('click', function() {
          this.muted = !this.muted;
        });
      });
      

document.addEventListener('DOMContentLoaded', function () {
    const openBtnPP = document.getElementById('btnProdutoPP');
    const openBtnP = document.getElementById('btnProdutoP');
    const openBtnM = document.getElementById('btnProdutoM');
    const openBtnG = document.getElementById('btnProdutoG');
    const openBtn = document.getElementById('boxhidden');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', function () {
      popup.style.display = 'block';
    });

    openBtnPP.addEventListener('click', function () {
      popup.style.display = 'block';
    });

    openBtnP.addEventListener('click', function () {
      popup.style.display = 'block';
    });
    openBtnM.addEventListener('click', function () {
      popup.style.display = 'block';
    });
    openBtnG.addEventListener('click', function () {
      popup.style.display = 'block';
    });
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }); 