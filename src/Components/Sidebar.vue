<template>
  <section>

    <Recommended></Recommended>
    <Archives></Archives>
    <Recent></Recent>
    


  </section>
</template>

<script>
// import Archives from './Components/SideComponents/Archives';
// import Recommended from './Components/SideComponents/Recommended';
// import Recent from './Components/SideComponents/Recent';
import Archives from './SideComponents/Archives'
import Recommended from './SideComponents/Recommended'
import Recent from './SideComponents/Recent'
export default {
  name: 'Sidebar',
   components:{
       Archives,
       Recommended,
       Recent

  },
  data () {
    return {
      msg: 'Lanista Gladio Blog Sidebar'
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
@sidebgcolor:#FAFAFA;
@btntextcolor:#eee;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;

</style>