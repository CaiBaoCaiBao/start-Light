// 页面切换功能
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 更新活动菜单项
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        
        // 获取目标页面
        const targetPage = this.getAttribute('data-page');
        
        // 在移动端显示当前页面标题
        const pageTitleMap = {
            'network': '网络配置',
            'sensor': '传感器',
            'about': '关于系统'
        };
        document.querySelector('.mobile-header .logo span').textContent = 
            pageTitleMap[targetPage] || '星闪ServerDemo';
        
        // 隐藏所有页面，显示目标页面
        document.querySelectorAll('.page-content').forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(`${targetPage}-page`).style.display = 'block';
        
        // 在移动端关闭侧边栏
        if (window.innerWidth <= 992) {
            closeSidebar();
        }
    });
});