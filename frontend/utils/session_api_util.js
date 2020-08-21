

//takes in a user obj 
//returns ajax request

//signUp
export const postUser = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }, //data nested on key word of user 
    })
);

//login 
export const postSession = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user },
    })
);

//login demo user 
export const getDemoUser = (userid) => (
    $.ajax({
        method:'GET',
        url:`/api/users/28`
    })
)

//logOut
export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
);