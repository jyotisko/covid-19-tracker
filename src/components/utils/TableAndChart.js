import './../styles/TableAndChart.scss';
import Table from './Table';
import Chart from './Chart';

const TableAndChart = ({ chartData = {} }) => {
  return (
    <section className='table-chart'>
      <Table />
      {
        chartData === {} || <Chart data={chartData} />
      }

    </section>
  );
}

export default TableAndChart;