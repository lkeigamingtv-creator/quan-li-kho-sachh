let khosach = [];

function themsach() {
    let ma = document.getElementById("masach").value;
    let ten = document.getElementById("tensach").value;
    let tacgia = document.getElementById("tacgia").value;
    let namxb = document.getElementById("namxb").value; 
    let gia = document.getElementById("giasach").value;

    if(ma == "" || ten == "" || tacgia == "" || namxb == "" || gia == "") {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    let sachmoi = {
        masach: ma,
        tensach: ten,
        tacgia: tacgia,
        namxb: namxb,
        giasach: Number(gia)
    };
    khosach.push(sachmoi);
    hienthi();
}

function xoasach(index) {
    khosach.splice(index, 1);
    hienthi();
}

function hienthi() {
    let rows = "";
    for(let i = 0; i < khosach.length; i++) {
        let s = khosach[i];
        rows += `<tr>
            <td class="border p-2 text-center">${i + 1}</td>
            <td class="border p-2">${s.masach}</td>
            <td class="border p-2 font-bold">${s.tensach}</td>
            <td class="border p-2 text-center">${s.tacgia}</td>
            <td class="border p-2 text-center">${s.namxb}</td>
            <td class="border p-2 text-right">${s.giasach.toLocaleString()} VND</td>
            <td class="border p-2 text-center">
                <button onclick="xoasach(${i})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Xóa</button>
            </td>
        </tr>`;
    }

    document.getElementById("noihienthi").innerHTML = rows;
    
    let thongKeEl = document.getElementById("thongke");
    if(thongKeEl) {
        thongKeEl.innerText = `Tổng số sách hiện có: ${khosach.length}`;
    }
}