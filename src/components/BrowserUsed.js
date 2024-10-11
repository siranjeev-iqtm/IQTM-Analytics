import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Accessibility from 'highcharts/modules/accessibility';

Accessibility(Highcharts);
const BrowserUsed = (props) => {
    // Data retrieved from https://netmarketshare.com/
    const { data } = props;
    let chrome = 0;
    let ff = 0;
    let safari = 0;
    let others = 0;
    data.forEach(element => {
        if (element.browser_info === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0') {
 ff+=1;
        }
        else if (element.user_agent === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'){
chrome+=1;
        }
        else {
            others+=1
        }
        });
    const options = {
        accessibility: {
            enabled: false // This suppresses the warning
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 350
        },
        title: {
            text: 'Browsers Used',
            align: 'center',
            // verticalAlign: 'middle',
            y: 60,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },

        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', chrome],
                ['Firefox', ff],
                ['Others', others]
            ]
        }]
        ,
        credits: {
            enabled: false
        },
    };

    return (<div className="col-lg-5 elems mt-5">
        <HighchartsReact highcharts={Highcharts} options={options} />

    </div>)
}
export default BrowserUsed;