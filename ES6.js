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


/////////// es6 Array.from() Array.of() 数组非原型函数
// Array.form() 讲其他类型转为数组
//对象转数组
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

// Array.of() 讲元素组合成数组
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

//////数组合并////
let members = []
members = members.concat(youngers)
members.push('Marry')
members = members.concat(olders)

const members2 = [...youngers, 'Marry', ...olders]
console.log(members, members2, [...'hello world'])

/////数组赋值///
const members3 = members; // 修改时候同时改变
members3[0] = 'aaa'
console.log(members3,members)

const member4 = [].concat(members)
const member5 = [...members]
member4[0] = '444' // 修改时候members不会改变
member5[0] = '555' // 修改时候members不会改变
console.log(member4, member5, members)

