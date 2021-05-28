export interface ISources<T> {
    id: T;
    name: T;
    description: T;
    url: T;
    category: T;
    language: T;
    country: T;
}

export type ISourceData = {
    sources?: ISources<string>[];
};
