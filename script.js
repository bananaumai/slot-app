const items = [
  "What's your unusual experience?",
  "What's your motto?",
  "What's your unpopular opinion?",
  "If you could automate one part of your job, what would it be?",
  "What's the weirdest bug you've ever encountered?",
  "What's the most challenging technical decision you've had to make?",
  "How do you balance technical debt with new feature development?",
  "What's your approach to estimating project timelines?",
  "How do you handle scope creep in your projects?",
  "What's your strategy for keeping up with rapidly evolving technologies?",
  "How do you promote knowledge sharing within your team?",
  "What's your favorite design pattern and why?",
  "How do you measure the success of a product feature?",
  "What's your approach to prioritizing user stories in a sprint?",
  "How do you handle conflicts between engineering and product teams?",
  "What's your strategy for scaling a system?",
  "How do you ensure code quality in a fast-paced environment?",
  "What's your approach to conducting effective code reviews?",
  "How do you balance user experience with technical constraints?",
  "What's your method for gathering and implementing user feedback?",
];
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
