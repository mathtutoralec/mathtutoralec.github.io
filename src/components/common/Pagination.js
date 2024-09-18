import React from "react";
//@mui
import TablePagination from '@mui/material/TablePagination';

// ----------------------------------------------------------------------

export const Pagination = props => {
  const {
    loading,
    count,
    onPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onRowsPerPageChange
  } = props;
  if (!!loading) return null;
  return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={onPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  )
};

export default Pagination;
