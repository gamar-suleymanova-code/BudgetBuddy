import lostInBillsIMG from '../assets/img/pages/home/1.png';
import managingIMG from '../assets/img/pages/home/2.png';
import achivementIMG from '../assets/img/pages/home/3.png';

// Function to calculate delay based on text length and a base duration
const calculateDelay = (text) => {
    const baseDuration = 37 * (50 * 2); // Base duration calculation
    const typeTime = text.length * 50; // 50ms per character
    const calculatedDelay = baseDuration - 2 * typeTime;
    return Math.max(calculatedDelay, 1000); // Ensure a minimum delay of 1000ms
};

// Array of images and corresponding text for the animation
const datas = [
    {
        img: lostInBillsIMG,
        text: 'Do You Feel lost about your spending?',
        highlightedText: '', // Consider renaming 'highlited' to 'highlightedText' for clarity
        delay: calculateDelay('Do You Feel lost about your spending?') + 1000, // Add extra delay for better sync
    },
    {
        img: managingIMG,
        text: 'Manage it with BudgetBuddy,',
        highlightedText: '',
        delay: calculateDelay('Manage it with BudgetBuddy,') + 1000,
    },
    {
        img: achivementIMG,
        text: 'and Boost your savings!',
        highlightedText: 'savings!', // Highlighting the word 'savings!'
        delay: calculateDelay('and Boost your savings!') + 1000,
    },
];

export { datas };
