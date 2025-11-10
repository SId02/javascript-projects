document.addEventListener('DOMContentLoaded', () => {
    
    const projects = [
        { name: "Binary to Decimal Converter", url: "./binary to decimal converter/index.html" },
        { name: "BMI Calculator", url: "../bmi calculator/index.html" },
        { name: "Character Limit", url: "./character limit/index.html" },
        { name: "Comming Soon", url: "./comming soon/index.html" },
        { name: "Counter", url: "./counter/index.html" },
        { name: "Currency Converter", url: "./currency converter/index.html" },
        { name: "CRUD (Create, Read, Update, Delete)", url:"./crud/index.html" },
        { name: "Calculate Difference Days", url: "./calculateDifference/index.html" },
        { name: "Card List", url: "./card list view/index.html" },
        { name: "Copy to Clipboard", url: "./copy to clipboard/index.html" },
        { name: "Drag n Drop ", url: "/drag and drop/index.html" },
        { name: "Data in table", url: "./data in table/index.html" },
        { name: "Dynamically-add-remove-input-field", url: "./dynamically-add-remove/index.html" },
        { name: "Image Generator", url: "./image generator/index.html" }, 
        { name: "Infinite Scroll", url: "./infinitescroll/index.html" },
        { name: "JS Problems", url: "./js problems/index.html" },
        { name: "Leap Year Checker", url: "./leapyear/index.html" },
        { name: "Product Filter", url: "./product filter/index.html" },
        { name: "Password Generator", url: "./password generator/index.html" },
        { name: "Quiz App", url: "./quiz app/index.html" },
        { name: "Random Joke's", url: "./random jokes/index.html" },
        { name: "Random Quote's", url: "./random quote/index.html" },
        { name: "Random Winner", url: "./random winner/index.html" },
        { name: "Random OTP", url: "./randomOTP/index.html" },
        { name: "String Reverser", url: "./reverse a string/index.html" },
        { name: "Tip Calculator", url: "./tip calculator/index.html" },
        { name: "Todo List", url: "./todo list/index.html" },
        { name: "Toggle Password", url: "./toggle password visibility/index.html" },
        { name: "Unit Convertor", url: "./unit convertor/index.html"},
        { name: "Weather App", url: "./weatherapp/index.html" },
        { name: "Word Counter", url: "./word counter/index.html" },
        { name: "Year Calculator", url: "./year calculator/index.html" },
    ];

    const PROJECTS_PER_PAGE = 9;
    let currentPage = 0;

    const projectListContainer = document.getElementById('project-list-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    function renderProjects(startIndex, count) {
        const endIndex = Math.min(startIndex + count, projects.length);
        const projectsToRender = projects.slice(startIndex, endIndex);

        projectsToRender.forEach((project, index) => {
         
            const delay = (index * 0.1) + 's'; 

            const column = document.createElement('div');
         
            column.className = 'column is-4-tablet is-4-desktop project-column';
            column.style.animationDelay = delay;

            column.innerHTML = `
                <div class="box has-text-centered">
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="is-block">${project.name}</a>
                </div>
            `;
            projectListContainer.appendChild(column);
        });

        if (endIndex < projects.length) {
            loadMoreBtn.classList.remove('is-hidden');
        } else {
            loadMoreBtn.classList.add('is-hidden');
        }

        currentPage++;
    }

    function handleLoadMore() {
        const startIndex = currentPage * PROJECTS_PER_PAGE;
        renderProjects(startIndex, PROJECTS_PER_PAGE);
    }

    loadMoreBtn.addEventListener('click', handleLoadMore);


    renderProjects(0, PROJECTS_PER_PAGE);

    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toggle');
    const STORAGE_KEY = 'js-projects-theme';

    function setTheme(theme) {
        body.className = theme;
        const isDark = theme === 'dark-mode';
        modeToggleBtn.textContent = isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙';
        localStorage.setItem(STORAGE_KEY, theme);
    }

    function toggleTheme() {
        const currentTheme = body.className;
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        setTheme(newTheme);
    }

    modeToggleBtn.addEventListener('click', toggleTheme);

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        setTheme('dark-mode');
    } else {
        setTheme('light-mode');
    }

});
	