import { baseUrl } from "../../config/base/baseUrl";


export const getAnnouncements = async () => {
    const rootApi = `${baseUrl}announcement`
    const options = {
        method : 'GET'
    }
    const response = await fetch(rootApi,options)
    return await response
}
