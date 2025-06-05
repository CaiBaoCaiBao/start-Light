// 文件上传功能
document.getElementById('selectFileBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(e) {
    if (this.files.length > 0) {
        const fileName = this.files[0].name;
        document.getElementById('fileName').textContent = fileName;
        document.getElementById('fileInfo').style.display = 'block';
    }
});

document.getElementById('startUpgradeBtn').addEventListener('click', function() {
    alert('系统升级已开始，请不要关闭电源...');
    // 这里在实际应用中会发送文件到服务器
});