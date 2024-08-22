var posts=["2024/03/06/CMake基础/","2024/03/06/Hexo搭建个人网站/","2024/03/06/Hexo主题设置/","2024/03/06/Linux基础/","2024/03/06/Makefile基础/","2024/07/28/MYIssue/","2024/03/06/VTK基础/","2024/07/25/hello-world/","2024/03/08/macroeconomy/","2024/07/26/page/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };