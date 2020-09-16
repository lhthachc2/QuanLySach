import axios from 'axios';

export const getListAuthorFrmApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/TacGia`,
    });

    return response;
}

export const updateAuthorFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/TacGia/${data.maTacGia}`,
        data
    });
    return response;
}

export const deleteAuthorFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/TacGia/${data}`,
    });
    return response;
}

export const addAuthorFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/TacGia`,
        data
    });
    return response;
}

