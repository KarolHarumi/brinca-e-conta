<template>
  <div class="story">
    <div class="book">
      <div class="left-page">
        <h1>Lenda da Vitória Régia</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris nunc, rhoncus non tellus sit amet, rhoncus maximus dui. Nullam fermentum mattis tellus a interdum.</p>
        <p>Vestibulum quam dolor, porta et nulla ultricies, pretium blandit velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae ante magna. Etiam semper, mauris ut eleifend cursus, diam risus efficitur diam, nec rutrum metus ex eget massa. Aliquam scelerisque metus id dictum porta. Fusce accumsan libero ac accumsan condimentum. Donec non ex turpis.</p>
      </div>
      <div class="right-page">
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec maximus iaculis nisl, vel iaculis justo dictum eu. Sed eu tincidunt nisi, ac vestibulum ipsum. Aliquam consectetur euismod purus a sollicitudin. Nam quis dui felis. Aliquam erat volutpat. Phasellus dapibus lectus ac tincidunt rhoncus. </p>
        <p>Integer vestibulum libero hendrerit ex elementum varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin rhoncus fermentum viverra. In consequat, urna eget dictum molestie, nunc magna gravida felis, at sodales elit leo sed elit. In hac habitasse platea dictumst. Proin lobortis ante et odio pharetra pharetra.</p>
        <p>Pellentesque suscipit lacus non mauris venenatis scelerisque. Donec erat velit, vestibulum ut leo a, elementum placerat eros. Donec lacinia arcu tellus. Sed lobortis porttitor risus at imperdiet. Pellentesque rhoncus sem eu augue facilisis, id condimentum nunc mollis. Sed sit amet bibendum lectus. Quisque in mi nec justo sagittis sodales.</p>
      </div>
    </div>
  </div>
</template>

<style>
  .story {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #fff;
    padding: 0 5%;
  }

  .book {
    width: 100%;
    height: 100vh;
    background: url('../assets/bg_book.jpg') no-repeat center/cover;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
    padding: 5%;
    font-size: 16px;
    line-height: 1.5;
  }

  .book .left-page {
    width: 50%;
    margin-right: 8%;
  }

  .book .right-page {
    width: 50%;
  }

  h1 {
    line-height: 1.3;
    margin-bottom: 0;
    font-family: 'Grandstander', cursive;
    font-weight: 900;
    font-size: 31px;

  }
</style>