import {create} from "zustand"

const counterStores = create(()=>({
    count:1
}))

export default counterStores;