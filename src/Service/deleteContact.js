import HttpRequest from "./index";

export const deleteContact = async (id) => {

    try {
        const response = await HttpRequest({
            method: "DELETE",
            url: `contact/${id}`
        })
        return response

    } catch (error) {
        return error
    }


}