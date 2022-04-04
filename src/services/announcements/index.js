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

export const updateAnnonce = async (id,title,description,image) => {
    const rootApi = `${baseUrl}announcement/${id}`
    const DATA = new FormData()
    DATA.append('title',title)
    DATA.append('description',description)
    DATA.append('image',image)
    const options = {
        method : 'PATCH',
        body : DATA
    }
    const response = await fetch(rootApi,options)
    return await response
}

export const create = async (title,description,image) => {
    const rootApi = `${baseUrl}announcement`
    const DATA = new FormData()
    DATA.append('title',title)
    DATA.append('description',description)
    DATA.append('image',image)
    const options = {
        method : 'POST',
        body : DATA
    }
    const response = await fetch(rootApi,options)
    return await response

}