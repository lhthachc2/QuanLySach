import axios from 'axios';

export const getListBookFrmApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/Sach`,
    });

    return response;
}

export const updateBookFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/Sach/${data.maSach}`,
        data
    });
    console.log(response)
    return response;
}

export const deleteBookFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/Sach/${data}`,
    });
    return response;
}

export const addBookFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/Sach`,
        data
    });
    return response;
}

