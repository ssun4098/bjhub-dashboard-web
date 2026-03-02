import { useEffect, useState } from 'react';
import getProblemList from '../../services/problemService'
import SolutionItem from './SolutionItem';
import dayjs from 'dayjs';

function RecentSolutions() {
    const [items, setItems] = useState([]);
    const [solvedThisWeek, setSolvedThisWeek] = useState(0);
useEffect(() => {
    const fetch = async () => {
        // TODO repositoryId 상태관리 추가
        const size = 10;
        const page = 0;
        const repositoryId = 4;
        const response = await getProblemList({
            size, page, repositoryId
        });
        setItems(response.data);
    };
    fetch();
}, []);
useEffect(() => {
    const today = dayjs();
    const startDate = today.subtract(7, 'day').startOf('day').format('YYYY-MM-DD HH:mm');
    const endDate = today.endOf('day').format('YYYY-MM-DD HH:mm');
    const fetch = async () => {
        // TODO repositoryId 상태관리 추가
        const size = 1;
        const page = 0;
        const repositoryId = 4;
        const response = await getProblemList({
            size, page, repositoryId, startDate, endDate
        });
        setSolvedThisWeek(response.count);
    };
    fetch();
})

    

    return (
        <>
            <div className="xl:col-span-4 space-y-6">
            <div className="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col h-[570px]">

                <div className="p-6 border-b border-primary/5 flex items-center justify-between">
                <h3 className="text-lg font-bold">Recent Solutions</h3>
                <a className="text-xs font-bold text-primary hover:underline" href="#">View All</a>
                </div>

                <div className="p-4 flex-1 min-h-0 overflow-y-auto space-y-3">
                {items.map((item) => (
                    <SolutionItem
                    key={item.id}
                    siteName={item.siteName}
                    title={item.title}
                    tier={item.tier}
                    tierLevel={item.tierLevel}
                    submitAt={item.submitAt}
                    />
                ))}
                
                </div>

                <div className="mt-auto p-6 bg-primary/5 border-t border-primary/10 rounded-b-xl grid gap-4">
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Solved this week</p>
                        <p className="text-2xl font-bold text-primary">{solvedThisWeek}</p>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default RecentSolutions;