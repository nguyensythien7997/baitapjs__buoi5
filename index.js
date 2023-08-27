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
          break;
        }
      }
    }
    
    // Kiểm tra biến flag
    if (flag == true) {
      console.log(n);
    
    }
  }
}
