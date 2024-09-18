import { useState } from "react";

const defaultOptions = {
  rowsPerPageOptions: [10, 15, 20, 25, 50],
};

export const usePagination = (queryParams, setValue, overrideOptions = {}) => {
  const options = { ...defaultOptions, ...overrideOptions };
  const [nextPrev, setNextPrev] = useState("next");
  const [currentPage, setCurrentPage] = useState(0);

  const getHandleNext = metadata => () => {
    setValue("before", undefined);
    setValue("after", metadata?.after);
    setNextPrev("next");
    setCurrentPage(page => page + 1);
  };

  const getHandlePrevious = metadata => () => {
    setValue("after", undefined);
    setValue("before", metadata?.before);
    setNextPrev("prev");
    setCurrentPage(page => page - 1);
  };

  const getPaginationData = metadata => {
    const tableTotal = metadata?.total || 0;
    const tableRemaining = metadata?.remaining || 0;
    const tableCount = metadata?.count || 0;
    const tableTo = nextPrev == "next" ? tableTotal - tableRemaining : tableRemaining + tableCount;
    const rowsPerPage = queryParams?.limit || 25;

    const page = Math.floor((tableTo - 1) / rowsPerPage);

    const onRowsPerPageChange = event => {
      setValue("limit", event.target.value);
      setValue("before", undefined);
      setValue("after", undefined);
      setNextPrev("next");
    };

    const onPageChange = (event, page) => {
      const handleNext = getHandleNext(metadata);
      const handlePrevious = getHandlePrevious(metadata);
      if (page === currentPage + 1) handleNext();
      if (page === currentPage - 1) handlePrevious();
    };

    return {
      count: tableTotal,
      page: page >= 1 ? page : 0,
      rowsPerPage,
      onRowsPerPageChange,
      rowsPerPageOptions: options.rowsPerPageOptions,
      onPageChange,
      metadata,
    };
  };

  return {
    getHandleNext,
    getHandlePrevious,
    getPaginationData,
  };
};

export default usePagination;

