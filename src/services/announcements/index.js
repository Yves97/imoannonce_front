import { baseUrl } from "../../config/base/baseUrl";


export const getAnnouncements = async () => {
    const rootApi = `${baseUrl}announcement`
    const options = {
        method : 'GET'
    }
    const response = await fetch(rootApi,options)
    return await response
}
export const getAnnouncement = async (id) => {
    const rootApi = `${baseUrl}announcement/${id}`
    const options = {
        method : 'GET'
    }
    const response = await fetch(rootApi,options)
    return await response
}

export const deleteAnnonce = async (id) => {
    const rootApi = `${baseUrl}announcement/${id}`
    const options = {
        method : 'DELETE'
    }
    const response = await fetch(rootApi,options)
    return await response

}