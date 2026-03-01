import { useEffect, useState } from 'react';
import getProblemList from '../../services/problemService'
import SolutionItem from './SolutionItem';

function RecentSolutions() {
    const [items, setItems] = useState([]);
useEffect(() => {
    const fetch = async () => {
        const response = await getProblemList(0, 10, 4);
        setItems(response.data);
    };
    fetch();
}, []);

    

    return (
        <>
            <div className="xl:col-span-4 space-y-6">
            <div className="bg-white dark:bg-background-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col h-full">

                <div className="p-6 border-b border-primary/5 flex items-center justify-between">
                <h3 className="text-lg font-bold">Recent Solutions</h3>
                <a className="text-xs font-bold text-primary hover:underline" href="#">View All</a>
                </div>

                <div className="p-4 flex-1 space-y-3">
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
        </>
    )
}

export default RecentSolutions;