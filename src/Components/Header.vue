<template>
  <header>
    <a class="navbar-brand m-4" href="#"><img src="../assets/siyah.png" width="150" alt="Lanista Software"></a>

    <form class="form-inline">
      <input class="form-control search" type="search" placeholder="Search" aria-label="Search">
      <div class="input-group-prepend ser">
        <span class="social" id="basic-addon1"><i class="fas fa-search"></i></span>
      </div>
   

    <li><a href="#">
        <div class="social"><i class="fab fa-facebook-f"></i></div>
      </a></li>
    <li><a href="#">
        <div class="social"><i class="fab fa-twitter"></i></div>
      </a></li>
    <li><a href="#">
        <div class="social"><i class="fab fa-linkedin"></i></div>
      </a></li>
    <li><a href="#">
        <div class="social"><i class="fab fa-instagram"></i></div>
      </a></li>
    <li><a href="#">
        <div class="social"><i class="fab fa-pinterest"></i></div>
      </a></li>
 </form>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Lanista Gladio Blog Header'
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
header{
    width:100%;
    padding: 2rem;
}
form{
    margin-top:2rem;
    float: right;
}

.social {
  width: 50px;
  height: 50px;
  background-color: @redcolor;
  border:none;

}
.search{
    
    padding: 2px;
}

li,
ul {
  list-style: none;
}

li {

  float: left;
  padding: 2px;
}

i, .fa-search {

  font-size: 22px;
  color: @bgcolor;
//  padding: 12px;
  margin: 14px;
 
}

.ser{
    margin-right:1.5rem;
}
.form-inline{
    input{
        border-radius: 0;
        width: 15rem;
        height: 3rem;
        padding: 1rem;
    }
}

</style>