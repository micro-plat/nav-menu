# nav-menu

> vue 菜单组件 nav-menu  (持续更新中....)

## install 

``` bash
# install dependencies
npm i nav-menu --save

```
## 预览
![预览](https://github.com/micro-plat/login-with-up/blob/dev/menu.png?raw=true)

##use
```vue
<template>
  <div>
    <nav-menu
      :menus="menus"
      :copyright="copyright"
      :themes="themes"
      :logo="logo"
      :systemName="systemName"
      :headpic="headpic"
      ref="NewTap"
    >
      <router-view  @addTab="addTab" />
    </nav-menu>

  </div>
</template>

<script>
  import navMenu from 'nav-menu'; // 引入
  export default {
    name: 'app',
    data () {
      return {
        headpic:"http://sso2.100bm.cn:6888/static/img/d879a953c0dc59a7564a861000aaeac3.png",
        logo:"http://sso2.100bm.cn:6888/static/img/d879a953c0dc59a7564a861000aaeac3.png",
        copyright:"2018 四川千行你我科技有限公司", //版权信息
        themes:"bg-info|bg-danger|bg-dark", //顶部左侧背景颜色,顶部右侧背景颜色,右边菜单背景颜色
        menus:[{}],  //菜单数据
        systemName:"实惠生活管理系统"  //系统名称
      }
    },
    components:{ //注册插件
      navMenu
    },
    mounted(){
      this.getMenu();
      //向组件添加一个自定义标签，点击标签会路由到一个页面
      this.$refs.NewTap.add("用户绑定","/user/bind");   //设置默认页面
    },
    methods:{
      getMenu(){
        this.$post("/sso/menu/get")
          .then(res => {
            this.menus = res;
          })
          .catch(err => {
           console.log(err)
          });
      },
      //@name 标签名称
      //@path 路由
      //@obj  路由参数 类型：Object
      addTab(name,path,obj){
        
        this.$refs.NewTap.add(name,path,obj);   //调用组件方法，添加一个页面
      }
    }
  }
</script>

<style scoped>

</style>
```
