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

const TimeSpent = (props) => {
    const { data } = props;

    // Map to accumulate time spent per date (day and month)
    let timeSpentMap = new Map();

    // Process the data to group by day and accumulate time spent
    data.forEach((res) => {
        const d = new Date(res.timestamp);
        const day = d.getDate(); // Extract the day
        const month = d.toLocaleString('default', { month: 'long' }); // Get month name
        const dateKey = `${day}${getOrdinalSuffix(day)} ${month}`; // Format: "9th October"

        // Add time spent for this formatted date
        if (timeSpentMap.has(dateKey)) {
            timeSpentMap.set(dateKey, timeSpentMap.get(dateKey) + res.time_spent);
        } else {
            timeSpentMap.set(dateKey, res.time_spent);
        }
    });

    // Convert the map to an array of dates and total time spent
    const arrayFromSet = Array.from(timeSpentMap.keys()); // Formatted dates (e.g., "9th October")
    const timeSpentArr = arrayFromSet.map(dateKey => timeSpentMap.get(dateKey)); // Total time spent

    // Debugging - check the formatted dates and corresponding time spent
    console.log('Formatted Dates:', arrayFromSet);
    console.log('Total time spent per date:', timeSpentArr);

    const options = {
        chart: {
            height: 350,
            type: 'line'
        },
        title: {
            text: 'Total Time Spent by Users Per Day',
            align: 'left'
        },

        subtitle: {
            text: 'Grouped by Date (Day and Month)',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Time in seconds'
            }
        },

        xAxis: {
            title: {
                text: 'Date (Day and Month)'
            },
            categories: arrayFromSet, // Display formatted dates on X-axis
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },

        series: [{
            name: 'Total Time Spent',
            data: timeSpentArr // Display total time spent per formatted date
        }],
        credits: {
            enabled: false
        }
    };

    return (
        <div className="col-lg-8 elems mt-5">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default TimeSpent;
