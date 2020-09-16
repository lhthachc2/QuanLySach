import axios from 'axios';

export const getInfoListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/ThietBi`
    })
    return response;
}
export const postNotificationFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/PushNotification`,
        data
    });
    return response;
}