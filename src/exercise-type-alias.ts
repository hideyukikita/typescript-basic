// 型エイリアスの定義
type Reviw = {
    rating: number;
    comment: string;
    reviewer: string;
};

const review1: Reviw = {
 rating: 5,
 comment: '最高の商品でした！',
 reviewer: '侍太郎',
};

const review2: Reviw = {
 rating: 3,
 comment: '普通の商品でした。',
 reviewer: '侍花子',
};

console.log(review1);
console.log(review2);