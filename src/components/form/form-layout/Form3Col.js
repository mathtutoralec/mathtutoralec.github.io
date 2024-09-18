import Switched from '../../Switched';
import FormGridContainer from './FormGridContainer';
//@mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import FormGridItem from './FormGridItem';

export const Form3Col = (props) => {
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
            <FormGridItem key={`form-section-${sectionIndex}-${fieldIndex}`}>
              <field.Component 
                {...field.props}
              />
            </FormGridItem>  
          )}
        </FormGridContainer>  
        )
      })}
    </>
  );
}

export default Form3Col;