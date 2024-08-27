export const capitalizeEachWord = (str: string): string => {
    const string = str.trim();
    const result = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ).join(' ')
    return result
}