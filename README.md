# NewBlog

This project is using react hooks and many javascript skills. React hooks provides many methods to replace the original functions from class components, such as useState, useEffect, useRef, useContext... Those ways make react more simple and easy to arrange functions. I also use Redux to store data in the toppest layer so that for other components I just withdraw the data from store. With the way I can save much time to prevent to check all components' props. React just renders the component which changes it's state, so it doesn't need to reload all the page. In addition, Redux provides store like a small database on frontend. We don't need to load the data from backend, that can boost the speed for users' experience. As for backend, I use mongoose to replace the original mongodb from nodejs, it much clear and easy to read. Here I also provide a demonostration but without mongodb and nodejs backend, it just has frontend to show the React's function. All in all, in this project, I combine many materials what I learn before such as bootstrap, sass and some packages transformed from JQuery to React. It is also a RWD website, you can resize your window to observe what difference among different window width.Futhermore I add comment boxs to allow guests leave their comments on my blog. If you want to use this code to save data into database, please also use the backend written by nodejs.
<hr>
Here is the backend Link:<a href="https://github.com/xiu43317/blogserver"> Backend Code</a><br>
Here is my website Link:<a href="https://rockchang.000webhostapp.com/testweb/#/"> Demo without backend</a><br>
Here is the blog with backend which is running on Heroku:<a href="https://rockchang.000webhostapp.com/newblog/#/"> Demo with backend</a><br>
Please enter username:'Rock'  password:'1234' to login this system.
<h4>Reference:<h4/>
<a href="https://reactjs.org/docs/hooks-overview.html">Hooks at a Glance</a><br>
<a href="https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc">
  Create a Scroll to Top Arrow Using React Hooks</a><br>
<a href="https://ithelp.ithome.com.tw/users/20105814/ironman/2049">認真學前端開發 - 以 TodoList 為例</a><br>
<a href="https://tomchen60317.github.io/2020/01/22/react/React-Router-%E8%88%87-Hook-%E9%82%82%E9%80%85-2/">React Router 與 Hook 的邂逅<a/><br>
<a href="https://pjchender.github.io/2018/12/09/mongo-mongoose-%E6%93%8D%E4%BD%9C/">[Mongo] Mongoose 操作</a><br>
<a href="https://www.kingstone.com.tw/basic/2013120355064/">不一樣的Node.js：用JavaScript打造高效能的前後台網頁程式 第二版<a/>
<hr>
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

```
