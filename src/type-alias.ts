type User = {
    id: number;
    name: string;
};

// オブジェクトの型にUserという型エイリアスを使用
const firstUser: User = {
    id: 1,
    name: '侍太郎',
};

const secondUser: User = {
    id: 2, 
    name: "侍花子",
};

console.log(firstUser);
console.log(secondUser);