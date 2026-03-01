function SolutionItem(props) {
    const {title, siteName, tier, tierLevel, submitAt} = props;

    const TIER_STYLES = {
        bronze:   'bg-amber-100  text-amber-700  dark:bg-amber-900/30  dark:text-amber-400',
        silver:   'bg-slate-100  text-slate-500  dark:bg-slate-800      dark:text-slate-400',
        gold:     'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
        platinum: 'bg-cyan-100   text-cyan-600   dark:bg-cyan-900/30   dark:text-cyan-400',
        diamond:  'bg-blue-100   text-blue-600   dark:bg-blue-900/30   dark:text-blue-400',
        ruby:     'bg-rose-100   text-rose-600   dark:bg-rose-900/30   dark:text-rose-400',
    }

    const PROGRAMMERS_LEVEL_STYLES = {
        'level 1': 'bg-sky-100    text-sky-500    dark:bg-sky-900/30    dark:text-sky-400',
        'level 2': 'bg-sky-200    text-sky-600    dark:bg-sky-900/50    dark:text-sky-300',
        'level 3': 'bg-blue-200   text-blue-600   dark:bg-blue-900/50   dark:text-blue-300',
        'level 4': 'bg-blue-300   text-blue-700   dark:bg-blue-800/60   dark:text-blue-200',
        'level 5': 'bg-indigo-300 text-indigo-800 dark:bg-indigo-800/60 dark:text-indigo-200',
    }

    const tierStyle = siteName === '프로그래머스'
        ? (PROGRAMMERS_LEVEL_STYLES[tier] ?? 'bg-slate-100 text-slate-500')
        : (TIER_STYLES[tier?.toLowerCase()] ?? 'bg-slate-100 text-slate-500')

    const SITE_NAME_STYLES = {
        '백준': 'bg-primary/10 text-primary border-primary/10',
        '프로그래머스': 'bg-blue-100 text-blue-600 border-blue-200'
    }

    const key = siteName?.toLowerCase();

    return (
        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">

                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs border overflow-hidden ${SITE_NAME_STYLES[key] ?? 'bg-primary/10 text-primary border-primary/10'}`}>
                    <span className="text-center leading-tight break-all px-1">{siteName}</span>
                  </div>
                  <div className="flex flex-col">

                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">{title}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{submitAt}</span>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${tierStyle}`}> {tier} {tierLevel}
                </span>
        </div>
    )
}

export default SolutionItem;
