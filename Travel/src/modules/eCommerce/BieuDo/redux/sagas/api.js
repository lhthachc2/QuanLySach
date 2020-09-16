import axios from 'axios';

export const getReveneuFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/ThongKeDoanhThu`,
        data,
    });
    return response;
}
export const getTypeProductListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/ThongKeSanPham`
    })
    return response;
}
