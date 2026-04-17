class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';

        this.taskTitle = document.getElementById("taskTitle");
        this.taskDescription = document.getElementById("taskDescription");
        this.taskForm = document.getElementById("taskForm");
        this.tasksContainer = document.getElementById("tasksContainer");
        this.modeToggle = document.getElementById("modeToggle");

        this.init();
    }

    init() {
        this.attachEvents();
        this.loadDarkMode();
        this.render();
    }

    attachEvents() {
        this.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addTask();
        });

        this.modeToggle.onclick = () => this.toggleMode();

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".filter-btn").forEach(b => {
                    b.classList.remove("active", "bg-blue-500", "text-white", "dark:bg-blue-600");
                    b.classList.add("bg-gray-200", "text-gray-700", "hover:bg-gray-300", "dark:bg-gray-700", "dark:text-gray-300", "dark:hover:bg-gray-600");
                });
                btn.classList.remove("bg-gray-200", "text-gray-700", "hover:bg-gray-300", "dark:bg-gray-700", "dark:text-gray-300", "dark:hover:bg-gray-600");
                btn.classList.add("active", "bg-blue-500", "text-white", "dark:bg-blue-600");
                this.currentFilter = btn.dataset.filter;
                this.render();
            });
        });
    }

    addTask() {
        const title = this.taskTitle.value.trim();
        const desc = this.taskDescription.value.trim();

        if (!title) return alert("Titre obligatoire");

        this.tasks.unshift({
            id: Date.now(),
            title,
            desc,
            done: false
        });

        this.taskTitle.value = "";
        this.taskDescription.value = "";

        this.render();
    }

    render() {
        const filteredTasks = this.tasks.filter(task => {
            if (this.currentFilter === 'all') return true;
            if (this.currentFilter === 'active') return !task.done;
            if (this.currentFilter === 'completed') return task.done;
            return true;
        });

        this.tasksContainer.innerHTML = filteredTasks.length ? filteredTasks.map(task => `
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-3 transition">

                <!-- HEADER -->
                <div class="flex justify-between items-center cursor-pointer task-header">
                    <h2 class="font-bold text-gray-800 dark:text-white ${task.done ? 'line-through opacity-60' : ''}">
                        ${task.title}
                    </h2>
                    <span class="text-xl">+</span>
                </div>

                <!-- DETAILS -->
                <div class="task-details hidden mt-3">
                    <p class="text-gray-600 dark:text-gray-300 mb-2">
                        ${task.desc}
                    </p>

                    <div class="flex gap-2">
                        <button class="complete-btn bg-green-500 text-white px-2 py-1 rounded"
                            data-id="${task.id}">
                            Terminer
                        </button>

                        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded"
                            data-id="${task.id}">
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        `).join("") : `
            <div class="text-center py-12">
                <p class="text-gray-400 text-lg">
                    📝 Aucune tâche pour le moment<br>
                    <span class="text-sm">Commencez par ajouter une nouvelle tâche</span>
                </p>
            </div>
        `;

        this.updateCounters();
        this.attachTaskEvents();
    }

    attachTaskEvents() {
        // ACCORDION
        document.querySelectorAll(".task-header").forEach(header => {
            header.onclick = () => {
                const details = header.nextElementSibling;
                const icon = header.querySelector("span");

                details.classList.toggle("hidden");
                icon.textContent = details.classList.contains("hidden") ? "+" : "-";
            };
        });

        // COMPLETE
        document.querySelectorAll(".complete-btn").forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const id = Number(btn.dataset.id);

                this.tasks = this.tasks.map(t => {
                    if (t.id === id) t.done = !t.done;
                    return t;
                });

                this.render();
            };
        });

        // DELETE
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const id = Number(btn.dataset.id);

                this.tasks = this.tasks.filter(t => t.id !== id);
                this.render();
            };
        });
    }

    setLightMode() {
        console.log("Setting to light mode");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
        this.updateToggleButton(false);
    }

    setDarkMode() {
        console.log("Setting to dark mode");
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
        this.updateToggleButton(true);
    }

    toggleMode() {
        const isDark = document.documentElement.classList.contains("dark");
        console.log("Toggling, currently dark:", isDark);
        if (isDark) {
            this.setLightMode();
        } else {
            this.setDarkMode();
        }
    }

    loadDarkMode() {
        const saved = localStorage.getItem("darkMode");
        let isDark;

        if (saved !== null) {
            isDark = saved === "true";
        } else {
            // Check system preference
            isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        this.updateToggleButton(isDark);
    }

    updateCounters() {
        const allCount = this.tasks.length;
        const activeCount = this.tasks.filter(t => !t.done).length;
        const completedCount = this.tasks.filter(t => t.done).length;

        document.querySelector('[data-filter="all"]').innerHTML = `🔵 Toutes (${allCount})`;
        document.querySelector('[data-filter="active"]').innerHTML = `⏳ En cours (${activeCount})`;
        document.querySelector('[data-filter="completed"]').innerHTML = `✅ Terminées (${completedCount})`;

        document.getElementById("taskCounter").textContent = `${allCount} tâche${allCount !== 1 ? 's' : ''}`;
    }

    updateToggleButton(isDark) {
        const button = this.modeToggle;
        const svg = button.querySelector("svg");
        if (isDark) {
            svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`;
            button.title = "Passer en mode clair";
            button.setAttribute("aria-label", "Passer en mode clair");
        } else {
            svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`;
            button.title = "Passer en mode sombre";
            button.setAttribute("aria-label", "Passer en mode sombre");
        }
    }
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
    new TodoApp();
});
