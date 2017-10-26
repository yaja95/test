<template>

  <div class='slides'>
    <v-card id = 'header'>
<h3 class = 'text'> Germany 2k14</h3>
<h6>Here's a slideshow of some pictures from
  my trip to Germany and some surrounding countries
  my senior year of High School.</h6>

</v-card>
    <v-carousel style="height:650px">
      <v-carousel-item v-for="(item,i) in items" :key="i" v-bind:src="item.src" transition="fade" reverseTransition="fade"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
//var imagePath = 'http://sstatic.net/so/img/';
export default {
  name: 'slides',
  data() {
    return {
      items: [
        {
          src: require('./germany6.jpg'),
          //text: 'germany1',
        },
        {
          src: require('./germany7.jpg')
        },
        {
          src: require('./germany8.jpg')
        },
        {
          src: require('./germany4.jpg')

        }
      ]
    }
  }
}
</script>

<style lang="stylus">
#carousel-view {
  .fade {
    &-enter-active, &-leave-active, &-leave-to, transition: .2s ease-out {
      position: absolute;
      border: 1px solid #dddddd;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
.text{
  font-family: Lobster
}
</style>