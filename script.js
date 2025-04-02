// 添加多重备份图标处理
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.site-icon').forEach(img => {
        img.onerror = function() {
            const domain = new URL(this.closest('a').href).hostname;
            
            // 尝试Google Favicon服务作为备份
            this.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
            
            // 如果Google Favicon也失败，使用首字母替代
            this.onerror = function() {
                const siteName = this.closest('.site-card').querySelector('.site-name').textContent;
                const initial = siteName.charAt(0).toUpperCase();
                
                const fallbackDiv = document.createElement('div');
                fallbackDiv.className = 'site-icon fallback';
                fallbackDiv.setAttribute('data-initial', initial);
                fallbackDiv.textContent = initial;
                
                this.parentNode.replaceChild(fallbackDiv, this);
            };
        };
    });
});
