import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import { Tooltip } from '@material-ui/core';
import { marks } from '../../../data/marks';

type Props = {};

const getSvg = (type: 'hostel' | 'corpus' | 'lib') => {
  switch (type) {
    case 'corpus':
      return '/resources/school.svg';
    case 'hostel':
      return '/resources/hotel.svg'
    case 'lib':
      return '/resources/read.svg'
  }
}

const ExtendedTooltip: FC<any> = ({ mark }) => {


  return <Tooltip interactive
                  key={`${mark.name}-${mark.lat}`}
                  title={<div>
                    {mark.name}
                  </div>}>
      <span>
        <img src={getSvg(mark.type)} alt="" style={{ width: 24, height: 24 }}/>
      </span>
  </Tooltip>
}

const Map: FC<Props> = () => {
  return <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDRyf29LX_icEKctrk9-RFAxenzdUoTzKQ' }}
      defaultCenter={{ lng: 32.0433886, lat: 49.4547623 }}
      defaultZoom={16}
      options={{ streetViewControl: true }}
    >
      {marks.length && marks.map((mark: any) => {
        return <ExtendedTooltip lat={mark.lat}
                                lng={mark.lng}
                                mark={mark}/>
      })}
    </GoogleMapReact>
  </div>;
};

export default Map;
