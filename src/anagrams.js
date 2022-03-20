import { getLetterCount } from './letter-count';
import { isDeepStrictEqual } from 'util';

export const isAnagram = (string1, string2) => {
    // remove spaces and ignore case:
    const str1 = string1.replace(/\s/g, '').toLowerCase();
    const str2 = string2.replace(/\s/g, '').toLowerCase();

    // count letters:
    const letterCount1 = getLetterCount(str1);
    const letterCount2 = getLetterCount(str2);

    return isDeepStrictEqual(letterCount1, letterCount2);
}
