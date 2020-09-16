import axios from 'axios';

export const getBillDetailListFrmApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/ChiTietHoaDon`
    })
    return response;
}
export const addBillDetailFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/ChiTietHoaDon`,
        data
    });
    return response;
}
