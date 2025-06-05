// 拖拽上传功能
const uploadArea = document.getElementById('uploadArea');
uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = '#2563eb';
    this.style.backgroundColor = '#f0f9ff';
});

uploadArea.addEventListener('dragleave', function() {
    this.style.borderColor = '#cbd5e1';
    this.style.backgroundColor = '';
});

uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.borderColor = '#cbd5e1';
    this.style.backgroundColor = '';
    
    if (e.dataTransfer.files.length) {
        document.getElementById('fileInput').files = e.dataTransfer.files;
        const fileName = e.dataTransfer.files[0].name;
        document.getElementById('fileName').textContent = fileName;
        document.getElementById('fileInfo').style.display = 'block';
    }
});