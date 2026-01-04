type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

// 編集中の投稿データの型
type EditingPost = Partial<Post>;

// 一覧表示用データの型
type SummaryPost = Pick<Post, 'id' | 'title'>;

// 公開済みデータの型
type PublishedPost = Readonly<Post>;