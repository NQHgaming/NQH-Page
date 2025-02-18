function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title, // Tiêu đề của trang
            url: window.location.href, // URL của trang
        })

    } else {
        // Nếu trình duyệt không hỗ trợ chia sẻ, sao chép liên kết
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('Đã sao chép liên kết!');
    }
}
// Hàm sao chép email vào clipboard
function copyEmail() {
    const email = "nguyenquochuy1094@gmail.com"; // Email cần sao chép

    // Tạo textarea tạm thời để sao chép nội dung
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select(); // Chọn nội dung
    document.execCommand('copy'); // Thực hiện sao chép
    document.body.removeChild(textArea); // Xóa textarea sau khi sao chép

    // Thông báo sao chép thành công
    alert('Đã sao chép email!');
}

