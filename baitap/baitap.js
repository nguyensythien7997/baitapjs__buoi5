// bước 1: nhập dữ liệu đầu vào từ người dùng
    // -Nhập điểm 3 môn thi
    // -nhập vùng ưu tiên
    // -nhập đối tượng ưu tiên

// bươc 2: xử lý dữ liệu
    // gán dữ liệu nhập vào cho các biến tương ứng
    // điểm ba môn thi:
        // toán                = a
        // lý                  = b
        // hoá                 = c
        // vùng ưu tiên        = d
        // đối tượng ưu tiên   = e
    // xử lý :
        // nếu a, b c > 0 thì xét tới điều kiện tiếp theo
function tinhketqua()
{
    var a = +document.getElementById("bt1__math").value;
    var b = +document.getElementById("bt1__physics").value;
    var c = +document.getElementById("bt1__bio").value;
    var d = +document.querySelector('input[name="vung"]:checked').value;
    var e = +document.querySelector('input[name="doituong"]:checked').value;
    console.log(d, e);
    var i = (a + b + c) / 3 + d + e;
    console.log(i);
        // nếu không có môn nào bị điểm 0 và điểm trung bình > 7 thì đậu kì thi
    if( a > 0 && b > 0 && c > 0 && i > 7)
    {
        document.getElementById("ketqua").innerHTML =`
        <div id="ketqua">Điểm trung bình = ${i}
                        Chúc mừng bạn đã đậu kì thi !!!
        </div>
        `
    }
        // nếu có môn bị 0 điểm và điểm trung bình < 7 thì rớt
    else
    {
        document.getElementById("ketqua").innerHTML =`
        <div id="ketqua">Điểm trung bình = ${i}
                        Cố gắng lần sau nhé !!!
        </div>
        `
    }
}

// bước 3 : xuất kết quả ra màn hình
    // nếu không có môn nào bị điểm 0 và điểm trung bình > 7 thì đậu kì thi
    // nếu có môn bị 0 điểm và điểm trung bình < 7 thì rớt



    // ------------------------------------------



    // bước 1 : xác đinh dữ liệu đầu vào
        // - tên khách hàng
        // - số điện tiêu thụ
    // bước 2 : gán các số liệu lấy được
        // - tên khách hàng = tenkhach
        // - số điện tiêu thụ = sodien
        // - thanhtien = 0
function inhoadon1()
{
    var tenkhach = document.getElementById("tenkhachhang").value;
    console.log('tenkhach:',tenkhach);
    var sodien = +document.getElementById("sodientieuthu").value;
    var thanhtien = 0;
    if (sodien > 0 && sodien <= 50)
    {
        thanhtien = sodien * 500;
    }
    else if (sodien > 50 && sodien <= 100)
    {
        thanhtien = 50 * 500 + ( sodien - 50 ) * 650;
    }
    else if (sodien > 100 && sodien <= 200)
    {
        thanhtien = 50 * 500 + 50 * 650 + ( sodien - 100 ) * 850;
    }
    else if (sodien > 200 && sodien <= 350)
    {
        thanhtien = 50 * 500 + 50 * 650 + 100 * 850 + ( sodien - 200 ) * 1100;
    }
    else if (sodien > 350)
    {
        thanhtien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ( sodien - 350 ) * 1300;
    }
    document.getElementById("hovaten").innerHTML=`<h6 id="hovaten">Khách hàng: ${tenkhach}</h6>`

    document.getElementById("sodiendatieuthu").innerHTML=` <h6 id="sodiendatieuthu">Số điện sử dụng: ${sodien} kw</h6>`

    document.getElementById("tongtienthanhtoan").innerHTML=` <h6 id="tongtienthanhtoan">Số tiền cần thanh toán: ${thanhtien}</h6>`
}
    // bước 3:
        // -xuất hoá đơn theo mỗi trường hợp số điện tiêu thụ.
        // in ra màn hình:
            // + họ và tên khách hàng
            // + số điện tiêu thụ
            // + số tiền cần thanh toán



 // ------------------------------------------


    // bước 1 : xác đinh dữ liệu đầu vào
        // - tên người nộp thuế
        // - thu nhập / năm
        // - số người phụ thuộc
    // // bước 2 : gán các số liệu lấy được
        // - tên người nộp thuế = nguoinopthue
        // - thu nhập / năm = thunhapnam
        // - số người phụ thuộc = songuoiphuthuoc
function tinhthue()
{
    var nguoinopthue = document.getElementById("tennguoinop").value;
    var thunhapnam = +document.getElementById("tongthunhap").value;
    var songuoiphuthuoc = +document.getElementById("nguoiphuthuoc").value;
    var thunhapnopthue = thunhapnam - 4 - songuoiphuthuoc * 1.6;
    var sothuephainop = 0;
    if (thunhapnopthue <= 60)
    {
        sothuephainop = thunhapnopthue * 0.05;
    }
    else if (thunhapnopthue > 60 && thunhapnopthue <= 120)
    {
        sothuephainop = thunhapnopthue * 0.1;
    }
    else if (thunhapnopthue > 120 && thunhapnopthue <= 210)
    {
        sothuephainop = thunhapnopthue * 0.15;
    }
    else if (thunhapnopthue > 210 && thunhapnopthue <= 384)
    {
        sothuephainop = thunhapnopthue * 0.2;
    }
    else if (thunhapnopthue > 384 && thunhapnopthue <= 624)
    {
        sothuephainop = thunhapnopthue * 0.25;
    }
    else if (thunhapnopthue > 624 && thunhapnopthue <= 960)
    {
        sothuephainop = thunhapnopthue * 0.3;
    }
    else if (thunhapnopthue > 960)
    {
        sothuephainop = thunhapnopthue * 0.35;
    }
    document.getElementById("hotennguoinop").innerHTML=` <h6 id="hotennguoinop">Người nộp thuế: ${nguoinopthue}</h6>`
    
    document.getElementById("thunhapmoinam").innerHTML=` <h6 id="thunhapmoinam">Tổng thu nhập mỗi năm: ${thunhapnam}</h6>`
    
    document.getElementById("tongsonguoiphuthuoc").innerHTML=` <h6 id="tongsonguoiphuthuoc">Số người phụ thuộc: ${songuoiphuthuoc}</h6>`
    
    document.getElementById("tongthunhapphainopthue").innerHTML=`<h6 id="tongthunhapphainopthue">Tổng thu nhập chịu thuế:${thunhapnopthue}</h6>`
    
    document.getElementById("sothuephainop").innerHTML=`<h6 id="sothuephainop">Số thuế phải nộp:${sothuephainop}</h6>`
}

    // bước 3:
        // -xuất hoá đơn theo mỗi mức thu nhập.
        // in ra màn hình:
            // + họ và tên người nộp thuế
            // + tổng thu nhập cần nộp thuế
            // + số người phụ thuộc
            // + số thuế phải nộp




// ------------------------------------------


    // bước 1 : xác đinh dữ liệu đầu vào
        // - mã khách hàng
        // - loại khách hàng: cá nhân / doanh nghiệp
        // - số kết nối
        // - số kênh cao cấp
    // bước 2 : gán các số liệu lấy được
        // - mã khách hàng = makhachhang
        // - loại khách hàng = cá nhân / doanh nghiệp
        // - số kết nối = soketnoi
        // - số kênh cao cấp = sokenhcaocap
function chonloaikhachhang()
{
    var makhachhang = +document.getElementById("makhach").value;
    var loaikhachhang = +document.querySelector('input[name="loai"]:checked').value;
    var anhien = document.getElementById("anhienne");
    var anhien1 = document.getElementById("anhienne1")
    if ( loaikhachhang > 0)
    {
        anhien.classList.add("show")
        anhien1.classList.add("show")
    }
    else if (loaikhachhang === 0)
    {
        anhien.classList.add("hidden")
        anhien1.classList.add("show")
    }
}

function tinhtiencap()
{
    var makhachhang = document.getElementById("makhach").value;
    var loaikhachhang = +document.querySelector('input[name="loai"]:checked').value;
    var soketnoi = +document.getElementById("ketnoi").value;
    var sokenhcaocap = +document.getElementById("kenhcaocap").value;
    var tongtien = 0;
    if ( loaikhachhang > 0 && soketnoi <= 10)
    {
        tongtien = 15 + soketnoi * 7.5 + sokenhcaocap * 50;
    }
    else if(loaikhachhang > 0 && soketnoi > 10)
    {
        tongtien = 15 + 75 + (soketnoi - 10) * 5 + sokenhcaocap * 50; 
    }
    else if(loaikhachhang === 0)
    {
        tongtien = 4.5 + 20.5 + sokenhcaocap * 7.5; 
    }
    document.getElementById("makhachhangla").innerHTML=
    `
    <h6 id="makhachhangla">Mã khách hàng: ${makhachhang}</h6>
    `
    document.getElementById("tongtienphaithanhtoanla").innerHTML=
    `
    <h6 id="tongtienphaithanhtoanla">Tổng tiền: ${tongtien}</h6>
    `
}
    // bước 3:
        // -xuất hoá đơn tính tiền cáp.
        // in ra màn hình:
            // + mã khách hàng
            // + tổng tiền phải trả
