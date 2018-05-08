const header = `
    <div class= "header">
        <div class="left-top">神木app管理后台</div>
        <div class="right-top">
            <button id="btn1" class="btn btn-primary" type="button" onclick="routing();">上传新资讯</button>
            <button id="btn2" class="btn btn-primary" disabled>App资讯列表</button>
        </div>
    </div>
`;
const footer = `
    <div class="footer">
        <span>版权所有 神木市政府 &copy 2018</span>
    </div>
`;
$(function(){
    $("header").html(header);
    $("footer").html(footer);

    // $.ajax({
    //     type: 'GET',
    //     url: baseURL + getNews,
    //     header: localStorage.getItem('verification'),
    //     data: {
    //         'type': 0,
    //         'status': 0,
    //         'pageNum': 1
    //     },
    //     success: function(res,status){
    //         console.log(res.data);
    //     }
    // })
});
function routing() {
    window.location.href = 'update_information.html';
}
var type;
var state;
var pageNum = 1;
var title = new Array();
var author = new Array();
var time = new Array();
let val1 = document.getElementById("dropdownMenu").innerText;
// console.log(val1);
// let val2 = document.getElementById("dropdownMenu1").innerText;
// console.log(val2);
function proceedData(data){
    for(let i = 0; i < data.length; i++){
        title[i] = data[i].title;
        author[i] = data[i].author;
        time[i] = data[i].createTime.substring(0,10);
    }
}

function menuBtn(which) {
    type = which.getAttribute('id');
    let typeValue = document.getElementById(type).innerText;
    // console.log(type);
    // console.log(a_value);
    document.getElementById("dropdownMenu").innerText = typeValue;
}
function menuBtn1(which) {
    let status = which.getAttribute('id');
    let statusValue = document.getElementById(status).innerText;
    if(status === 'online')
         state = 0;
    if(status === 'delete')
         state = 1;
    // console.log(type);
    // console.log(a_value);
    if(document.getElementById("dropdownMenu").innerText === val1){
        alert("请您先选择资讯类型！");
    }
    else {
        document.getElementById("dropdownMenu1").innerText = statusValue;
        $.ajax({
            // beforeSend: function (request) {
            //     request.setRequestHeader('Authorization', localStorage.getItem('verification'));
            // },
            type: 'GET',
            headers: {'Authorization':localStorage.getItem('verification')},//Authorization
            url: baseURL + getNews,
            data: {
                'type': type,
                'status': state,
                'pageNum': pageNum
            },
            success: function (res,status) {
                let data = res.data;
                if(res.status === 0){
                    // console.log(res.data);
                    proceedData(data);

                    for(let i = 0; i < data.length; i++){
                    let tempInf = `
                        <div class="row">
                            <div class="col-sm-5 col-md-5 col-1">
                                <span class="inf-title">${title[i]}</span>
                            </div>
                            <div class="col-sm-2 col-md-2 col-2">
                                <span class="inf-title" >${author[i]}</span>
                            </div>
                            <div class="col-sm-3 col-md-3 col-3" >
                                <span class="inf-title" >${time[i]}</span>
                            </div>
                            <div class="col-sm-2 col-md-2 col-4">
                                <span class="inf-title"><a id="${i}" style="text-decoration: none;">查看</a></span>
                            </div>
                        </div> `
                    }
                }
            }
        })
    }
}
