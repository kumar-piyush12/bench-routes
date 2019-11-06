import React from 'react';
import {
  BRChartOpts,
  BRCharts,
  chartDefaultOptValues
} from '../layouts/BRCharts';
import Submenu from '../layouts/Submenu';

interface PingModulePropsTypes {}

interface PingModuleStateTypes {
  routes: object;
  sAddress: string;
  chartOpts: BRChartOpts[];
  showChart: boolean;
}

export default class PingModule extends React.Component<
  PingModulePropsTypes,
  PingModuleStateTypes
> {
  constructor(props: PingModulePropsTypes) {
    super(props);

    const tmp: BRChartOpts[] = [chartDefaultOptValues];
    this.state = {
      chartOpts: tmp,
      routes: {},
      sAddress: '',
      showChart: false
    };
  }

  public getAddressSubmenu = (sAddressParam: string) => {
    this.setState({ sAddress: sAddressParam });
  };

  public initialiseChartProps = () => {
    const chartOpts: BRChartOpts[] = [
      {
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
        label: 'Ping time-series chart',
        lineTension: 0.1,
        pBackgroundColor: '#fff',
        pBorderColor: 'rgba(75,192,2,1)',
        pBorderWidth: 1,
        pHoverBackgroundColor: 'rgba(75,192,192,1)',
        pHoverBorderColor: 'rgba(220,220,220,1)',
        pHoverBorderWidth: 2,
        pHoverRadius: 5,
        pRadius: 1,
        xAxisValues: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        yAxisValues: [65, 59, 80, 81, 56, 55, 40]
      }
    ];
    this.setState({ chartOpts, showChart: true });
  };

  public componentDidMount() {
    this.initialiseChartProps();
  }

  public render() {
    return (
      <>
        <Submenu
          module="ping"
          submodule=""
          getAddress={this.getAddressSubmenu}
        />
        {this.state.showChart ? (
          <div className="canvas-chart-wrapper">
            <BRCharts opts={this.state.chartOpts} />
          </div>
        ) : (
          <div>Chart not available</div>
        )}
      </>
    );
  }
}
