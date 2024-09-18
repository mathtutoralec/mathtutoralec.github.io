import Switched from '../../Switched';
import FormGridContainer from './FormGridContainer';
//@mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';

export const FormVertical = (props) => {
  const { formData } = props;
  return (
    <>
      {formData.sections.map((section, sectionIndex) => {
        return (  
        <FormGridContainer title={section?.title} key={`form-section-${sectionIndex}`}>
          <Switched isShown={!!section?.description}>
            <Grid xs={12} mt={-3} pt={0}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {section?.description}
              </Typography>
            </Grid>
          </Switched>
          {section.fields.map((field, fieldIndex) => 
            <Grid xs={12} key={`form-section-${sectionIndex}-${fieldIndex}`}>
              <field.Component 
                {...field.props}
              />
            </Grid>  
          )}
        </FormGridContainer>  
        )
      })}
    </>
  );
}

export default FormVertical;