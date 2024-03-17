
export function addPercentages(percent1: string, percent2: string) {
    const percent1Num = parseInt(percent1.replace('%', ''));
    const percent2Num = parseInt(percent2.replace('%', ''));
    const sum = percent1Num + percent2Num;
    return `${sum}%`;
}

export function toPercentage(num: number) {
    return `${num * 100}%`;
}
