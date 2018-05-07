//
// function login() {
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let remember = document.getElementById("remember").value;
//     // if(remember == "1") {
//     //     document.getElementById("username").value = username;
//     //     document.getElementById("password").value = password;
//     // }
//     if (username === "" || password === "") {
//         alert("用户名及密码不能为空，请您重新输入！");
//     }
//     else {
//         $(function() {
//             $.ajax({
//                 type: 'POST',
//                 url: baseURL + loginAdmin,
//                 data: {
//                     'username': username,
//                     'password': password
//                 },
//                 contentType: 'application/json; charset=utf-8',
//                 success: function (res, status, xhr) {
//                     if (res.status == 0) {
//                         let token = xhr.getResponseHeader('authorization');
//                         console.log(token);
//                         localStorage.setItem('verification', token);
//                         window.location.href = 'index.html';
//                     } else {
//                         alert("对不起！您的账号或密码出现错误！请仔细检查！");
//                     }
//                 }
//             });
//         });
//     }
// }

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").value;
    // console.log(username);

    if(username===""||password===""){
        alert("用户名及密码不能为空，请您重新输入！");
    }else{
        $.ajax({
            type: 'POST',
            url: baseURL + loginAdmin,
            data: JSON.stringify({
                'username':username,
                'password':password
            }),
            contentType: 'application/json; charset=utf-8',
            success: function(res,status,xhr) {
                if(res.status == 0){
                    var token = xhr.getResponseHeader('authorization');
                    // console.log(token);
                    localStorage.setItem('verification',token);
                    window.location.href = 'index.html';
                } else {
                    alert("对不起！您的账号或密码出现错误！请仔细检查！");
                }
            }
        })
    }
}

