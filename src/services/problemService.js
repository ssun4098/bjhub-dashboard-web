import ServerApiClient from "../api/ApiClient";

const getProblemList = async (page, size, repositoryId) => {
    const response = await ServerApiClient.get('/v1/problems', {
        params: {
            page, size, repositoryId
        }
    });
    return response.data.data;
}

export default getProblemList;