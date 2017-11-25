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

