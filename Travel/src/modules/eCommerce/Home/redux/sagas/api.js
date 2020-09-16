import axios from 'axios';

export const getTypeBookListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/TheLoai`
    })
    return response;
}

export const updateTypeBookFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/TheLoai/${data.maSach}`,
        data
    });
    console.log(response)
    return response;
}

export const deleteTypeBookFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/TheLoai/${data}`,
    });
    return response;
}

export const addTypeBookFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/TheLoai`,
        data
    });
    return response;
}
