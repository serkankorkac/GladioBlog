<template>
  <section>
    <div class="cardb clearfix" v-for="blog in bloglist" :key="blog.id">
        <router-view></router-view>
      <div class="contentimg"><img :src="blog.image==null ? imageUrl:blog.image" width="300" height="250"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">{{blog.date}}</time><span>/ </span><a class="authorname">{{blog.author}} - {{id}}</a></div><a>
          <h3>{{blog.title}}</h3>
        </a>
        <p class="description">{{blog.content}}
        </p>
        <router-link :to="{name:'details',params:{id:blog._id,title:blog.title,author:blog.author,content:blog.content,imageUrl:blog.image,created:blog.cradetAt}}"><a href="" class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i> </a></router-link>
      </div>
    </div>


    <div class="olderposts text-center"><button>Older Posts</button></div>
  </section>
</template>

<script>
import {eventBus} from '../../main'
import Axios from 'axios'
export default {

  name: 'Blogs',
  data() {
    return {
       id:null,
        imageUrl:'https://i.picsum.photos/id/128/880/660.jpg',

      bloglist:[]
    }
  },
  methods:{
 
  },
  watch:{
      '$route'(to,from){
          this.id =to.params._id
      }

  },
  mounted(){

   Axios.get('http://localhost:2500/api/post').then(blogs=>{
     this.bloglist=blogs.data;
     console.log(this.bloglist)
   }).catch(err=>{
     console.log(err);
   })
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
  width: 50%;
}

.contenttext {
  padding-left: 1rem;
  width: 50%;
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
.description{
     display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow:hidden;
}

</style>