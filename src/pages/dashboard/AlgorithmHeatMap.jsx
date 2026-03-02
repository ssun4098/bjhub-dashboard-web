import { useState, useEffect, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis,
  Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import getAlgorithmStat from '../../services/algorithmService';

const buildChartData = (algorithms, limit) =>
  [...algorithms]
    .sort((a, b) => b.solvedCount - a.solvedCount)
    .slice(0, limit)
    .reverse()
    .map((algo) => ({ name: algo.algorithmName, count: algo.solvedCount }));

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0]?.payload;
  const count = payload.find((p) => p.dataKey === 'count')?.value ?? 0;
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs shadow">
      <p className="font-bold mb-1 text-slate-800 dark:text-slate-100">{entry?.name}</p>
      <p className="text-slate-500 dark:text-slate-400">
        풀이 수: <span className="font-bold text-primary">{count}</span>
      </p>
    </div>
  );
};

const LIMIT_OPTIONS = [5, 10, 15, 20];

const AlgorithmHeatMap = () => {
  const [algorithms, setAlgorithms] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetch = async () => {
      // TODO repositoryId 상태관리 추가
      const repositoryId = 4;
      const response = await getAlgorithmStat({ repositoryId });
      setAlgorithms(response.data.algorithms);
    };
    fetch();
  }, []);

  const data = useMemo(() => buildChartData(algorithms, limit), [algorithms, limit]);

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-primary/5 flex items-center justify-between shrink-0">
        <h3 className="text-lg font-bold">Algorithm Distribution</h3>
        <div className="flex items-center gap-1">
          {LIMIT_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setLimit(n)}
              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors ${
                limit === n
                  ? 'text-primary bg-primary/10'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <div style={{ height: Math.max(data.length * 48, 100) }} className="px-4 pt-4 pb-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(148,163,184,0.15)" />
              <XAxis
                type="number"
                allowDecimals={false}
                tick={{ fontSize: 10, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fontSize: 13, fill: '#475569' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148,163,184,0.08)' }} />
              <Bar
                dataKey="count"
                maxBarSize={18}
                fill="#00806f"
                fillOpacity={0.85}
                radius={[0, 3, 3, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmHeatMap;
