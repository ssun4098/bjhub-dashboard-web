function SolutionItem(props) {
    const {id, title, siteName, tier, tierLevel, submitAt} = props;
    
    const TIER_STYLES = {
        bronze:   'bg-amber-100  text-amber-700  dark:bg-amber-900/30  dark:text-amber-400',
        silver:   'bg-slate-100  text-slate-500  dark:bg-slate-800      dark:text-slate-400',
        gold:     'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
        platinum: 'bg-cyan-100   text-cyan-600   dark:bg-cyan-900/30   dark:text-cyan-400',
        diamond:  'bg-blue-100   text-blue-600   dark:bg-blue-900/30   dark:text-blue-400',
        ruby:     'bg-rose-100   text-rose-600   dark:bg-rose-900/30   dark:text-rose-400',
    }

    const SITE_NAME_STYLES = {
        bj: 'bg-primary/10 text-primary border-primary/10',
        programmers: 'bg-blue-100 text-blue-600  border-blue-200'
    }
    
    return (
        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs border ${SITE_NAME_STYLES[siteName?.toLowerCase()] ?? 'bg-primary/10 text-primary border-primary/10'}`}>{siteName}</div>
                  <div className="flex flex-col">
                    
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">{title}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{submitAt}</span>
                  </div>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${TIER_STYLES[tier?.toLowerCase()] ?? 'bg-slate-100 text-slate-500'}`}> {tier} {tierLevel}
                </span>
        </div>
    )
}

export default SolutionItem;