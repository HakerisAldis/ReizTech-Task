import React from 'react';
import ListItem from '../ListItem';
import Country from '../../types/country';

interface Props {
  countries: Array<Country>;
}

const List: React.FC<Props> = ({ countries }) => {
  return (
    <>
      {countries.map(country => <div key={country.name}>
        <ListItem country={country} />
      </div>)}
    </>
  );
};

export default List;