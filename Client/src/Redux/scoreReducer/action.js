



export const getMyscore = (payload) => (dispatch) => {
    axios.get("http://localhost:8080/compare", payload)
        .then(res => {
            const { response } = res

        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
}
