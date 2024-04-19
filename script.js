const items = ["リンゴ", "バナナ", "オレンジ", "メロン", "イチゴ"];
const slotWindow = document.getElementById('slotWindow');
let animating = false;

function spinSlot() {
    if (animating) return; // 連続クリックを防ぐ
    animating = true;
    const totalSpins = 20; // スロットが回転する総回数
    let currentSpin = 0;

    const interval = setInterval(() => {
        if (currentSpin < totalSpins) {
            if (slotWindow.firstChild) {
                slotWindow.firstChild.remove(); // 最初の子要素を削除
            }
            const itemElement = document.createElement('div');
            itemElement.classList.add('slot-item');
            itemElement.textContent = items[Math.floor(Math.random() * items.length)];
            slotWindow.appendChild(itemElement);
            currentSpin++;
        } else {
            clearInterval(interval);
            slotWindow.firstChild.classList.remove('slot-item'); // アニメーションクラスを削除
            slotWindow.firstChild.style.transform = 'translateY(0)'; // 位置をリセット
            animating = false;
        }
    }, 100); // アニメーション速度を調整
}
