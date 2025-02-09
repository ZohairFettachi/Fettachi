const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        // Add background effects and shrink navbar
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navBar.style.height = '60px'; // Reduce height when scrolling
        navLinks.classList.remove('bg-white', 'shadow-sm','bg-opacity','dark;border','dark:border-white/50','dark:bg-transparent');

    } else {
        navLinks.classList.add('bg-white', 'shadow-sm','bg-opacity',
            'bg-white', 'shadow-sm','bg-opacity','dark;border','dark:border-white/50','dark:bg-transparent'
            );

        navBar.classList.remove('bg-white', 'shadow-sm','bg-opacity','bg-white', 'bg-opacity-50', 
            'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navBar.style.height = '60px'; // Reset to the original height
    }
});
tailwind.config = {
    theme: { 
        extend:{
            gridTemplateColumns: {
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
        animation: {
            spin_slow: 'spin 10s linear infinite'
        },
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F'
        },
        boxShadow:{
            'black':'4px 4px 0 #000',
            'white':'4px 4px 0 #fff',
        }
       
    }},
        darkMode:'selector'
}


// ---light and dark mode---
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
function toggleTheme(){
    document.documentElement.classList.toggle('dark')

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark';
    }else{
        localStorage.theme = 'light';
    }
}  


//-----POP-UP 1-----//
const popupBtn1 = document.getElementById('popupBtn1');
const popup1 = document.getElementById('popup1');
const closePopupBtn1 = document.getElementById('closePopupBtn1');

// Toggle popup visibility for Button 1
popupBtn1.addEventListener('click', () => {
    popup1.style.display = popup1.style.display === 'block' ? 'none' : 'block';
});

closePopupBtn1.addEventListener('click', () => {
    popup1.style.display = 'none';
});

//-----POP-UP 2-----//
const popupBtn2 = document.getElementById('popupBtn2');
const popup2 = document.getElementById('popup2');
const closePopupBtn2 = document.getElementById('closePopupBtn2');

// Toggle popup visibility for Button 2
popupBtn2.addEventListener('click', () => {
    popup2.style.display = popup2.style.display === 'block' ? 'none' : 'block';
});

closePopupBtn2.addEventListener('click', () => {
    popup2.style.display = 'none';
});

//-----POP-UP 3-----//
const popupBtn3 = document.getElementById('popupBtn3');
const popup3 = document.getElementById('popup3');
const closePopupBtn3 = document.getElementById('closePopupBtn3');

// Toggle popup visibility for Button 3
popupBtn3.addEventListener('click', () => {
    popup3.style.display = popup3.style.display === 'block' ? 'none' : 'block';
});

closePopupBtn3.addEventListener('click', () => {
    popup3.style.display = 'none';
});

//-----POP-UP 4-----//
const popupBtn4 = document.getElementById('popupBtn4');
const popup4 = document.getElementById('popup4');
const closePopupBtn4 = document.getElementById('closePopupBtn4');

// Toggle popup visibility for Button 4
popupBtn4.addEventListener('click', () => {
    popup4.style.display = popup4.style.display === 'block' ? 'none' : 'block';
});

closePopupBtn4.addEventListener('click', () => {
    popup4.style.display = 'none';
});
