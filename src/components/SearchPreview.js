import React from 'react';

const SearchPreview = (props) => (
    <div>
      {props.data.map(location => <SearchPreview {...location}/>)}
    </div>
);


export default SearchPreview;