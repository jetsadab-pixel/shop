// เพิ่มสินค้า
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name: name, price: price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("เพิ่มสินค้าแล้ว!");
}

// แสดงสินค้าในตะกร้า
if(document.getElementById("cart")){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let output = "";
    let total = 0;

    cart.forEach(item => {
        output += `<p>${item.name} - ${item.price} บาท</p>`;
        total += item.price;
    });

    output += `<hr><h3>รวม: ${total} บาท</h3>`;
    document.getElementById("cart").innerHTML = output;
}

// สมัครสมาชิก
function register(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("user", JSON.stringify({name,email}));
    alert("สมัครสมาชิกสำเร็จ!");
    window.location.href="index.html";
}

// แสดงยอดรวมหน้าชำระเงิน
if(document.getElementById("total")){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach(item => total += item.price);
    document.getElementById("total").innerText = total;
}

// ชำระเงิน
function pay(){
    alert("ชำระเงินสำเร็จ ขอบคุณที่ใช้บริการ!");
    localStorage.removeItem("cart");
    window.location.href="index.html";
}