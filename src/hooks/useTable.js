const defaultOptions = {
  dense: false
}

// ----------------------------------------------------------------------

export const useTable = (overrideOptions = {}) => {
  const options = {...defaultOptions, ...overrideOptions};
  
  const size = options.dense ? 'sm' : 'md'
  return {
    size 
  }
}

export default useTable;