import axios from 'axios';

export const getTimeListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/ThongBao`
    })
    return response;
}

export const updateNotificationFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/ThongBao/${data.maThongBao}`,
        data
    });
    return response;
}

export const deleteNotificationFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/ThongBao/${data}`,
    });
    return response;
}

export const addNotificationFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/ThongBao`,
        data
    });
    return response;
}
