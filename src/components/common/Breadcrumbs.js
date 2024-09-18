import { Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import Switched from 'components/common/Switched';

const Breadcrumbs = ({ items, title }) => {
  // Items must have a name and can have a link and active flag
  
  const breadcrumbItems = items.map((item, key) => (
    <BreadcrumbItem key={key} active={item.active}>
      {!!item.link ? (
        <Link 
          className="text-underline text-secondary font-weight-bold"
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <>{item.name}</>
      )}         
    </BreadcrumbItem>
  ));

  return (    
    <Card className="mt-3">
      <CardBody>
        <Switched isShown={!!title}><h2>{title}</h2></Switched>
        <Breadcrumb listClassName='p-0 m-0'>
          {breadcrumbItems}      
        </Breadcrumb>
      </CardBody>
    </Card>
  );
}
export default Breadcrumbs;