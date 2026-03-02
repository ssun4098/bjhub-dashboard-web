import ServerApiClient from "../api/ApiClient";

const getAlgorithmStat = async (
    {
    repositoryId
    }
) => {
    const response = await ServerApiClient.get('/v1/algorithms/stat', {
        params: {
            repositoryId
        }
    });
    return response.data;
}

export default getAlgorithmStat;