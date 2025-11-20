import React from 'react';
import { FaqsData } from './data';
import Faq from './faq';

const Faqs = () => {
  return (
    <div>
      {FaqsData.map(data => <Faq key={data.id} {...data} />)}
    </div>
  )
}

export default Faqs