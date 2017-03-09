declare function jarowinkler(a: string | Array, b: string | Array, threshold?: number): number;
declare function levenshtein(a: string | Array, b: string | Array, options?: {d: number, i: number, s: number}): number;
declare function ngram(a: string | Array, b: string | Array, ng?: number): number;
declare function pearson(a: {[key: string]: number}, b: {[key: string]: number}): number;
declare function jaccard(a: string | Array, b: string | Array): number;
declare function tanimoto(a: string | Array, b: string | Array): number;
