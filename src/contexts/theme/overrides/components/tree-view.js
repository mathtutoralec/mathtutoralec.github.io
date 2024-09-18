// ----------------------------------------------------------------------

export function treeView(theme) {
  return {
    MuiTreeItem: {
      styleOverrides: {
        root: {
          paddingTop: 4,
          paddingBottom: 4,
        },
        label: {
          ...theme.typography.body1,
        },
        iconContainer: {
          width: "auto",
        },
      },
    },
  };
}
