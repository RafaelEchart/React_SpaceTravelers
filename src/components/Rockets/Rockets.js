import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { loadRockets } from '../../redux/Rockets/rockets';
import './rocketCard.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketData = [
    {
      id: 1,
      active: false,
      stages: 2,
      boosters: 0,
      cost_per_launch: 6700000,
      success_rate_pct: 40,
      first_flight: '2006-03-24',
      country: 'Republic of the Marshall Islands',
      company: 'SpaceX',
      height: {
        meters: 22.25,
        feet: 73,
      },
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      mass: {
        kg: 30146,
        lb: 66460,
      },
      payload_weights: [
        {
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 450,
          lb: 992,
        },
      ],
      first_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 44.3,
        burn_time_sec: 169,
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
      },
      second_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 3.38,
        burn_time_sec: 378,
        thrust: {
          kN: 31,
          lbf: 7000,
        },
        payloads: {
          option_1: 'composite fairing',
          composite_fairing: {
            height: {
              meters: 3.5,
              feet: 11.5,
            },
            diameter: {
              meters: 1.5,
              feet: 4.9,
            },
          },
        },
      },
      engines: {
        number: 1,
        type: 'merlin',
        version: '1C',
        layout: 'single',
        isp: {
          sea_level: 267,
          vacuum: 304,
        },
        engine_loss_max: 0,
        propellant_1: 'liquid oxygen',
        propellant_2: 'RP-1 kerosene',
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
        thrust_to_weight: 96,
      },
      landing_legs: {
        number: 0,
        material: null,
      },
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'rocket',
    },
    {
      id: 1,
      active: true,
      stages: 2,
      boosters: 0,
      cost_per_launch: 6700000,
      success_rate_pct: 40,
      first_flight: '2006-03-24',
      country: 'Republic of the Marshall Islands',
      company: 'SpaceX',
      height: {
        meters: 22.25,
        feet: 73,
      },
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      mass: {
        kg: 30146,
        lb: 66460,
      },
      payload_weights: [
        {
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 450,
          lb: 992,
        },
      ],
      first_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 44.3,
        burn_time_sec: 169,
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
      },
      second_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 3.38,
        burn_time_sec: 378,
        thrust: {
          kN: 31,
          lbf: 7000,
        },
        payloads: {
          option_1: 'composite fairing',
          composite_fairing: {
            height: {
              meters: 3.5,
              feet: 11.5,
            },
            diameter: {
              meters: 1.5,
              feet: 4.9,
            },
          },
        },
      },
      engines: {
        number: 1,
        type: 'merlin',
        version: '1C',
        layout: 'single',
        isp: {
          sea_level: 267,
          vacuum: 304,
        },
        engine_loss_max: 0,
        propellant_1: 'liquid oxygen',
        propellant_2: 'RP-1 kerosene',
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
        thrust_to_weight: 96,
      },
      landing_legs: {
        number: 0,
        material: null,
      },
      flickr_images: [
        'https://imgur.com/azYafd8.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 9',
      rocket_type: 'rocket',
    }, {
      id: 3,
      active: false,
      stages: 2,
      boosters: 2,
      cost_per_launch: 90000000,
      success_rate_pct: 100,
      first_flight: '2018-02-06',
      country: 'United States',
      company: 'SpaceX',
      height: {
        meters: 70,
        feet: 229.6,
      },
      diameter: {
        meters: 12.2,
        feet: 39.9,
      },
      mass: {
        kg: 1420788,
        lb: 3125735,
      },
      payload_weights: [
        {
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 63800,
          lb: 140660,
        },
        {
          id: 'gto',
          name: 'Geosynchronous Transfer Orbit',
          kg: 26700,
          lb: 58860,
        },
        {
          id: 'mars',
          name: 'Mars Orbit',
          kg: 16800,
          lb: 37040,
        },
        {
          id: 'pluto',
          name: 'Pluto Orbit',
          kg: 3500,
          lb: 7720,
        },
      ],
      first_stage: {
        reusable: true,
        engines: 27,
        fuel_amount_tons: 1155,
        cores: 3,
        burn_time_sec: 162,
        thrust_sea_level: {
          kN: 22819,
          lbf: 5130000,
        },
        thrust_vacuum: {
          kN: 24681,
          lbf: 5548500,
        },
      },
      second_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 90,
        burn_time_sec: 397,
        thrust: {
          kN: 934,
          lbf: 210000,
        },
        payloads: {
          option_1: 'dragon',
          option_2: 'composite fairing',
          composite_fairing: {
            height: {
              meters: 13.1,
              feet: 43,
            },
            diameter: {
              meters: 5.2,
              feet: 17.1,
            },
          },
        },
      },
      engines: {
        number: 27,
        type: 'merlin',
        version: '1D+',
        layout: 'octaweb',
        isp: {
          sea_level: 288,
          vacuum: 312,
        },
        engine_loss_max: 6,
        propellant_1: 'liquid oxygen',
        propellant_2: 'RP-1 kerosene',
        thrust_sea_level: {
          kN: 845,
          lbf: 190000,
        },
        thrust_vacuum: {
          kN: 914,
          lbf: 205500,
        },
        thrust_to_weight: 180.1,
      },
      landing_legs: {
        number: 12,
        material: 'carbon fiber',
      },
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
        'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg',
        'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      rocket_id: 'falconheavy',
      rocket_name: 'Falcon Heavy',
      rocket_type: 'rocket',
    },
  ];

  useEffect(() => {
    if (document.readyState !== 'complete') {
      dispatch(loadRockets());
    }
  }, []);

  return (

    <React.Fragment>

    {rocketData.map((rocket, index) => (
      <div className='rocketCardContainer'key={index} >
      <img src={rocket.flickr_images[0]} width={220} />
      <div className='rocketCardTextContainer'>

      <h2>{rocket.rocket_name}</h2>
      <span>{rocket.active ? <Badge bg="primary" className='reservedBadge'>Reserved</Badge> : ''}{rocket.description}</span>
      {!rocket.active ? <Button variant="primary">Reserve Rocket</Button> : <Button variant="outline-secondary">Cancel Reservation</Button>}

      </div>
      </div>
    ))}

    </React.Fragment>

  );
};

export default Rockets;
