import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = '0%';
    if(props.max) {
        barFillHeight = Math.round( (props.value/props.maxValue) * 100 + '%');
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart_bar__fill" style={{height: barFillHeight}} ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
