import HttpRequest from "./index";

export const CreateContact = async (senddata) => {
    try {
        const response = await HttpRequest({
            method: "POST",
            data: senddata,
            url: "contact"
        })
        return response

    } catch (error) {
        return error
    }


}