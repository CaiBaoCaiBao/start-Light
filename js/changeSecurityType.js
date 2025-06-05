// 安全类型变更时处理
document.getElementById('securityType').addEventListener('change', function() {
    const passwordField = document.getElementById('wifiPassword');
    if (this.value === "0") {
        passwordField.disabled = true;
        passwordField.placeholder = "开放网络无需密码";
    } else {
        passwordField.disabled = false;
        passwordField.placeholder = "输入WiFi密码";
    }
});