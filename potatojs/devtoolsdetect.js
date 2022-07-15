
//
// 热力猫 DevTools 检测
//

import devtools from '/resources/potato/is/life/js/devtools.js';

let messageTimer

window.addEventListener('devtoolschange', event => {
    if(event.detail.isOpen){
    showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
    } 
});

function showMessage(text, timeout, priority) {
    if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
    if (messageTimer) {
        clearTimeout(messageTimer);
        messageTimer = null;
    }
    sessionStorage.setItem("waifu-text", priority);
    const tips = document.getElementById("waifu-tips");
    tips.innerHTML = text;
    tips.style.margin = "-" + (50+(Math.trunc((text.length-1)/15))*20) + "px 20px"; // 根据文本长度调整对话框位置
    tips.classList.add("waifu-tips-active");
    messageTimer = setTimeout(() => {
        sessionStorage.removeItem("waifu-text");
        tips.classList.remove("waifu-tips-active");
    }, timeout);
}