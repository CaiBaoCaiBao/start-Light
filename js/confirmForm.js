

// 连接WiFi表单提交
document.getElementById('wifiConnectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ssid = document.getElementById('wifiSSID').value;
    const securityType = document.getElementById('securityType').value;
    const password = document.getElementById('wifiPassword').value;
    const connectStatus = document.getElementById('connectStatus');
    
    // 验证表单
    if (!ssid) {
        connectStatus.textContent = "请选择或输入网络名称";
        connectStatus.className = 'status-message status-error';
        connectStatus.style.display = 'block';
        return;
    }
    
    if (securityType !== "0" && !password) {
        connectStatus.textContent = "请输入WiFi密码";
        connectStatus.className = 'status-message status-error';
        connectStatus.style.display = 'block';
        return;
    }
    
    // 显示连接中状态
    connectStatus.textContent = "正在连接到网络，请稍候...";
    connectStatus.className = 'status-message';
    connectStatus.style.display = 'block';
    
    // 模拟API请求
    setTimeout(() => {
        // 发送连接请求
        const Url = 'http://172.17.184.143/set_wifi_config'
        fetch(Url).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            if (data.result === -1) {
                connectStatus.textContent = "连接失败，请检查WiFi密码和网络名称";
                connectStatus.className = 'status-message status-error';
            }
            if (data.result === 0) {
                connectStatus.textContent = "连接成功";
                connectStatus.className = 'status-message status-success';
            }
        })
    }, 2000);
});