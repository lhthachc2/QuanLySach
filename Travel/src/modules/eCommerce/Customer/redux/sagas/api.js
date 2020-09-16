import axios from 'axios';

export const getCustomerListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/KhachHang`
    })
    return response;
}

export const updateCustomerFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/KhachHang/${data.maKhachHang}`,
        data
    });
    return response;
}

export const deleteCustomerFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/KhachHang/${data}`,
    });
    return response;
}

export const addCustomerFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/KhachHang`,
        data
    });
    return response;
}
