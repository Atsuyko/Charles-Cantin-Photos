import React, { useState } from 'react';
import styled from 'styled-components';
import Categorie from './Categorie';
import Data from './Data'
import Photo from './Photo';

export default function Filtre() {
  const [data, setData] = useState(Data);

  const categoryData = Data.map(value => {
    return value.category
  })
  const tabsData = ['all', ...new Set(categoryData)]

  function filterCategory(category) {
    if (category === 'all') {
      setData(Data)
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category === category;
    })
    setData(filteredData);
  }

  return (
    <Wrapper className="container my-3" >
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Categorie filterCategory={filterCategory} tabsData={tabsData} />
          <Photo data={data} />
        </div>
        <div className="col-md-1"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``