import HttpRequest from "./index";

export const UpdateContact = async (senddata, id) => {
    try {
        const response = await HttpRequest({
            method: "PUT",
            data: senddata,
            url: `contact/${id}`
        })
        return response

    } catch (error) {
        return error
    }


}