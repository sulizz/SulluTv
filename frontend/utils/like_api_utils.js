// export const postLikeToVideo = (video_id, liked) => (
//     $.ajax({
//         method: 'POST',
//         url: '/api/likes',
//         data: { like: {liked, video_id}}
//     })
// )

export const postLikeToVideo = id => $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id },
});

export const deleteLikeFromVideo = id => $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data: { id },
});