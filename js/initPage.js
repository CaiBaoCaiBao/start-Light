// 初始页面设置
document.addEventListener('DOMContentLoaded', function() {
    // 在移动端显示当前页面标题
    if (window.innerWidth <= 992) {
        document.querySelector('.mobile-header .logo span').textContent = '网络配置';
    }
    
    // 初始扫描WiFi列表
    document.getElementById('scanWifiBtn').click();
});