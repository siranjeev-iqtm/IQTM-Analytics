import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const UserActions = (props) => {
    const { data } = props;
    let i = 0;
    let j = 0;
    let k = 0;
    let arr;
    let pieData = data.forEach((res) => {
        i += res.scrolls;
        j += res.clicks;
        k += res.submissions;
        arr = [{
            name: "scrolls",
            y: i,
        }, {
            name: "clicks",
            y: j,
        }, {
            name: "submissions",
            y: k,
        }
        ];
    })
    // console.log(arr);
    const options = {
        chart: {
            type: 'pie',
            height: 350
        },
        title: {
            text: 'Users Actions'
        },
        tooltip: {
            valueSuffix: '%'
        },

        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1em',
                        textOutline: 'none',
                        opacity: 0
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: arr
            }
        ],
        credits: {
            enabled: false
        },
    };

    return (<div className="col-lg-4 elems mt-5">
        <HighchartsReact highcharts={Highcharts} options={options} />

    </div>)

}
export default UserActions;