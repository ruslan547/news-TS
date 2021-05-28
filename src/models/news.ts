export interface INews<T> {
    source: {
        id: number;
        name: T;
    };
    author: T;
    title: T;
    description: T;
    url: T;
    urlToImage: T;
    publishedAt: T;
    content: T;
}

export type INewsData = {
    articles?: INews<string>[];
};
