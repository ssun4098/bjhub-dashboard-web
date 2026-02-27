function Header() {
    return (
        <>
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-2xl">grid_view</span>
          <h2 className="text-xl font-bold tracking-tight">Dashboard Overview</h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search solutions..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
              <span className="material-symbols-outlined">account_circle</span>
            </button>

          </div>
        </div>

      </header>
        </>
    )
}

export default Header;