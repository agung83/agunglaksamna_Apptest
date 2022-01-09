import HttpRequest from "./index";

export const getContactById = async (id) => {

    try {
        const response = await HttpRequest({
            method: "GET",
            url: `contact/${id}`
        })
        return response

    } catch (error) {
        return error
    }


}