import Header from './component/Header'
import Sidebar from './component/Sidebar'
import CustomContentTreemap from './pages/dashboard/AlgorithmHeatMap'
import RecentSolutions from './pages/dashboard/RecentSolutions'

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
          <div className="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden h-[480px]">
            <CustomContentTreemap />
          </div>
        </div>
        <RecentSolutions />


      </div>
    </main>
  </div>

</div>
    </>
  )
}

export default App
