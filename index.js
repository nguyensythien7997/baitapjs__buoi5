
// -----------------------BÀI TẬP 1-------------------
// BƯỚC 1: XÁC ĐỊNH GIÁ TRỊ ĐẦU VÀO
        // Khai báo biến max lấy từ người dùng
// BƯỚC 2:
        // Sử dụng vòng lặp for để duyệt các giá trị từ 0 tới max
        // Cộng các giá trị tới khi tổng i vừa lớn hơn max thì dừng
function timson() {
  var max = document.getElementById("timsonhonhat").value;
  for (var i = 0; i < max; i++) {
    if (((i + 1) * i) / 2 > max) {
      break;
    }
  }
  document.getElementById(
    "ketqua"
  ).innerHTML = `<div id="ketqua"><h4>n = ${i}</h4></div>`;
}
// BƯỚC 3: in kết quả số nhỏ nhất cho biểu thức S(n) = 1 + x^2 + x^3 + ... + x^n là n = vị trí khi i dừng lại


// -----------------------BÀI TẬP 2-------------------
// BƯỚC 1: XÁC ĐỊNH GIÁ TRỊ ĐẦU VÀO
        // Khai báo biến x và n lấy từ người dùng, s = 0
// BƯỚC 2:
        // Sử dụng vòng lặp for để duyệt các giá trị i từ 0 tới max.
        // Cộng các giá trị của biểu thức tới khi tổng i = n thì dừng lại
function timsoS() {
  var x = document.getElementById("nhapsox").value;
  var n = document.getElementById("nhapson").value;
  var s = 0;
  for (var i = 0; i <= n; i++) {
    s += Math.pow(x, [i]);
    console.log(s);
  }
  document.getElementById("ketqua111").innerHTML = `<h4>Kết quả là : S(${
    i - 1
  }) = ${s}</h4>`;
}
// BƯỚC 3: in kết quả số nhỏ nhất cho biểu thức S(n) = 1 + x^2 + x^3 + ... + x^n là s = tổng giá trị tại x = i - 1


// -----------------------BÀI TẬP 3-------------------
// BƯỚC 1: XÁC ĐỊNH GIÁ TRỊ ĐẦU VÀO
        // Khai báo biến b lấy từ người dùng, c = 0
// BƯỚC 2:
        // Sử dụng vòng lặp for để duyệt các giá trị a từ 1 tới b.
        // Nhân các giá trị của a tới khi a < b thì dừng


function timtich() {
  var b = document.getElementById("timtichtaiday").value;
  var c = 1;
  for (var a = 1; a < b; a++) {
    c = c * (a + 1);
  }
  document.getElementById(
    "ketqua222"
  ).innerHTML = `<div id="ketqua222"><h4>S = ${c}</h4></div>`;
}
// BƯỚC 3: in kết quả số nhỏ nhất cho biểu thức STìm Tích S(b) = 1 x 2 x 3 x ... x b là c = c * (a + 1)


// -----------------------BÀI TẬP 4-------------------
// BƯỚC 1: XÁC ĐỊNH GIÁ TRỊ ĐẦU VÀO
        // khai báo biến p , j sau đó gán giá trị createElement để tạo phần tử
// BƯỚC 2:
        // tạo function để điều khiển các biến
function add_child() {
  //tạo phần tử p
  var p = document.createElement("p");
  var j = document.createElement("j");
  //tạo phần tử text
  var node = document.createTextNode("");
  p.appendChild(node);
  p.style.backgroundColor = "red";
  p.style.display = "block";
  p.style.width = "100px";
  p.style.height = "100px";

  j.appendChild(node);
  j.style.backgroundColor = "blue";
  j.style.display = "block";
  j.style.width = "100px";
  j.style.height = "100px";

  var div = document.getElementById("demo");
  //gắn p vào div
  for (var i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
      div.appendChild(p);
    } else if (i % 2 === 0) {
      div.appendChild(j);
    }
  }

}
// BƯỚC 3: in các thẻ div ra màn hình theo quy ước vị trí lẻ là đỏ, lẻ là xanh 


// -----------------------BÀI TẬP 5-------------------
// BƯỚC 1: XÁC ĐỊNH GIÁ TRỊ ĐẦU VÀO
        // Khai báo biến y là một chuỗi rỗng
        // tạo function kiem_tra_snt()
// BƯỚC 2:
        // Sử dụng vòng lặp for để duyệt các giá trị n từ 0 tới k.
        // tạo biến cờ hiệu để kiểm tra từng phần tử n trong vòng lặp

var y = "";
function kiem_tra_snt() {
  var k = +document.getElementById("inrasonguyento").value;
  for (n = 0; n < k; n++) {
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
      flag = false;
    } else {
      // lặp từ 2 tới n-1
      for (var i = 2; i < n - 1; i++) {
        if (n % i == 0) {
          flag = false;
          continue;
        }
      }
    }
    
    // Kiểm tra biến flag
    if (flag === true) {
      y += n + " , ";
      document.getElementById("ketqua555").innerHTML=`${y}`;
    }
  }
}
// BƯỚC 3: nếu biến cờ hiệu flag có giá trị true thì gán n vào chuỗi y đã khai báo. in chuỗi y ra màn hình
