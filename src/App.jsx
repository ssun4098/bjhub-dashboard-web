import Header from './component/Header'
import Sidebar from './component/Sidebar'

function App() {

  return (
    <>
<div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
  <div class="flex h-screen overflow-hidden">
    <Sidebar />

    <main class="flex-1 flex flex-col overflow-y-auto bg-slate-50/50 dark:bg-background-dark/50">
      <Header />

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

</div>
    </>
  )
}

export default App
