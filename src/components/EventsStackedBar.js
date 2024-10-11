import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Utility function to get the ordinal suffix (e.g., "st", "nd", "rd", "th")
const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // 11th to 19th
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

const EventsStackedBar = (props) => {
    const { data } = props;

    // Create an object to store aggregated data by date
    const aggregatedData = {};

    // Aggregate events per day
    data.forEach((res) => {
        const d = new Date(res.timestamp);
        const day = d.getDate();
        const month = d.toLocaleString('default', { month: 'long' });
        const dateWithSuffix = `${day}${getOrdinalSuffix(day)} ${month}`;

        if (!aggregatedData[dateWithSuffix]) {
            aggregatedData[dateWithSuffix] = { scrolls: 0, clicks: 0, submissions: 0 };
        }

        // Add up the events for the same day
        aggregatedData[dateWithSuffix].scrolls += res.scrolls;
        aggregatedData[dateWithSuffix].clicks += res.clicks;
        aggregatedData[dateWithSuffix].submissions += res.submissions;
    });

    // Extract data for the chart
    const dates = Object.keys(aggregatedData);
    const eventScroll = dates.map((date) => aggregatedData[date].scrolls);
    const eventClicks = dates.map((date) => aggregatedData[date].clicks);
    const eventSubmissions = dates.map((date) => aggregatedData[date].submissions);

    // Debugging - check the aggregated data
    console.log('Aggregated Data:', aggregatedData);

    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        title: {
            text: 'Daily Events Captured'
        },
        xAxis: {
            categories: dates // Display days on X-axis
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Events Count'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [
            {
                name: 'Submissions',
                data: eventSubmissions
            },
            {
                name: 'Clicks',
                data: eventClicks
            },
            {
                name: 'Scrolls',
                data: eventScroll
            }
        ],
        credits: {
            enabled: false
        }
    };

    return (
        <div className="col-lg-7 elems mt-5">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default EventsStackedBar;
