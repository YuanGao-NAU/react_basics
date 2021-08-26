## 虚拟DOM
- 虚拟DOM本质上是Object类型的对象（一般对象）
- 虚拟DOM比较“轻”， 真实DOM比较“重”， 因为虚拟DOM是React内部在用，无需真实DOM上那么多属性
- 虚拟DOM最终会被React转换为真是DOM，呈现在页面上

## jsx语法规则
- 定义虚拟DOM时，不要写引号
- 标签中混入js表达式时要用{}
- 样式的类名指定不要用class，要用className
- 内联样式，要用```style={{key:value}}```的形式
- 虚拟DOM只有一个根标签
- 标签必须闭合
- 标签首字母
    - 若为小写字母开头，则将该标签转为html中的同名元素，若html中无该标签对应的同名元素则报错
    - 若为大写字母开头，React就会渲染对应的组件，若组件没有定义则会报错。

## JS表达式 & JS语句
- 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方（可以放在等号右边的）
- 语句（代码）：if，for，switch。。。

## 函数式组件
```Html
<script type="text/babel">
        //1.创建函数式组件
        function MyComponent() {
            console.log(this);      //此处的this是undefined，因为babel编译后开启了严格模式，this不指向window
            return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
        }
        //2.渲染组件到页面
        ReactDOM.render(<MyComponent/>, document.getElementById('test'));
    </script>
```
执行了```ReactDOM.render(<MyComponent/>, document.getElementById('test'));```后，发生了什么？
- React解析组件标签，找到MyComponent组件。
- 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面上。

## JS的类
- 类中的构造器不是必须的，要对实例进行一些初始化操作，如添加指定属性时才写。
- 如果A类继承了B类且A类中写了构造器，那么A类构造器中的super是必须要调用的。
- 类中所定义的方法，都是放在了类的原型对象上，供实例使用。
- 类中定义的方法都开启了局部严格模式，直接调用时会出错

## 类式组件
- 必要条件：
    - 继承React.Component类
    - 实现render方法，且必须有返回值，返回要显示的内容
    - 调用ReactDOM.render渲染`
    
    执行```ReactDOM.render(<MyComponent/>, document.getElementById('test'));```后发生了什么？
    - React解析组件标签，找到MyComponent标签
    - 发现组件是使用类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法
    - 将render返回的虚拟DOM转为真实DOM，随后呈现在页面上

## 复杂组件
有状态```(state)```的组件就是复杂组件。

## 组件三大核心属性
### 组件对象的state属性
- state是组件对象最重要的属性，值是对象(可以包含多个key-value的组合)
- 组件被成为状态机，通过更新组件的state来更新对应的页面显示（重新渲染组件）

### 注意
- 组件中的render方法中的this为组件实例对象
- 组件自定义的方法中this为undefined(因为类中的方法局部使用严格模式，获取的this为undefined)，解决方法：
    - 强制绑定this: 通过函数对象的bind()
    - 箭头函数
- 状态数据不能直接更新或修改，而应使用```this.setState()```方法更新

### 组件的props属性
- 每个组件对象都会有props属性
- 组件**标签**的所有属性都保存在props中

### 作用
- 通过标签属性从组件外向组件内传递变化的数据
- 注意：组件内部无法修改props数据

### 组件的refs属性
- 三种形式
- 使用createRef创建ref需要注意创建的ref是专用的，每个需要使用ref的地方都需要使用createRef创建新的ref

## React事件处理
- 通过onXxx属性指定事件的处理函数
    - React使用的是自定义（合成）事件，而不是使用的原生DOM事件----为了更好的兼容性
    - React中的事件是通过事件委托的方式处理的（委托给组件最外层的元素）----为了高效（事件冒泡）
- 通过event.target得到发生事件的DOM元素对象----不要过度使用ref

## React非受控组件 && 受控组件
- 非受控特点：现用现取
- 受控特点：随着输入的改变将值维护到state中

## 高阶函数
- 如果一个函数符合下面2个规范中的任何一个，就可以称为高阶函数
    - 若A函数接收的参数是一个函数，那么A就可以称为高阶函数
    - 若A函数调用的返回值依然是一个函数，那么A就可以称为高阶函数
- 常见的高阶函数：
    - Promise、setTimeout、arr.map() 等等。

## 函数的柯里化
通过函数调用继续返回函数的方式，实现多次接收参数最后同意处理的函数编码形式