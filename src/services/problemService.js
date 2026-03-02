import ServerApiClient from "../api/ApiClient";

const getProblemList = async (
    {page, 
    size, 
    repositoryId,
    startDate,
    endDate}
) => {
    const response = await ServerApiClient.get('/v1/problems', {
        params: {
            page, size, repositoryId, startDate, endDate
        }
    });
    return response.data.data;
}

export default getProblemList;