

// 扫描WiFi网络
document.getElementById('scanWifiBtn').addEventListener('click', function () {
    const wifiList = document.getElementById('wifiList');
    const statusMsg = document.getElementById('wifiStatus');

    // 显示扫描中状态
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 扫描中...';
    this.disabled = true;
    statusMsg.textContent = '正在扫描附近的WiFi网络...';
    statusMsg.className = 'status-message';
    statusMsg.style.display = 'block';

    // 模拟API请求
    setTimeout(() => {
        // 模拟API响应
        const response = {
            infos: []
        };
        const wifiListUrl = 'http://172.17.184.143/get_wifi_list';
        const securityTypeUrl = 'http://172.17.184.143//get_security_type';
        let securityTypeList = [
            { id: 0, type: '选择加密类型' },
        ];
        // 请求获取WiFi列表
        fetch(wifiListUrl).then(response => response.json())
            .then(data => {
                response.infos = data.infos;
                // 清空当前列表
                wifiList.innerHTML = '';

                // 获取安全接口类型列表
                fetch(securityTypeUrl).then(res => res.json())
                    .then(data => {
                        securityTypeList = data.security_type;
                        const securityType = document.getElementById('securityType');
                        securityType.innerHTML = securityTypeList.map(item => {
                            return (`<option value="${item.id}">${item.type}</option>`);
                        }).join('');
                        // 添加新的WiFi项目
                        response.infos.forEach(wifi => {
                            const wifiItem = document.createElement('div');
                            wifiItem.className = 'wifi-item';

                            // 根据信号强度计算信号条
                            const rssi = wifi.rssi;
                            const signalBars = Math.min(4, Math.max(1, Math.floor((rssi + 100) / 25)));
                            let securityText = '未知';
                            for (let i = 0; i < securityTypeList.length; i++) {
                                if (wifi.security_type == securityTypeList[i].id)
                                    securityText = securityTypeList[i].type;
                            }

                            wifiItem.innerHTML = `
<i class="fas fa-wifi wifi-icon"></i>
<div class="wifi-info">
    <div class="wifi-name">${wifi.ssid}</div>
    <div class="wifi-details">
        <span>安全: ${securityText}</span>
        <div class="wifi-strength">
            <span>信号: </span>
            ${Array.from({ length: 4 }).map((_, i) =>
                                `<div class="signal-bar ${i < signalBars ? 'active' : ''}"></div>`
                            ).join('')}
        </div>
    </div>
</div>
`;

                            // 点击WiFi项自动填充表单
                            wifiItem.addEventListener('click', () => {
                                // 移除所有active类
                                document.querySelectorAll('.wifi-item').forEach(item => {
                                    item.classList.remove('active');
                                });

                                // 添加active类到当前项
                                wifiItem.classList.add('active');

                                // 填充表单
                                document.getElementById('wifiSSID').value = wifi.ssid;
                                document.getElementById('securityType').value = wifi.security_type;

                                // 如果安全类型为0，则禁用密码输入
                                if (wifi.security_type === 0) {
                                    document.getElementById('wifiPassword').disabled = true;
                                    document.getElementById('wifiPassword').placeholder = "开放网络无需密码";
                                } else {
                                    document.getElementById('wifiPassword').disabled = false;
                                    document.getElementById('wifiPassword').placeholder = "输入WiFi密码";
                                }
                            });

                            wifiList.appendChild(wifiItem);
                        });

                        // 更新状态
                        statusMsg.textContent = `扫描完成，找到 ${response.infos.length} 个网络`;
                        statusMsg.className = 'status-message status-success';

                        // 重置按钮
                        this.innerHTML = '<i class="fas fa-sync-alt"></i> 重新扫描';
                        this.disabled = false;

                    }, 1500);
            });


    })
});