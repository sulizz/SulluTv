import * as VideoAPIUtil from '../utils/videos_api_utils';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

const removeVideo = (videoId) => ({
    type: REMOVE_VIDEO,
    videoId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

//thunk action 
export const requestAllVideos = () => dispatch => {
    return VideoAPIUtil.fetchAllvideos()
        .then(videos => dispatch({
            type: RECEIVE_VIDEOS,
            videos
        }))
        .fail(err => dispatch(receiveErrors(err.responseJSON)))
    };

export const requestVideo = (videoId) => dispatch => {
    
    return VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)))
};

export const createVideo = (video) => dispatch => (
    VideoAPIUtil.createVideo(video)
    .then(video => dispatch(receiveVideo(video))) 
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateVideo = (video, videoId) => dispatch => (
    VideoAPIUtil.updateVideo(video, videoId)
    .then(video => dispatch(receiveVideo(video))) 
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteVideo = (videoId) => dispatch => (
    VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

