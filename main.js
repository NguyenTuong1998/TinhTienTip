document
  .getElementById("btnTinhTienTip")
  .addEventListener("click", function () {
    var tongTien = document.getElementById("txtTongTien").value;
    console.log(tongTien);
    var phanTramTiep = document.getElementById("slPhanTramTip").value;
    var slNguoiShare = document.getElementById("txtSoNguoi").value;

    var tienTiep = tongTien * (phanTramTiep / 100);
    var tienMoiNguoi = tienTiep / slNguoiShare;
    document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").innerHTML =
      "Tiền tiếp của mỗi người: " + tienMoiNguoi;
  });
