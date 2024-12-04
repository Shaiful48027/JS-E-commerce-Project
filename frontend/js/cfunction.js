export const sliceTitle = (title) => {
    const result = title.length > 50 ? title.slice(0, 45) + '...' : title;
    return result;
};