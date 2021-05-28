import { INewsData } from './news';
import { ISourceData } from './source';

export interface IObject {
    [key: string]: string;
}

export interface IApi {
    apiKey?: string;
}

export interface IOptions {
    endpoint: string;
    options?: IObject;
}

export type ICallback = (data: Partial<INewsData & ISourceData>) => void;
