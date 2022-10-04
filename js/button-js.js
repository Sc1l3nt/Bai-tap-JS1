// Biến
var loai;
var quangDuong;
var delay;

function input(flag){
    // Loại Xe
    var selector = document.getElementsByName('selector');
    for (var index = 0; index < selector.length; index++){
        if(selector[index].checked){
            loai = index;
            flag = false;
            break;
        } 
    }
    if(flag){
        alert('Vui lòng chộn loại xe.');
    }
    
    // Quãng Đường
    quangDuong = Number(document.getElementById('quangDuong').value);
    if(!(quangDuong > 0)){
        alert('Vui lòng nhập đúng số km.');
        flag = true;
    }

    // Thời Gian Chờ
    delay = Number(document.getElementById('delay').value);
    if(!(delay >= 0)){
        alert('Vui lòng nhập đúng thời gian chờ');
        flag = true;
    }
    return flag;
}

function renderTable(uBers){
    // div2
    var div2 = document.createElement('div');
    div2.style.position = 'absolute';
    div2.style.zIndex = '10';
    div2.style.width = '100%';
    div2.style.height = '100%';
    div2.style.top = '0';
    div2.style.left = '0';
    div2.style.background = 'rgba(0, 0, 0, 0.8)';

    // div3
    var div3 = document.createElement('div');
    div3.style.width = '550px';
    div3.style.margin = 'auto';
    div3.style.padding = '10px';
    div3.style.background = '#ffffff';

    // Table
    var table = document.createElement('table');
    table.className = 'table';

    // Content
    var content = `
        <tr><td>Hóa Đơn</td></tr>
        <tr>
            <td>Chi tiết</td>
            <td>Sử dụng</td>
            <td>Đơn giá</td>
            <td>Thành tiền</td>
        </tr>
    `;
    var tongTien = uBers.tinhTongTien(quangDuong, delay);
    if(uBers.quangDuong1 != 0){
        content += `
            <tr>
                <td>${uBers.name}</td>
                <td>${uBers.quangDuong1} km</td>
                <td>${uBers.loai1} vnd</td>
                <td>${uBers.tongLoai1} vnd</td>
            </tr>
        `;
    }
    if(uBers.quangDuong2 != 0){
        content += `
            <tr>
                <td>${uBers.name}</td>
                <td>${uBers.quangDuong2} km</td>
                <td>${uBers.loai2} vnd</td>
                <td>${uBers.tongLoai2} vnd</td>
            </tr>
        `;
    }
    if(uBers.quangDuong3 != 0){
        content += `
            <tr>
                <td>${uBers.name}</td>
                <td>${uBers.quangDuong3} km</td>
                <td>${uBers.loai3} vnd</td>
                <td>${uBers.tongLoai3} vnd</td>
            </tr>
        `;
    }
    content += `
        <tr>
            <td>Thời gian chờ</td>
            <td>${delay} phút</td>
            <td>${uBers.delay} vnd</td>
            <td>${uBers.tongDelay} vnd</td>
        </tr>
        <tr class='text-success' style='background: rgba(0, 250, 0, 0.2)'>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>${tongTien} vnd</td>
        </tr>
    `;
    
    // Button
    var btn = document.createElement('button');
    btn.style.marginLeft = '450px'
    btn.className = 'btn btn-secondary';
    btn.innerHTML = 'Close';
    btn.onclick = function(){
        div2.remove();
    }

    // In
    table.innerHTML = content;
    div3.appendChild(table);
    div3.appendChild(btn);
    div2.appendChild(div3);
    var div1 = document.querySelector('#div1');
    div1.appendChild(div2);
}

document.getElementById('tinhTien').onclick = function(){
    var flag = true;

    // Input
    flag = input(flag);

    // Out
    if(!flag){
        // Tạo Uber
        var Uber = new uBer();
        Uber.phanLoai(loai);

        document.getElementById('divThanhTien').style.display = 'block';
        document.getElementById('xuatTien').innerHTML = Uber.tinhTongTien(quangDuong, delay);
    }
}

document.getElementById('hoaDon').onclick = function(){
    // Input
    var flag = true;
    flag = input(flag);

    // Output
    if(!flag){
        // Tạo Uber
        var Uber = new uBer();
        Uber.phanLoai(loai);

        renderTable(Uber);
    }
}