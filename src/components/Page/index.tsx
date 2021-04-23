import React from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelsWrapper , ModelSection} from '../Model'
import { Container , Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay'


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model S',
            'Model Y',
            'Model 3',
            'Model X',
            'Lowest Cost Solar Panels in America',
            'Solar for New Roofs',
            'Accessories',
          ].map(modelName =>(
            <ModelSection
          className="colored"
            modelName ={modelName}
            overlayNode ={
              <DefaultOverlayContent
              label={modelName}
              description="
              Order Online for Touchless Delivery"
              />
            }
          />
          ))}
          
        </div>
            <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  )
}

export default Page;
