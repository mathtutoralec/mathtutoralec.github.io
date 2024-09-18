import React from 'react';
import { useResponsive } from '../../../hooks/useResponsive'
import Switched from '../../Switched';
//@mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';

export const FormSectioned = (props) => {
  const { formData, ...rest } = props;
  const wideView = useResponsive('up', 'md');

  return (
    <Grid container columnSpacing={4} rowSpacing={3} p={2} {...rest}>
      {formData.sections.map((section, sectionIndex) => 
      <React.Fragment key={`form-section-${sectionIndex}`}>
        <Switched isShown={wideView}>
          <Grid xs={4}>
            <Typography variant="h6" sx={{ mb:1 }}>
              {section?.title}
            </Typography>
            <Switched isShown={!!section?.description}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {section?.description}
              </Typography>
            </Switched>
          </Grid>
        </Switched>
        <Grid xs={12} md={8} container rowSpacing={3} sx={{pt: 3}}>
          {section.fields.map((field, fieldIndex) => 
            <Grid xs={12} key={`form-section-${sectionIndex}-${field}-${fieldIndex}`}>
              <field.Component 
                {...field?.props}
              />  
            </Grid>
          )}
        </Grid>
      </React.Fragment>
      )}
    </Grid>
  );
}

export default FormSectioned;