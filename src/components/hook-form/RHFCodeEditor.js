import { useState, useEffect } from "react";
//lib
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver"; //this is important for some reason: https://github.com/securingsincity/react-ace/issues/772
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github"; //light
import "ace-builds/src-noconflict/theme-twilight"; //dark
import "ace-builds/src-noconflict/ext-language_tools";
//S16
import OutlinedBox from "../outlined-box/OutlinedBox";
import { useSettingsContext } from "../../contexts/settings";
// @mui
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/system";
import useDebouncedValue from "../../hooks/useDebouncedValue";

// ----------------------------------------------------------------------

const getHelperText = (helperText, codeError, errorMessage) => {
  if (!!codeError) return codeError;
  if (!!errorMessage) return errorMessage;
  return helperText;
};

// ----------------------------------------------------------------------

export default function RHFCodeEditor({
  name,
  label,
  helperText,
  readOnly,
  disabled,
  getErrors,
  example,
  mode = "javascript", // or 'html'
  ...other
}) {
  const { control, watch, setValue } = useFormContext();
  const { palette } = useTheme();
  const { themeMode } = useSettingsContext();
  const [codeError, setCodeError] = useState(false);

  const value = watch(name);
  const debouncedValue = useDebouncedValue(value);
  useEffect(() => {
    if (!getErrors) return;
    setCodeError(getErrors(debouncedValue));
  }, [debouncedValue, setCodeError]);

  return (
    <OutlinedBox label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <AceEditor
                name={name}
                {...field}
                width="100%"
                //debounceChangePeriod={0} DO NOT USE THIS
                height="400px"
                tabSize={2}
                mode={mode}
                theme={themeMode === "dark" ? "twilight" : "github"}
                editorProps={{ $blockScrolling: true, padding: "50px" }}
                showPrintMargin={false}
                readOnly={disabled || readOnly}
                onLoad={editor => {
                  editor.renderer.setPadding(10);
                  editor.renderer.setScrollMargin(10);
                }}
                style={{
                  border: `solid 1px ${palette.background.paper}`,
                  borderRadius: "6px",
                }}
                {...other}
              />
              <Stack direction="row" spacing={2}>
                {!!example && (
                  <Button variant="outlined" onClick={() => setValue(name, example)}>
                    Reset To Template
                  </Button>
                )}
                <FormHelperText error={!!error?.message || !!codeError}>
                  {getHelperText(helperText, codeError, error?.message)}
                </FormHelperText>
              </Stack>
            </>
          );
        }}
      />
    </OutlinedBox>
  );
}

RHFCodeEditor.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
