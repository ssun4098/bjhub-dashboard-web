function Sidebar() {

    return (
        <>
            <aside class="w-64 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col h-full">
                <div class="p-6 flex flex-col gap-8 h-full">

                    <div class="flex items-center gap-3">
                    <div class="bg-primary/10 rounded-full p-1 border border-primary/20">
                        <div
                        class="w-10 h-10 rounded-full bg-cover bg-center"
                        data-alt="User profile avatar portrait"
                        ></div>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="text-sm font-bold leading-none">Problem Solver</h1>
                        <p class="text-xs text-primary font-medium mt-1">Pro Developer</p>
                    </div>

                    </div>

                    <nav class="flex flex-col gap-2 flex-1">

                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white transition-all shadow-sm" href="#">
                        <span class="material-symbols-outlined">dashboard</span>
                        <span class="text-sm font-medium">Dashboard</span>
                    </a>

                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span class="material-symbols-outlined">code</span>
                        <span class="text-sm font-medium">Problems</span>
                    </a>

                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span class="material-symbols-outlined">emoji_events</span>
                        <span class="text-sm font-medium">Contests</span>
                    </a>

                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span class="material-symbols-outlined">analytics</span>
                        <span class="text-sm font-medium">Stats</span>
                    </a>

                    <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all mt-auto" href="#">
                        <span class="material-symbols-outlined">settings</span>
                        <span class="text-sm font-medium">Settings</span>
                    </a>

                    </nav>

                    <button class="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-md active:scale-[0.98]">
                    <span class="material-symbols-outlined text-lg">add_circle</span>
                    <span>Quick Add</span>
                    </button>

                </div>
            </aside>
        </>
    )
}

export default Sidebar;