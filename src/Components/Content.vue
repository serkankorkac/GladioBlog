<template>
  <section>
    <div class="cardb clearfix">
      <div class="contentimg"><img src="https://i.picsum.photos/id/1/880/660.jpg" width="300" height="250"
          alt="Blog İmage"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">January 24,
            2016</time><span>/ </span><a class="authorname">Thomas</a></div><a>
          <h3>Magazine WordPress Theme</h3>
        </a>
        <p>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p><a class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>
    <div class="cardb clearfix">
      <div class="contentimg"><img src="https://i.picsum.photos/id/42/880/660.jpg" width="300" height="250"
          alt="Blog İmage"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">January 24,
            2016</time><span>/ </span><a class="authorname">Thomas</a></div><a>
          <h3>Magazine WordPress Theme</h3>
        </a>
        <p>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p><a class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>
    <div class="cardb clearfix">
      <div class="contentimg"><img src="https://i.picsum.photos/id/33/880/660.jpg" width="300" height="250"
          alt="Blog İmage"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">January 24,
            2016</time><span>/ </span><a class="authorname">Thomas</a></div><a>
          <h3>Magazine WordPress Theme</h3>
        </a>
        <p>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p><a class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>
    <div class="cardb clearfix">
      <div class="contentimg"><img src="https://i.picsum.photos/id/24/880/660.jpg" width="300" height="250"
          alt="Blog İmage"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">January 24,
            2016</time><span>/ </span><a class="authorname">Thomas</a></div><a>
          <h3>Magazine WordPress Theme</h3>
        </a>
        <p>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p><a class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>
    <div class="cardb clearfix">    
      <div class="contentimg"><img src="https://i.picsum.photos/id/15/880/660.jpg" width="300" height="250"
          alt="Blog İmage"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">January 24,
            2016</time><span>/ </span><a class="authorname">Thomas</a></div><a>
          <h3>Magazine WordPress Theme</h3>
        </a>
        <p>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p><a class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>


    <div class="olderposts text-center"><button>Older Posts</button></div>
   

  </section>
</template>

<script>
export default {

  name: 'Content',
  data() {
    return {
      msg: 'Lanista Gladio Blog Content'
    }
  }
}

</script>

<style lang="less"scoped>@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #999999;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@btntextcolor: #eee;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;

section {
  width: 100%;
}

.contentimg,
.contenttext {
  margin: 0;
  padding: 0;
  float: left;
}

.contentimg {
  width: 45%;
}

.contenttext {
  padding-left: 1rem;
  width: 55%;
  font-size: 1rem;

  p {
    letter-spacing: 0.1rem;
    padding-bottom: 1.5rem;
  }
}

.blog-meta {
  font-size: 0.85rem;
  color: @incolor;
  margin-top: 0.70rem;
}

.cardb {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.continuiereading {
  margin-top: 2rem;
  color: #ffffff;
  background: #999999;
  padding: .65rem;

}
  .continuiereading:hover {
  background-color: @redcolor;
  color: #ffffff;
}

.olderposts {
  margin: 3rem;

  button {
    padding: .5rem 1rem .5rem 1rem;
    background-color: #303030;
    color: @btntextcolor;
    border: none;
    transition: 1s;

  }

}
a{
     transition: 1s;
     cursor: pointer;
}
button:hover{
  background-color: @redcolor;
  color: #ffffff;
}

</style>