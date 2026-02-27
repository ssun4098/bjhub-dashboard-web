import Header from './component/Header'
import Sidebar from './component/Sidebar'

function App() {

  return (
    <>
<div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
  <div className="flex h-screen overflow-hidden">
    <Sidebar />

    <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50/50 dark:bg-background-dark/50">
      <Header />

      <div className="p-8 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden">
            <div id="calendar"></div>
          </div>
        </div>
        <div className="xl:col-span-4 space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col h-full">

            <div className="p-6 border-b border-primary/5 flex items-center justify-between">
              <h3 className="text-lg font-bold">Recent Solutions</h3>
              <a className="text-xs font-bold text-primary hover:underline" href="#">View All</a>
            </div>

            <div className="p-4 flex-1 space-y-3">
              <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div className="flex flex-col">
                    
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Two Sum</span>
                    <span className="text-[11px] text-slate-500 font-medium">LeetCode • 2 hours ago</span>
                  </div>
                </div>
                
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Easy</span>
              </div>

              
              <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Longest Palindromic...</span>
                    <span className="text-[11px] text-slate-500 font-medium">LeetCode • 5 hours ago</span>
                  </div>
                </div>
                
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Medium</span>
              </div>

              
              <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Merge k Sorted Lists</span>
                    <span className="text-[11px] text-slate-500 font-medium">LeetCode • Yesterday</span>
                  </div>
                </div>
                
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">Hard</span>
              </div>

             
              <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200">HR</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Binary Tree Level...</span>
                    <span className="text-[11px] text-slate-500 font-medium">HackerRank • 2 days ago</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Medium</span>
              </div>

              
              <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/10">LC</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Valid Parentheses</span>
                    <span className="text-[11px] text-slate-500 font-medium">LeetCode • 3 days ago</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Easy</span>
              </div>

            </div>

            <div className="mt-auto p-6 bg-primary/5 border-t border-primary/10 rounded-b-xl grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Solved this week</p>
                <p className="text-2xl font-bold text-primary">12</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Streak Days</p>
                <p className="text-2xl font-bold text-primary">5</p>
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
