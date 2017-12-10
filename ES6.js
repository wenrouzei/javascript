/////////// es6 var let const
//var function scope 可重复申明定义、改变值，函数作用域，全局或函数
var a = 3333
var a = 'bbbb'
function b() {
    var b = 'fasdfasd'
    console.log(b)
}
b()
console.log(a, b)
//let const block scope 块级作用域 全局或{}中
{
    let c = 'fsafasdfas'
    const d = '42342342'
    console.log(c,d)
}
//console.log(c,d) //报错 Uncaught ReferenceError: c is not defined
//let 可改变值
let c = 'fasdfsadfsa'
c = '23423423'
console.log(c)
//const 不可改变值, 引用类型属性可改变
const person = {
    name: 'fsafsa',
    age: 18
}
//person = {name:'f2342342', age: 22} //报错 Uncaught TypeError: Assignment to constant variable.
person.name = '23423423' //可改变属性
console.log(person)
const lee = Object.freeze(person) // Object.freeze 设置属性也不能改变
lee.name = 'lee'
lee.age = 23423
console.log('Object.freeze 设置不可改变',lee)

for(var i=0;i<=10;i++){
    //console.log(i)
    setTimeout(function () {
        console.log(`i:${i}`)
    }, 1000)
}
for(let i=0;i<=10;i++){
    //console.log(i)
    setTimeout(function () {
        console.log(`i:${i}`)
    }, 1000)
}

/////////// es6 箭头函数 => Arrow Function  箭头函数没有自己的this、arguments、super、new.target，它们分别指向外层函数的相应变量。
const numbers = [1,2,3,4,5]
let double = numbers.map(number =>{
    return number*2
})
console.log(`显式返回 ${double}`)
double = numbers.map(number => number*2)
console.log(`隐式返回 ${double}`)

//匿名函数
const greet = name => console.log(`hello ${name}`)
greet('leelee')

const leeee = {
    name: 'leeee',
    scopes : [1,3,5,7],
    getMyName: function () {
        console.log(this)
        self = this
        this.scopes.map(function(item){
            console.log(`${self.name}'s scope ${item}`)
        })
    },
    getHisName: function () {
        console.log(this)
        this.scopes.map(item => {
            console.log(`${this.name}'s scope ${item}`) //箭头函数没有自己的this 继承父级作用域的this
        })
    }
}
leeee.getMyName()
leeee.getHisName()

/////////// es6 函数参数默认值
function test(a=1,b=c){
    return a*b;
}
console.log(test(undefined,666)) //赋值为undefined，则使用默认值


/////////// es6 模板字符串 可嵌套 标签模板字符串
const sentence = `模板字符串 '${a}' 可嵌套 ${numbers.map(number => `
<li>${number}</li>
`).join('')} test "${c}"`
console.log(sentence)

/////////// es6 字符串函数 .startWith() .endWith() .includes() .repeat()
console.log('fasdfsad'.startsWith('fa'), '2423423'.endsWith('423'))
console.log('fasdfsadfas'.includes('fa',2))
console.log('123'.repeat(10))


/////////// es6 对象解构
const {name: mName}  = leeee
console.log(mName)

/////////// es6 数组解析
const myNumbers = [1,3]
const [one,two] = myNumbers
console.log(`const [one,two] = myNumbers 数组解析: ${one} ${two}`)
const [m1,m2,m3='fsafsa'] = myNumbers
console.log(`const [m1,m2,m3='fsafsa'] = myNumbers 数组带默认值解析: ${m1} ${m2} ${m3}`)

// 交换变量值
let x = 2
let z = 3;
[x, z] = [z, x]
console.log(`交换变量值 let x = 2 let z = 3 [x, z] = [z, x] ${x} ${z}`)

/////////// es6 for forEach for in(包含属性)  for of
const fruits = ['apple', 'banana']
fruits.forEach(fruit => {
    console.log(`fruit.forEach ${fruit}`)
})

//for of 数组、字符串、dom元素， 不支持对象？
for(let [index, fruit] of fruits.entries()){
    console.log(`const fruits = ['apple', 'banana'] for of ${index} ${fruit}`)
}

// for of字符串
const str = 'fasdfsadf'
for(let char of str){
    console.log(`const str = 'fasdfsadf' for of字符串 ${char}`)
}

let lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', function () {
        this.classList.toggle('completed')
    })
}

/////////// es6 Array.from() Array.of() 数组非原型函数
// Array.form() 讲其他类型转为数组
//可迭代对象转数组
const todos = document.querySelectorAll('li') //nodeList对象
const names = Array.from(todos).map(todo => todo.textContent)
const names2 = Array.from(todos, todo => todo.textContent)
console.log(names, names2)
//字符串转数组
console.log(Array.from('hello world'))
//函数参数转数组
function testArrayFrom(){
    console.log(arguments)
    return Array.from(arguments).reduce((prev, curr) => prev + curr)
}
console.log(testArrayFrom(1,3,4,6,8,9))

// Array.of() 将元素组合成数组 保持元素一致性 比 new Array(1) new Array(1,2,3) 好
console.log(Array.of(1,54,67,'fasdfsad'))

/////////// es6 array原型函数非循环,查找符合立即返回 .find() .findIndex() .some() .every()
const inventory = [
    {name: 'apple', price: '5'},
    {name: 'banana', price: '3'},
    {name: 'cherry', price: '6'}
]
//.find() 返回查找到的元素
console.log(inventory.find(item=>item.name ==='apple'))
//.findIndex 返回符合条件索引
console.log(inventory.findIndex(item=>item.name ==='apple'))
//.some 有任一元素符合条件立即返回true
console.log(inventory.some(item=>item.price > 6))
//.every 每一个元素都符合条件立即返回true or false
console.log(inventory.every(item=>item.price === 5 ))

/////////////// es6 ...剩余运算符
function sum(...numbers){
    return numbers.reduce((prev,curr) => prev + curr, 0)
}
console.log(sum(1,3,2,5,7))

function cover(rate,...amounts){
    return amounts.map(amounts => amounts*rate)
}
console.log(cover(0.6,1,3,5,6,7))

const player = ['lee', 111, 100, 99, 88, 87]
const [name, id, ...scopes] = player
console.log(name, id ,scopes)

//////////////// es6 ...扩展运算符 数组、字符串
const youngers = ['Jon', 'Tom']
const olders = ['Jam', 'Martin']

//数组合并
let members = []
members = members.concat(youngers)
members.push('Marry')
members = members.concat(olders)

const members2 = [...youngers, 'Marry', ...olders]
console.log(`members, members2, [...'hello world']`, members, members2, [...'hello world'])

//数组赋值
const members3 = members; // 修改时候同时改变
members3[0] = 'aaa'
console.log(members3,members)

const member4 = [].concat(members)
const member5 = [...members]
member4[0] = '444' // 修改时候members不会改变
member5[0] = '555' // 修改时候members不会改变
console.log(`const member4 = [].concat(members) const member5 = [...members]`, member4, member5, members)

//////////////// es6 扩展运算符在函数中的应用
const rules = ['r1', 'r2', 'r3']
const newRules = ['r4', 'r5']
// 数组合并不符合
//rules.push(newRules)

//数组合并两种方式都可以
rules.push.apply(rules, newRules)
rules.push(...newRules)
console.log(`数组合并 const rules = ['r1', 'r2', 'r3'] const newRules = ['r4', 'r5']`, rules)

//减轻参数传入
const dateFIles = [2017,12,9]
const date = new Date(...dateFIles)
console.log(date)


//////////////// es6 对象字面量的扩展
const myName = 'lee'
const myAge = 22
const leeObj = {
    myName: myName,
    myAge: myAge,
    getName: function () {
        console.log(this.myName);
    }
}
// 属性名跟变量名一样的时候，可简写、 函数也可以简写
const leeObj2 = {
    myName,
    myAge,
    getName() {
        console.log(this.myName);
    }
}
leeObj.getName()
leeObj2.getName()
console.log(`es6对象属性名跟变量名一样的时候，可简写、 函数也可以简写`, leeObj,leeObj2)

// 计算属性 自动递增
let userId = 0
const userIds = {
    [`user-${++userId}`] : userId,
    [`user-${++userId}`] : userId,
    [`user-${++userId}`] : userId,
    [`user-${++userId}`] : userId,
}
console.log(userIds)

const keys = [1,2,3]
const values = ['a','b','c']
const combineObj = {
    [keys.shift()]:values.shift(),
    [keys.shift()]:values.shift(),
    [keys.shift()]:values.shift(),
}
console.log(combineObj)
