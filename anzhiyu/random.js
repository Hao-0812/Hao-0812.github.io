var posts=["2024/03/06/Hexo搭建个人网站/","2024/03/05/hello-world/","2024/03/06/paper/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };