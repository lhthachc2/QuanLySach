import axios from 'axios';

export const getBillListFrmApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/HoaDon`
    })
    return response;
}

export const updateBillFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/HoaDon/${data.maHoaDon}`,
        data
    });
    return response;
}

export const deleteBillFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/HoaDon/${data}`,
    });
    return response;
}

export const addBillFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/HoaDon`,
        data
    });
    return response;
}
