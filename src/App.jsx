function App() {

  return (
    <>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
  <div class="flex h-screen overflow-hidden">
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
    <main class="flex-1 flex flex-col overflow-y-auto bg-slate-50/50 dark:bg-background-dark/50">
      <header class="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-8 py-4 flex items-center justify-between">

        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-primary text-2xl">grid_view</span>
          <h2 class="text-xl font-bold tracking-tight">Dashboard Overview</h2>
        </div>

        <div class="flex items-center gap-6">
          {/* <div class="relative hidden md:block">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              class="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search solutions..."
              type="text"
            />
          </div> */}

          <div class="flex items-center gap-3">
            <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all relative">
              <span class="material-symbols-outlined">notifications</span>
              <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>

            <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all">
              <span class="material-symbols-outlined">account_circle</span>
            </button>

          </div>
        </div>

      </header>
      <div class="p-8 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div class="xl:col-span-8 space-y-6">
          <div class="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden">
            <div id="calendar"></div>
          </div>
        </div>
        <div class="xl:col-span-4 space-y-6">
          <div class="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col h-full">

            <div class="p-6 border-b border-primary/5 flex items-center justify-between">
              <h3 class="text-lg font-bold">Recent Solutions</h3>
              <a class="text-xs font-bold text-primary hover:underline" href="#">View All</a>
            </div>

            <div class="p-4 flex-1 space-y-3">
              <div class="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  
                  <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div class="flex flex-col">
                    
                    <span class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Two Sum</span>
                    <span class="text-[11px] text-slate-500 font-medium">LeetCode • 2 hours ago</span>
                  </div>
                </div>
                
                <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Easy</span>
              </div>

              
              <div class="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Longest Palindromic...</span>
                    <span class="text-[11px] text-slate-500 font-medium">LeetCode • 5 hours ago</span>
                  </div>
                </div>
                
                <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Medium</span>
              </div>

              
              <div class="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Merge k Sorted Lists</span>
                    <span class="text-[11px] text-slate-500 font-medium">LeetCode • Yesterday</span>
                  </div>
                </div>
                
                <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">Hard</span>
              </div>

             
              <div class="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  
                  <div class="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200">HR</div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Binary Tree Level...</span>
                    <span class="text-[11px] text-slate-500 font-medium">HackerRank • 2 days ago</span>
                  </div>
                </div>
                <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Medium</span>
              </div>

              
              <div class="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Valid Parentheses</span>
                    <span class="text-[11px] text-slate-500 font-medium">LeetCode • 3 days ago</span>
                  </div>
                </div>
                <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Easy</span>
              </div>

            </div>

            <div class="mt-auto p-6 bg-primary/5 border-t border-primary/10 rounded-b-xl grid grid-cols-2 gap-4">
              <div class="text-center">
                <p class="text-[10px] font-bold text-slate-500 uppercase">Solved this week</p>
                <p class="text-2xl font-bold text-primary">12</p>
              </div>
              <div class="text-center">
                <p class="text-[10px] font-bold text-slate-500 uppercase">Streak Days</p>
                <p class="text-2xl font-bold text-primary">5</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </main>
  </div>

</body>
    </>
  )
}

export default App
