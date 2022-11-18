export const existenceCheck = (array) => {
    const existingArray = [];
    array.forEach(item => {
        if (!item.deleted && !item.dead) {
            existingArray.push(item)
        }
        /* else {
                   console.log('коммент удален', item);
               } */
    });

    return existingArray;

}