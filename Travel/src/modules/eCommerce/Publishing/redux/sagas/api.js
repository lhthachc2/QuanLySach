import axios from 'axios';

export const getPublishingListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/NhaXuatBan`
    })
    return response;
}

export const updatePublishingFrmApi = async (data) => {
    const response = await axios({
        method: 'put',
        url: `${process.env.APP_URL}/NhaXuatBan/${data.maNhaXuatBan}`,
        data
    });
    return response;
}

export const deletePublishingFrmApi = async (data) => {
    const response = await axios({
        method: 'delete',
        url: `${process.env.APP_URL}/NhaXuatBan/${data}`,
    });
    return response;
}

export const addPublishingFrmApi = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/NhaXuatBan`,
        data
    });
    return response;
}
