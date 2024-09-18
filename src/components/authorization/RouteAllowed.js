import { Route } from "react-router-dom";
import RouteNotAllowed from "../errors/RouteNotAllowed";
import useAuthorization from "../../hooks/useAuthorization";

const NotAllowed = ({ ...rest }) => (
  <Route {...rest}>
    <RouteNotAllowed/>  
  </Route>
);

const Allowed = ({ layout: Layout, component: Component, data, ...rest }) => (
  <Route 
    {...rest}
    render={props =>
      <Layout>
        <Component {...props} data={data} />
      </Layout>
    }
  />
);

const RouteAllowed = ({ layout, component, roles, statements, isPublic, data, ...rest }) => {
  /**
   * Return RouteNotAllowed error if accessing this route without the required permissions
   */
  const { isAllowed } = useAuthorization();
  const authorized = isAllowed({ roles, statements, isPublic });
      
  if (!authorized) return (<NotAllowed />);
  
  return (
    <Allowed
      layout={layout} 
      component={component}
      data={data}
      {...rest}
    />
  );
};

export default RouteAllowed;