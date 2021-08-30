export const followUserStatusSelector = async (dispatch, userId, actionCreator, loadingProgress, apiMethod) => {
    dispatch(loadingProgress(userId, true));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(loadingProgress(0, false));
    }
}

