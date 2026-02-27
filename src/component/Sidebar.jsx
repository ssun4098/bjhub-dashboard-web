function Sidebar() {

    return (
        <>
            <aside className="w-64 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col h-full">
                <div className="p-6 flex flex-col gap-8 h-full">

                    <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-1 border border-primary/20">
                        <div
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                        data-alt="User profile avatar portrait"
                        ></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold leading-none">Problem Solver</h1>
                        <p className="text-xs text-primary font-medium mt-1">Pro Developer</p>
                    </div>

                    </div>

                    <nav className="flex flex-col gap-2 flex-1">

                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white transition-all shadow-sm" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </a>

                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined">code</span>
                        <span className="text-sm font-medium">Problems</span>
                    </a>

                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined">emoji_events</span>
                        <span className="text-sm font-medium">Contests</span>
                    </a>

                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="text-sm font-medium">Stats</span>
                    </a>

                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all mt-auto" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </a>

                    </nav>

                    <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-md active:scale-[0.98]">
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    <span>Quick Add</span>
                    </button>

                </div>
            </aside>
        </>
    )
}

export default Sidebar;