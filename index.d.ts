declare function jarowinkler(a: string | Array<string>, b: string | Array<string>, threshold?: number): number;
declare function levenshtein(a: string | Array<string>, b: string | Array<string>, options?: {d: number, i: number, s: number}): number;
declare function ngram(a: string | Array<string>, b: string | Array<string>, ng?: number): number;
declare function pearson(a: {[key: string]: number}, b: {[key: string]: number}): number;
declare function jaccard(a: string | Array<string>, b: string | Array<string>): number;
declare function tanimoto(a: string | Array<string>, b: string | Array<string>): number;
