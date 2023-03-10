for (var num_apt of [101,102,103,104]){
    var dict_HSDP_success = {}
    let arr_address_1 = []
    let arr_address_2 = []
    let arr_address_3 = []
    let arr_address_4 = []
    let arr_address_5 = []
    let arr_address_6 = []
    let arr_address_7 = []
    let arr_address_8 = []
    let arr_address_9 = []


    for (var i = 0; i < (list_HSDP_web.length/7); i++){

    if (list_HSDP_web[i*7+3] == num_apt){

    /*  num_apt 동 일경우 핑테스트 진행
    핑테스트가 들어가야 할 문단
    핑테스트는 리스트 현재 index에서 
    -1 : HSDP Client IP
    -2 : Wallpad IP
    성공, 실패여부를 딕셔너리에 호수와 함께 저장
    핑테스트 작성전까지는 성공으로 분류
    성공 - normal 이상 - warning 연결실패 - connection_error
    */
    bool_pingtest = JSON.parse(list_HSDP_web[i*7+6].toLowerCase())
    if(bool_pingtest === true){
     str_clientIP_status = "normal"
    }else if(bool_pingtest === false){
     str_clientIP_status = "connection_error"
    }else {
     str_clientIP_status = "warning"
    }

    dict_HSDP_success[list_HSDP_web[i*7+4]] = str_clientIP_status; //- 성공 분류 코드, 딕셔너리에 모두 성공 저장
    let int_address = list_HSDP_web[i*7+4].charAt(list_HSDP_web[i*7+4].length-1);
    //- 호수 뒷자리에 따라 리스트에 분류
    switch(int_address){
    case '1' :
    arr_address_1.push(list_HSDP_web[i*7+4]);
    break;
    case '2' :
    arr_address_2.push(list_HSDP_web[i*7+4]);
    break;
    case '3' :
    arr_address_3.push(list_HSDP_web[i*7+4]);
    break;
    case '4' :
    arr_address_4.push(list_HSDP_web[i*7+4]);
    break;
    case '5' :
    arr_address_5.push(list_HSDP_web[i*7+4]);
    break;
    case '6' :
    arr_address_6.push(list_HSDP_web[i*7+4]);
    break;
    case '7' :
    arr_address_7.push(list_HSDP_web[i*7+4]);
    break;
    case '8' :
    arr_address_8.push(list_HSDP_web[i*7+4]);
    break;
    case '9' :
    arr_address_9.push(list_HSDP_web[i*7+4]);
    break;
    };


    }
    }

  //- 배열들의 크기를 담은 배열, 해당 코드를 수정 가능할경우 수정할 것
var arr_Alladress = [arr_address_1.length, arr_address_2.length, arr_address_3.length, arr_address_4.length, arr_address_5.length, arr_address_6.length, arr_address_7.length, arr_address_8.length, arr_address_9.length]
var num_Maxarrsize = Math.max(...arr_Alladress)
const div_status = document.getElementById("div_status")
const div_indicate_status = document.createElement("div")
div_indicate_status.setAttribute("style","width:auto;float:left;margin-right:30px")
div_status.appendChild(div_indicate_status)

const div_indicate_address = document.createElement("div")
div_indicate_address.setAttribute("class","div_part_status_title")
const p_indicate_address = document.createElement("h3")
p_indicate_address.setAttribute("style","text-align:center;border:1px solid black")
const p_indicate_address_text = document.createTextNode(num_apt+"동")
p_indicate_address.appendChild(p_indicate_address_text)
div_indicate_address.appendChild(p_indicate_address)
div_indicate_status.appendChild(div_indicate_address)

const div_isnan_address = document.createElement("div")
div_isnan_address.setAttribute("class","div_part_status_title")
div_indicate_status.appendChild(div_isnan_address)

if (arr_address_1.length != 0){
    //- 뒷자리 1의 경우 태그 생성 반복문
    const div_last1 = document.createElement("div");
    div_last1.setAttribute("id","div_last1")
    div_last1.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last1);
    int_isnan = 0

    for (arr of arr_address_1){
        const p_last1 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last1.appendChild(p_text);
        p_last1.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last1.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last1.setAttribute("style","margin:1px;width:50px;float:left")
            div_isnan_address.appendChild(p_last1);
            int_isnan++}
        else{ div_last1.prepend(p_last1);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_1.length + int_isnan; i++){
        const p_last1 = document.createElement("p");
        const p_text = document.createTextNode("1111");
        p_last1.appendChild(p_text);
        p_last1.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last1.setAttribute("class","indicate_normal")
        div_last1.prepend(p_last1);
    }
}if (arr_address_2.length != 0){
    //- 뒷자리 2의 경우 태그 생성 반복문
    const div_last2 = document.createElement("div");
    div_last2.setAttribute("id","div_last2")
    div_last2.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last2);
    int_isnan = 0

    for (arr of arr_address_2){
        const p_last2 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last2.appendChild(p_text);
        p_last2.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last2.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last2.setAttribute("style","margin:1px;width:50px;float:left")
            div_isnan_address.appendChild(p_last2);
            int_isnan++}
        else{ div_last2.prepend(p_last2);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_2.length + int_isnan; i++){
        const p_last2 = document.createElement("p");
        const p_text = document.createTextNode("2222");
        p_last2.appendChild(p_text);
        p_last2.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last2.setAttribute("class","indicate_normal")
        div_last2.prepend(p_last2);
    }
}
if (arr_address_3.length != 0){
    //- 뒷자리 3의 경우 태그 생성 반복문
    const div_last3 = document.createElement("div");
    div_last3.setAttribute("id","div_last3")
    div_last3.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last3);
    int_isnan = 0

    for (arr of arr_address_3){
        const p_last3 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last3.appendChild(p_text);
        p_last3.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last3.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last3.setAttribute("style","margin:1px;width:50px;float:left")
            div_isnan_address.appendChild(p_last3);
            int_isnan++}
        else{ div_last3.prepend(p_last3);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_3.length + int_isnan; i++){
        const p_last3 = document.createElement("p");
        const p_text = document.createTextNode("3333");
        p_last3.appendChild(p_text);
        p_last3.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last3.setAttribute("class","indicate_normal")
        div_last3.prepend(p_last3);
    }
}

if (arr_address_4.length != 0){
    //- 뒷자리 4의 경우 태그 생성 반복문
    const div_last4 = document.createElement("div");
    div_last4.setAttribute("id","div_last4")
    div_last4.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last4);
    int_isnan = 0
    for (arr of arr_address_4){
        const p_last4 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last4.appendChild(p_text);
        p_last4.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last4.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last4.setAttribute("style","margin:1px;width:50px;float:left");
            div_isnan_address.appendChild(p_last4);
            int_isnan++}
        else{ div_last4.prepend(p_last4);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_4.length+int_isnan; i++){
        const p_last4 = document.createElement("p");
        const p_text = document.createTextNode("4444");
        p_last4.appendChild(p_text);
        p_last4.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last4.setAttribute("class","indicate_normal")
        div_last4.prepend(p_last4);
    }

}
if (arr_address_5.length != 0){
    //- 뒷자리 5의 경우 태그 생성 반복문
    const div_last5 = document.createElement("div");
    div_last5.setAttribute("id","div_last5")
    div_last5.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last5);
    int_isnan = 0;

    for (arr of arr_address_5){
        const p_last5 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last5.appendChild(p_text);
        p_last5.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last5.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last5.setAttribute("style","margin:3px;width:50px;float:left");
            div_is.appendChild(p_last5);
            int_isnan++}
        else{ div_last5.prepend(p_last5);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_5.length+int_isnan; i++){
        const p_last5 = document.createElement("p");
        const p_text = document.createTextNode("5555");
        p_last5.appendChild(p_text);
        p_last5.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last5.setAttribute("class","indicate_normal")
        div_last5.prepend(p_last5);
    }

}
if (arr_address_6.length != 0){
    //- 뒷자리 6의 경우 태그 생성 반복문
    const div_last6 = document.createElement("div");
    div_last6.setAttribute("id","div_last6")
    div_last6.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last6);
    int_isnan = 0

    for (arr of arr_address_6){
        const p_last6 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last6.appendChild(p_text);
        p_last6.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last6.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last6.setAttribute("style","margin:3px;width:50px;float:left");
            div_isnan_address.appendChild(p_last6);
            int_isnan++}
        else{ div_last6.prepend(p_last6);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_6.length + int_isnan; i++){
        const p_last6 = document.createElement("p");
        const p_text = document.createTextNode("6666");
        p_last6.appendChild(p_text);
        p_last6.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last6.setAttribute("class","indicate_normal")
        div_last6.prepend(p_last6);
    }
}
if (arr_address_7.length != 0){
    //- 뒷자리 7의 경우 태그 생성 반복문
    const div_last7 = document.createElement("div");
    div_last7.setAttribute("id","div_last7")
    div_last7.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last7);
    int_isnan = 0
    for (arr of arr_address_7){
        const p_last7 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last7.appendChild(p_text);
        p_last7.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last1.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last7.setAttribute("style","margin:3px;width:50px;float:left");
            div_isnan_address.appendChild(p_last7);
            int_isnan++}
        else{ div_last7.prepend(p_last7);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_7.length+int_isnan; i++){
        const p_last7 = document.createElement("p");
        const p_text = document.createTextNode("7777");
        p_last7.appendChild(p_text);
        p_last7.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last7.setAttribute("class","indicate_normal")
        div_last7.prepend(p_last7);
    }
}
if (arr_address_8.length != 0){
    //- 뒷자리 8의 경우 태그 생성 반복문
    const div_last8 = document.createElement("div");
    div_last8.setAttribute("id","div_last8")
    div_last8.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last8);
    int_isnan = 0
    for (arr of arr_address_8){
        const p_last8 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last8.appendChild(p_text);
        p_last8.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last8.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last8.setAttribute("style","margin:3px;width:50px;float:left");
            div_isnan_address.appendChild(p_last8);
            int_isnan++}
        else{ div_last8.prepend(p_last8);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_8.length+int_isnan; i++){
        const p_last8 = document.createElement("p");
        const p_text = document.createTextNode("8888");
        p_last8.appendChild(p_text);
        p_last8.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last8.setAttribute("class","indicate_normal")
        div_last8.prepend(p_last8);
    }
}
if (arr_address_9.length != 0){
    //- 뒷자리 9의 경우 태그 생성 반복문
    const div_last9 = document.createElement("div");
    div_last9.setAttribute("id","div_last9")
    div_last9.setAttribute("class","div_part_status")
    div_indicate_status.appendChild(div_last9);
    int_isnan = 0

    for (arr of arr_address_9){
        const p_last9 = document.createElement("p");
        const p_text = document.createTextNode(arr);
        p_last9.appendChild(p_text);
        p_last9.setAttribute("class","indicate_"+dict_HSDP_success[arr])
        p_last9.setAttribute("style","margin:1px;width:45px;")
        if(isNaN(arr)){
            p_last3.setAttribute("style","margin:3px;width:50px;float:left");
            div_isnan_address.appendChild(p_last9);
            int_isnan++}
        else{ div_last9.prepend(p_last9);}
    }
    //- 높이 맞춤용도의 p태그 생성
    for (let i = 0; i < num_Maxarrsize-arr_address_9.length+int_isnan; i++){
        const p_last9 = document.createElement("p");
        const p_text = document.createTextNode("9999");
        p_last9.appendChild(p_text);
        p_last9.setAttribute("style","visibility:hidden;margin:1px;width:45px;")
        p_last9.setAttribute("class","indicate_normal")
        div_last9.prepend(p_last9);
    }
}



}