import Switched from "../../Switched";
import FormGridContainer from "./FormGridContainer";
//@mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import FormGridItem from "./FormGridItem";

export const Form2Col = props => {
  const { formData, stretchOrphans = false } = props;
  return (
    <>
      {formData.sections.map((section, sectionIndex) => {
        let fullWidthFields = 0;
        section.fields.forEach(field => {
          if (field?.fullWidth) fullWidthFields++;
        });
        const oddFields = (section.fields.length - fullWidthFields) % 2 !== 0;
        return (
          <FormGridContainer
            title={section?.title}
            key={`form-section-${sectionIndex}`}
            rowSpacing={{ xs: 4 }}
          >
            <Switched isShown={!!section?.description}>
              <Grid xs={12} mt={-3} pt={0}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {section?.description}
                </Typography>
              </Grid>
            </Switched>
            {section.fields.map((field, fieldIndex) => {
              const lastField = section.fields.length - 1 === fieldIndex;
              const width = (stretchOrphans && lastField && oddFields) || field?.fullWidth ? 12 : 6;
              return (
                <FormGridItem lg={width} key={`form-section-${sectionIndex}-${fieldIndex}`}>
                  <field.Component {...field.props} />
                </FormGridItem>
              );
            })}
          </FormGridContainer>
        );
      })}
    </>
  );
};

export default Form2Col;
