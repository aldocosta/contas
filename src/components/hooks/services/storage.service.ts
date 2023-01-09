const saveStorage = (storageName: string, storage: string) => {
    localStorage.setItem(storageName, storage)
}

const retrieveStorage = (storageName: string) => {
    const ls: any = localStorage.getItem(storageName)
    return JSON.parse(ls)
}

const StorageService = {
    saveStorage,
    retrieveStorage
}

export default StorageService