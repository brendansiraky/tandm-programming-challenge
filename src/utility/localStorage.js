export function setItemInLocalStorage(itemName, objToSet) {
    localStorage.setItem(itemName, JSON.stringify(objToSet))
}

export function getItemFromLocalStorage(itemName) {
    const item = localStorage.getItem(itemName)

    if (item !== null) {
        const parsedItem = JSON.parse(item)
        return parsedItem
    }

    return null
}

export function removeItemInLocalStorage(itemName) {
    localStorage.removeItem(itemName)
}
