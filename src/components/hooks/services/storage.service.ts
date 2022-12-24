const saveStorage = async (storageName: string, storage: string) => {
    localStorage.setItem(storageName,storage)
}

const retrieveStorage = async (storage: string, storageName: string) => {
    localStorage.getItem(storageName)
}

const StorageService = {
    saveStorage,
    retrieveStorage
}

export default StorageService