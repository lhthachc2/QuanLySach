import axios from 'axios';

export const getReleaseListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/CongTyPhatHanh`
    })
    return response;
}

export const updateReleaseFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/CongTyPhatHanh/${data.maCongTy}`,
        data
    });
    console.log(response)
    return response;
}

export const deleteReleaseFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/CongTyPhatHanh/${data}`,
    });
    return response;
}

export const addReleaseFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/CongTyPhatHanh`,
        data
    });
    return response;
}
