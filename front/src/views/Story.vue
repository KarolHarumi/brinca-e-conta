<template>
  <div class="story">
    <div class="nav">
      <h1>Era uma vez um Safari: </h1>
      <md-button class="md-raised md-primary" @click="addComicBubbles()">Iniciar História</md-button>
      <md-button class="md-raised md-primary" @click="destroy()">Finalizar</md-button>
    </div>
  
    <div class="image">
      <img id="kids-safari" src="../assets/bg_story.jpg" width="100%">
    </div>
  </div>
</template>

<script>

export default {
  methods: {

    addComicBubbles() {
      window.CharactersBubbles = new window.ComicBubbles("kids-safari", {canvas: {readonly: false}}, {bubble: [
        {id: 'b1', text: "Diálogo 1...", x: 884.8, y: 223.73, width: 194, height: 69, fontSize: '30px', background: '#fff', color: '#000', bubbleStyle: 'speak', tailLocation: 'e', tailX: 1920.72, tailY: 506.06, visible: false},
        {id: 'b2', text: "Fala do Narrador...", className: 'lion', lineHeight: 1, x: 2500, y: 50, width: 'auto', height: 'auto', fontSize: '30px', background: '#6b8e23', color: '#ffffff', bubbleStyle: 'none', tailLocation: 's', tailX: 533, tailY: 177, visible: false}
      ]});

      window.CharactersBubbles.onCanvasLoad(function(){
        var Bubble1 = this.getBubbleById('b1'); 
        var Bubble2 = this.getBubbleById('b2');
        
        //bubbles appear and disappear with callback functions
          Bubble1.setClassName('lioness').delay(1000).setWidth('auto').setHeight('auto').pumpUp(function(){
            Bubble2.delay(1000).fadeIn(function(){
              Bubble1.delay(2000).fadeOut();

              //'this' refers to Bubble2
              this.delay(2000).fadeOut(function(){ 
                Bubble1.delay(1000).setText("Diálogo 2\n...").pumpUp(function(){
                  Bubble2.delay(1000).fadeIn(function(){
                    Bubble1.delay(2000).fadeOut();
                    
                    this.delay(2000).fadeOut(function(){
                      Bubble1.delay(1000).setFontSize(25).setText("Diálogo 3...").fadeIn(function(){
                        Bubble2.delay(1000).setText("CRAC!").setFontWeight('bold').setX(483).setY(54).setTailX(531).setTailY(178).setBackground('#ff0000').pumpUp(100,function(){								
                          Bubble2.delay(2000).fadeOut(function(){
                            this.remove();
                            Bubble1.moveTo(2554,837,'fast').setText("Diálogo 4...");
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
      });
    },

    destroy(){
      window.DestroyComicBubbles(window.CharactersBubbles);
    },

  }

}
</script>

<style scoped>
  .story {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #fff;
  }

  .story .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  
  }

  h1 {
    line-height: 1.3;
    margin: 0;
    font-family: 'Grandstander', cursive;
    font-weight: 900;
    font-size: 31px;

  }
</style>