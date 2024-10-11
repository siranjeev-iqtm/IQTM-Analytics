import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_map from 'highcharts/modules/map';
import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json'; // Make sure this is the correct import

HC_map(Highcharts); // Initialize the map module

const Map = () => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        const mapOptions = {
            chart: {
                map: mapDataWorld, // Use the correct map data
            },
            title: {
                text: 'users across nations',
            },
            series: [{
                data: [
                    { code: 'IN', name: 'India', color: '#FF0000' },      // India (Red)
                    { code: 'US', name: 'United States', color: '#0000FF' }, // USA (Blue)
                    { code: 'AU', name: 'Australia', color: '#00FF00' },   // Australia (Green)
                ],
                joinBy: ['iso-a2', 'code'], // Make sure to join by the ISO code
                name: 'Countries',
                states: {
                    hover: {
                        color: '#BADA55',
                    },
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}', // Display country name on hover
                },
            }],
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                },
            },
            credits: {
                enabled: false
            },
        };

        setOptions(mapOptions); // Set the map options
    }, []);

    return (
        <div className="col-lg-12 mt-5">
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'mapChart'} // Ensure mapChart is used
                options={options}
            />
        </div>
    );
};

export default Map;
