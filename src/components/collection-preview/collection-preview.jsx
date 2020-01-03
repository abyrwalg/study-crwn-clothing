import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

function CollectionPreview(props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
