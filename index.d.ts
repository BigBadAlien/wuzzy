export declare function jarowinkler(a: string | Array<string>, b: string | Array<string>, threshold?: number): number;
export declare function levenshtein(a: string | Array<string>, b: string | Array<string>, options?: {d: number, i: number, s: number}): number;
export declare function ngram(a: string | Array<string>, b: string | Array<string>, ng?: number): number;
export declare function pearson(a: {[key: string]: number}, b: {[key: string]: number}): number;
export declare function jaccard(a: string | Array<string>, b: string | Array<string>): number;
export declare function tanimoto(a: string | Array<string>, b: string | Array<string>): number;
