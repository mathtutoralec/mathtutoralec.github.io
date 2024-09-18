export const Switched = ({isShown, children}) => {
  if (!isShown) return null;
  return <>
    {children}
  </>
}

export default Switched;