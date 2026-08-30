var posts=["2024/03/06/CMake基础/","2024/03/06/Linux基础/","2024/03/06/Hexo搭建个人网站/","2026/08/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };