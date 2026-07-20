import api from "../utils/axios";

const getCurrrnetUser=async () => {
    try {
        const {data}= await api.get("/api/me")

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getCurrrnetUser;