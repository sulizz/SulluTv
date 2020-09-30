export const fetchAllvideos = () => (
    $.ajax({
        method: 'GET',
        url: "/api/videos"
    })
)

export const fetchVideo = videoId => {
    debugger 
    return $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}`
    })
}

export const createVideo = (video) => (
    $.ajax({
        method:'POST',
        url:`api/videos`,
        data: video,
        contentType: false,
        processData: false
    })
)
export const updateVideo = (formData, videoId) => {
    return $.ajax({
        method:'PATCH',
        url: `api/videos/${videoId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deleteVideo = (videoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
)