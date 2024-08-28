$(document).ready(function () {
    let token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
        $.ajax({
            url: 'http://localhost:8080/api/v1/blog/newMethod',
            method: 'GET',
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + token
            },

            success: function (response) {
                console.log(response);
                $("#hello").append(response)
            },

            error: function (error) {
                console.log(error);
            }
        });
    } else {
        window.location.href = 'signIn.html';
    }
})

function logOut() {
    localStorage.removeItem("token");
    window.location.href = "signIn.html"
}

