export const copyObjectsInState = (items, itemId, objPropName, newObjProps) => {
    return items.map(item => {
        if(item[objPropName] === itemId){
            return {...item, ...newObjProps}
        }
        return item;
    })
}