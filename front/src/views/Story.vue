<template>
  <div class="story">
    <div class="nav">
      <h1>Era uma vez um Safari</h1>
      <div>
        <md-button class="md-raised md-primary" @click="addComicBubbles()"
          >Iniciar História</md-button
        >
        <md-button class="md-raised md-primary" @click="destroy()"
          >Finalizar</md-button
        >
      </div>
    </div>

    <div id="kids-safari" class="image">
      <!--<img id="kids-safari" src="../assets/bg_story.jpg" width="100%">-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addComicBubbles() {
      window.CharactersBubbles = new window.ComicBubbles(
        "kids-safari",
        { canvas: { readonly: false } },
        {
          bubble: [
            {
              id: "b1",
              text: `Olá ${localStorage.getItem("name")}!`,
              x: 150,
              y: 20,
              width: 194,
              height: 69,
              fontSize: "20px",
              background: "#fff",
              color: "#000",
              bubbleStyle: "speak",
              tailLocation: "e",
              tailX: 200,
              tailY: 56.06,
              visible: false,
            },
            {
              id: "b2",
              text: "Fala do Narrador...",
              className: "lion",
              lineHeight: 1,
              x: 30,
              y: 200,
              width: "auto",
              height: "auto",
              fontSize: "20px",
              background: "#6b8e23",
              color: "#ffffff",
              bubbleStyle: "none",
              tailLocation: "s",
              tailX: 533,
              tailY: 177,
              visible: false,
            },
          ],
        }
      );

      window.CharactersBubbles.onCanvasLoad(function () {
        var Bubble1 = this.getBubbleById("b1");
        var Bubble2 = this.getBubbleById("b2");

        //bubbles appear and disappear with callback functions
        Bubble1.setClassName("lioness")
          .delay(1000)
          .setWidth("auto")
          .setHeight("auto")
          .pumpUp(function () {
            Bubble2.delay(1000).fadeIn(function () {
              Bubble1.delay(2000).fadeOut();

              //'this' refers to Bubble2
              this.delay(2000).fadeOut(function () {
                Bubble1.delay(1000)
                  .setText(
                    `Eu também tenho \n ${localStorage.getItem("age")} anos`
                  )
                  .pumpUp(function () {
                    Bubble2.delay(1000).fadeIn(function () {
                      Bubble1.delay(2000).fadeOut();

                      this.delay(2000).fadeOut(function () {
                        Bubble1.delay(1000)
                          .setFontSize(25)
                          .setText("Diálogo 3...")
                          .fadeIn(function () {
                            Bubble2.delay(1000)
                              .setText("CRAC!")
                              .setFontWeight("bold")
                              .setX(483)
                              .setY(54)
                              .setTailX(531)
                              .setTailY(178)
                              .setBackground("#ff0000")
                              .pumpUp(100, function () {
                                Bubble2.delay(2000).fadeOut(function () {
                                  this.remove();
                                  Bubble1.moveTo(100, 120, "fast").setText(
                                    "Diálogo 4..."
                                  );
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

    destroy() {
      window.DestroyComicBubbles(window.CharactersBubbles);
    },
  },
};
</script>

<style scoped>
.story {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #fff;
}

.story .nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  line-height: 1.3;
  font-family: "Grandstander", cursive;
  font-weight: 900;
  font-size: 31px;
}

.image {
  background: url("../assets/bg_story_01.png") no-repeat 30% top/100%;
  height: 100vh;
  background-color: #ccc;
}
</style>
