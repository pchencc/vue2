## 创建vue
```
<div id="root">
        hi,我叫{{name}},今年{{age}}岁 就读于{{school.name}}
         <a v-bind:href="url">点我</a>
         //<a :href="url">点我</a>
</div>

new Vue({
            el:'#root',
            data:{
                name:'潘晨',
                age:18，
                url:'https://pchencc.github.io/',
                  school:{
                    name:'hue'
                  }
            }
        });    
```

**一个容器对应一个实例**
1.el 选择容器
2.$mount()
```
const v = new Vue({})
v.$mount('#root')
```
**data**
1.对象式date:{}
如果有多个name 就在data里面在来个对象 对象.name
2.函数式(组件)
```
  data(){//data:function()
    console.log('',this)//this指的vue 。不能用箭头函数 箭头函数指的全局
  }
  return{
    name:'panchen'
  }
```

**插值语法{{}}**
用于标签体内容

指令语法
**v-bind:** == ：
用于标签属性（url） 标签体内容 绑定事件
单向数据绑定 不能通过修改页面来修改data

**v-model**
双向绑定 
v-model='name'表示绑定姓名的值


## MVVM模型
M：模型model 对应data数据
V：视图view 模板 dom页面
VM：视图模型 view model：vue实例对象 

data数据经过vue放到页面

data的所有属性最后都出现在vm
vm的属性及vue原型属性 data都可以用

## 数据代理
Object.defineProperty(对象，对象名，{配置})

```
Object.defineProperty(person,'age',{//在person对象推荐age属性 值为18
            value:18
            enumerable：true， //控制属性是否可枚举 默认是false
            writable：true，    //重写 默认false
            configurable：true //删除 默认false
         })
```

```
//数据代理 访问get 修改set
const number = 18
         Object.defineProperty(person,'age',{
          //有人读取age属性的时候 get函数的（getter）被调用 返回值是age的值
            get(){
                return number
            },
            //value收到被修改的值
            set(value){
              //把修改的和age关联起来
              number = value

            }
         })
```

data = vm._data

vue中的数据代理
通过vm对象来代理data对象中的属性的操作

好处 方便操作data中的数据

原理
通过Object.defineProperty（）把data对象中所有属性添加到vm
为每一个添加到vm上的属性 都指定一个setter getter

## 事件处理
上面的模板只能用vue实例提供的东西

1.绑定事件
v-on：事件或者@事件

2.事件回调
写在methods里面 参数可以写在括号里面
用普通函数

```
<button v-on:click="show">不传参</button>
 <button @click="show1(66,$event)">参数</button>//

           methods:{
                show(){
                    alert('hi')
                },
                show1(number,event){
                console.log(number)
                }
            }
```

## 事件修饰符

可以连续写
@click.prevent 阻止默认跳转

stop 阻止事件冒泡
once 事件只触发一次
capture 使用事件的捕获模式
self 只有event.target是当前操作的元素才触发事件
passive 事件的默认行为立即执行 无需等待事件回调执行完毕

## 键盘事件
按键别名
@keyup.enter 回车时触发
delete  删除
esc     退出
space   空格
tab     换行（按下tab会切走 失去焦点 要用keydown）
up
down
left
right

切换大小写 是CapsLock 别名 caps-lock



系统修饰键 ctrl alt shift meta（win）
配合keyup ：按下修饰键的同时 按下其他键 松开其他键
配合keydown： 正常

可以利用keyCodes去查询键码
Vue.config.keyCodes.huiche = 13//定义

## 计算属性
要用属性不存在 通过已有属性计算得来
原理 get和set

computed ：{
  计算属性：{
    get(){//初次读取被调用，后面的是缓存  所依赖数据发生变化重新调用
    return this.
  },
    set(){//修改

    }
  }
}

## 监视属性
当被监视的属性变化时 回调函数自动调用 进行相关操作
监视的属性必须存在
watch：{
  监视的属性：{

  }
}
vm.$watch('监视的属性',{

})

深度监视
vue的watch默认不监视对象内部值的改变 data：{number：{}} 监视numer 但是不检测number里面的
deep.true 可以检测内部数值改变

vue可以检测内部 但是vue里面的watch不行

简写 只有hanlder

## computed和watch区别
computed可以完成的watch都可以完成
watch可以完成的computed不一定可以完成 如watch可以异步操作

vue管理函数 最好写出普通函数 this指向vm或者组件实例
不被vue管理（定时器回调函数 ajax回调函数）最好写出箭头函数 这样this指向vm或者组件实例


## 绑定class
1. 用于变化的样式
:class = "a"

a:'样式'

2. 数组 用于名字和数量不确定的样式 vm.arr.shift()默认删除第一个  vm.arr.push('')添加样式
:class = "arr"

arr:['样式1'，'样式2'，'样式3']

3. 对象 用于确定的名字和数量的样式 但是不知道是否使用
:class = 'obj'

obj:{
  样式1：false，
  样式2：true，
  样式3：true
}

4. style 
font-size变为fontSize
:style = "{fontSize = size+'px'}"

size:100

:style = "styleobj"            这里可以使用数组

styleobj:{
  fontSize:'100px'
}

## 条件渲染
v-show="false" 隐藏
v-show="true"  显示 也可以 v-show = "1===1"

v-if = "false" 隐藏
v-if="true"  显示 也可以 v-if = "1===1"

if是删除 添加节点 show只是隐藏 
如果高频率切换 建议使用show

if
else-if
else 
一样的规则就是要连着

template 不影响结构 配合if

v-if元素可能无法获取到
v-show一定可以获取到元素

## 列表渲染
v-for 展示列表数据

v-for = "(item,index) in xxx :key = ""

:key表示唯一标识 最好有

 数组
            <li v-for="(p,index) in persons" :key="p.id">{{p.name}}-{{p.age}}</li>

 对象
            <li v-for="(value,k) in car" :key="">

字符串
            <li v-for="(char,index) in string" :key="">{{char}}---{{index}}</li>

遍历次数 number从1开始 index从0开始

            <li v-for="(number,index) in 4" :key="">{{number}}---{{index}}</li>  

## key
如果将index作为key
我们在新增一个数据的时候 会出现错乱
因为原本对应1 
新增一个新增对应1 原本对应2
导致新增的对应了原本的1

将编写的id作为key可以避免

问：vue中的key的作用
一.  虚拟dom中key的作用
key是虚拟dom对象的标识 当数据发生变化 vue会根据新数据生产新的虚拟dom
随后vue进行新虚拟dom和旧虚拟dom的差异比较 
比较规则：（代码是虚拟 页面操作是真实 input框输入真实）
1. 旧虚拟dom中找到了与新虚拟dom相同的key
如果虚拟dom中内容没有变化 直接使用之前的真实dom
如果虚拟dom变化 生成新的真实dom 替换之前的真实dom

2. 旧虚拟dom中未找到与新虚拟dom相同的key
创建新的真实dom 渲染

index作为key可能引发的问题
1. 如果对数据进行：逆序添加 逆序删除等破坏顺序操作：会产生没有必要的真实dom更新 页面效果没有问题 但是效率低
2. 如果结构中还包含输入类的dom 会产生错误dom更新 界面更新

开发如何选择key
1. 最好使用每条数据的唯一标识作为key id 手机号 身份证
2. 如果不存在逆序添加 删除等破坏顺序的操作 渲染近作为展示 index作为key没有问题


# Vue监视数据的原理:
1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据?
通过setter实现监见，且要在new Vue时就传入要监测的数据。
(1).对象中后追加的属性，Vue默认不做响应式处理
(2).如需给后添加的属性做响应式，请使用如下API:
vue.set(target.propertyName/index，value）或
vm.$set(target.propertyName/index,value)

3. 如何监测数组中的数据?
通过包裹数组更新元素的方法实现,本质就是做了两件事:
(1).调用原生对应的方法对数组进行更新。
(2).重新解析模板，进而更新页面。
4.在Vue修改数组中的某个元素一定要用如下方法:
1. 使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
2. Vue.set()或vm.$set()
特别注意:Vue.set()和vm.$set()不能给vm或 vm的根数据对象添加属性!!!


# 收集表单数据:
若:<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
若:<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
若:<inpuf type="checkbox" / >(vue里面设置为数组)
1. 没有配置input的value属性，那么收集的就是checked（勾选or未勾选，是布尔值)
2. 配置input的value属性:
(1)v-model的初始值是非数组，那么收集的就是checked(勾选or未勾选，是布尔值)
(2)v-model的初始值是数组，那么收集的的就是value组成的数组
备注:v-model的三个修饰符:
lazy:失去焦点再收集数据
number:输入字符串转为有效的数字trim:输入首尾空格过滤


# 过滤器:
定义:对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）.语法:
1. 注册过滤器:
全局：Vue.filter(name,callback)
局部：new Vue{
  filters:{

  }
  }
2. 使用过滤器:{{ xxx|过滤器名}}或v-bind:属性=“xxx|过滤器名"
备注:
1.过滤器也可以接收额外参数、多个过滤器也可以串联
2.并没有改变原本的数据,是产生新的对应的数据

# v-html指令:
1. 作用:向指定节点中渲染包含html结构的内容。
2. 与插值语法的区别:
(1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
(2).v-html可以识别html结构。
3. 严重注意:v-html有安全性问题!!!!
(1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。(2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上!

# v-cloak(没有值)
1. 本质是特殊属性 vue实例创建完毕并接管容器后，会删除v-cloak属性
2. 使用css配合v-cloak可以解决网速慢时候页面展示出{{xxx}}问题

# v-once
1. v-once所在节点初次动态渲染后 就视为静态内容（就是不会改变了）
2. 结果改变不会引起v-once所在结构更新 可以用于优化性能

# v-pre
1. 跳过所在节点的编译过程（不去解析）
2. 可利用他跳过：没有使用指令语法 没有使用插值语法的节点 会加快编译


# 自定义指令
一. 定义语法:
(1). 局部指令:
new Vue({
Vue({
new
directives:{指令名:配置对象]或
directives{指令名:回调函数}
)
})
(2).全局指令:
Vue.directive(指令名,配置对象）或 Vue.directive(指令名,回调函数)
二、配置对象中常用的3个回调:
(1).bind:指令与元素成功绑定时调用。
(2).inserted:指令所在元素被插入页面时调用。(3). update:指令所在模板结构被重新解析时调用。
三、备注:
1.指令定义时不加v-,但使用时要加v-;
2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

# 生命周期:
1. 又名:生命周期回调函数、生命周期函数、生命周期钩子。
2. 是什么:Vue在关键时刻帮我们调用的一些特殊名称的函数。
3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
4. 生命周期函数中的this指向是vm或组件实例对象。

# 常用的生命周期钩子:
1. mounted:发送ajax请求、启动定时器、绑定自定义事件
订阅消息等【初始化操作】。
2. beforeDestroy:清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】.

关于销毁Vue实例
1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效,但原生DOM事件依然有效。3.一般不会再beforeDestroy操作数据,因为即便操作数据
也不会再触发更新流程了。





      




