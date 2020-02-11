<template>
  <section>
    <div class="cardb clearfix" v-for="blog in blog" :key="blog.String">
        <router-view></router-view>
      <div class="contentimg"><img :src="blog.photo==null ? imageUrl:blog.photo" width="300" height="250"></div>
      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">{{blog.date}}</time><span>/ </span><a class="authorname">{{blog.author}} - {{id}}</a></div><a>
          <h3>{{blog.title}}</h3>
        </a>
        <p class="description">{{blog.description}}
        </p>
        <router-link :to="{name:'details',params:{id:blog.id,title:blog.title,photo:blog.photo,author:blog.author,date:blog.date,description:blog.description}}"><a href="" class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i> </a></router-link>
      </div>
    </div>


    <div class="olderposts text-center"><button>Older Posts</button></div>
  </section>
</template>

<script>
import {eventBus} from '../../main'
export default {

  name: 'Blogs',
  data() {
    return {
        id:this.$route.params.id,
        imageUrl:"/src/assets/img/default.png",
        blog:[{
            id:1,
      photo:"https://i.picsum.photos/id/1/880/660.jpg",
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. ",
      date:'January 24,2016'
      },
      {
          id:2,
      photo:null,
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.",
      date:"Juna 24, 2020"
      },
      {
          id:3,
      photo:"https://i.picsum.photos/id/2/880/660.jpg",
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.",
      date:"Juna 24, 2020"
      },
      {
          id:4,
      photo:"https://i.picsum.photos/id/4/880/660.jpg",
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.",
      date:"Juna 24, 2020"
      },
      {
          id:5,
      photo:"https://i.picsum.photos/id/3/880/660.jpg",
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.",
      date:"Juna 24, 2020"
      },
      {
          id:6,
      photo:"https://i.picsum.photos/id/5/880/660.jpg",
      author:"Cihan",
      title:"Magazine WordPress Theme",
      description:"Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi facilis tempore voluptas. Ducimus quasi molestiae ratione, consequuntur officiis necessitatibus.",
      date:"Juna 24, 2020"
      },
      ]
    }
  },
  methods:{
  },
  watch:{
      '$route'(to,from){
          this.id =to.params.id
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
.description{
     display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow:hidden;
}

</style>