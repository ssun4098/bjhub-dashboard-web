import { Treemap, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'axis',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'Axis', size: 24593 },
      { name: 'AxisGridLine', size: 652 },
      { name: 'AxisLabel', size: 636 },
      { name: 'CartesianAxes', size: 6703 },
    ],
  },
  {
    name: 'controls',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'ExpandControl', size: 2832 },
      { name: 'HoverControl', size: 4896 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
    ],
  },
  {
    name: 'data',
    children: [
      { name: 'Data', size: 20544 },
      { name: 'DataList', size: 19788 },
      { name: 'DataSprite', size: 10349 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      {
        name: 'render',
        children: [
          { name: 'ArrowType', size: 698 },
          { name: 'EdgeRenderer', size: 5569 },
          { name: 'IRenderer', size: 353 },
          { name: 'ShapeRenderer', size: 2247 },
        ],
      },
      { name: 'ScaleBinding', size: 11275 },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'DataEvent', size: 7313 },
      { name: 'SelectionEvent', size: 6880 },
      { name: 'TooltipEvent', size: 3701 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'legend',
    children: [
      { name: 'Legend', size: 20859 },
      { name: 'LegendItem', size: 4614 },
      { name: 'LegendRange', size: 10530 },
    ],
  },
  {
    name: 'operator',
    children: [
      {
        name: 'distortion',
        children: [
          { name: 'BifocalDistortion', size: 4461 },
          { name: 'Distortion', size: 6314 },
          { name: 'FisheyeDistortion', size: 3444 },
        ],
      },
      {
        name: 'encoder',
        children: [
          { name: 'ColorEncoder', size: 3179 },
          { name: 'Encoder', size: 4060 },
          { name: 'PropertyEncoder', size: 4138 },
          { name: 'ShapeEncoder', size: 1690 },
          { name: 'SizeEncoder', size: 1830 },
        ],
      },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'GraphDistanceFilter', size: 3165 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      { name: 'IOperator', size: 1286 },
      {
        name: 'label',
        children: [
          { name: 'Labeler', size: 9956 },
          { name: 'RadialLabeler', size: 3899 },
          { name: 'StackedAreaLabeler', size: 3202 },
        ],
      },
      {
        name: 'layout',
        children: [
          { name: 'AxisLayout', size: 6725 },
          { name: 'BundledEdgeRouter', size: 3727 },
          { name: 'CircleLayout', size: 9317 },
          { name: 'CirclePackingLayout', size: 12003 },
          { name: 'DendrogramLayout', size: 4853 },
          { name: 'ForceDirectedLayout', size: 8411 },
          { name: 'IcicleTreeLayout', size: 4864 },
          { name: 'IndentedTreeLayout', size: 3174 },
          { name: 'Layout', size: 7881 },
          { name: 'NodeLinkTreeLayout', size: 12870 },
          { name: 'PieLayout', size: 2728 },
          { name: 'RadialTreeLayout', size: 12348 },
          { name: 'RandomLayout', size: 870 },
          { name: 'StackedAreaLayout', size: 9121 },
          { name: 'TreeMapLayout', size: 9191 },
        ],
      },
      { name: 'Operator', size: 2490 },
      { name: 'OperatorList', size: 5248 },
      { name: 'OperatorSequence', size: 4190 },
      { name: 'OperatorSwitch', size: 2581 },
      { name: 'SortOperator', size: 2023 },
    ],
  },
];
// #endregion

const COLORS = ['#004d3f', '#006858', '#00806f', '#009882', '#00b096', '#33c4ae'];

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, name } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? COLORS[Math.floor((index / (root?.children?.length ?? 1)) * 6)] : 'transparent',
          stroke: '#ffffff18',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && width > 50 && height > 24 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 5}
          textAnchor="middle"
          fill="#fff"
          fontSize={13}
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight={600}
        >
          {name}
        </text>
      ) : null}
      {depth === 1 && width > 36 ? (
        <text
          x={x + 8}
          y={y + 17}
          fill="#fff"
          fontSize={10}
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight={700}
          fillOpacity={0.6}
        >
          {String(index + 1).padStart(2, '0')}
        </text>
      ) : null}
    </g>
  );
};

const AlgorithmHeatMap = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-primary/5 flex items-center justify-between shrink-0">
        <h3 className="text-lg font-bold">Algorithm Categories</h3>
        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Treemap</span>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="size"
            stroke="#fff"
            fill="#00806f"
            content={CustomizedContent}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AlgorithmHeatMap;
