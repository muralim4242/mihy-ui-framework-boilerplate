import React from 'react';
import {Catalog} from 'catalog';

class CatalogDemo extends React.Component {
  render()
  {
    return(
      <Catalog
        title='Mihy-ui-framework'
        pages={[
          {
            path: '/',                     // The path where the page can be accessed
            title: 'Introduction',         // The page title
            content: require('./Intro')      // The documentation component
          },
          {
            path: '/two',                     // The path where the page can be accessed
            title: "two",         // The page title
            content: require('./Intro')      // The documentation component
          },
          // Other pages …
        ]}
      />
    )
  }
}

export default CatalogDemo;
