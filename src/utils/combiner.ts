type Combiner = number | string;

export const combiner = (part1: Combiner, part2: Combiner): string => {
    let result;
    if(typeof part1 == 'number' && typeof part2 == 'number'){
        
        result = part1 + part2;
    } else {
        result = part1.toString() + part2.toString();
    }

    return result.toString();
};