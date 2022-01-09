import HttpRequest from "./index";

export const getContact = async () => {

    try {
        const response = await HttpRequest({
            method: "GET",
            url: "contact"
        })
       return response

    } catch (error) {
        return error
    }


}