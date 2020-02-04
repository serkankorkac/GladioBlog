<template>

<footer>
<h5>{{msg}}</h5>
</footer>



         


</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Lanista Gladio Blog Footer'
    }
  }
}
</script>

<style lang="less" scoped>
@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
footer{
    width :100%;
    color: @bgcolor;
   // margin-top:3rem;
    h5{
        padding: 4rem;
    }

}
</style>