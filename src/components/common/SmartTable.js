import { Container, Row, Col, Table, Label, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Switched from 'components/common/Switched';
import { MoreHorizontal } from 'react-feather';
import { FormCol } from "components/form/FormLayout";

const SmartTable = (props) => {
  return (
    <>
      <MobileTable {...props} />
      <DesktopTable {...props}/>
    </>
  ) 
}

export default SmartTable;

const MobileTable = ({showBurgerMenu, headers, rows, handleItemClick}) => {
  return rows.map((row, rowIndex) => {
    return (
      <FormCol className="d-md-none" key={`SmartTable-mobile-row-${rowIndex}`}>
        <Container 
          className="border border-secondary rounded-lg p-3 my-3 cursor-pointer"
          onClick={() => handleItemClick(row)}
        >
          <Switched isShown={showBurgerMenu}>
            <Row className='row-reverse'>
              <Col xs="12" >
                <BurgerMenu burgerMenu={row?.burgerMenu} />
              </Col>
            </Row>
          </Switched>
          <Row>
            {row.data.map((data, colIndex) => {
              return (
                <Col xs="12" sm="6" key={`SmartTable-mobile-row-${rowIndex}-col-${colIndex}`}>
                  <Label>{headers[colIndex]}</Label>
                  <h4>{data}</h4>
                </Col>
              )
            })}
          </Row>
        </Container>
      </FormCol> 
    )
  });  
}

const DesktopTable = ({showBurgerMenu, headers, rows, handleItemClick}) => {
  const tableHeaders = headers.map((h, i) => {
    return (<th key={`SmartTable-desktop-header-${i}`}>{h}</th>)
  });
  const tableData = rows.map((row, i) => {
    const tableRow = row.data.map((d, j) => {
      return <td key={`SmartTable-desktop-row-${i}-item-${j}`}>{d}</td>
    });
    if (showBurgerMenu) tableRow.push(
      <td onClick={(e) => e.stopPropagation()} key={`burgerMenu-${row.burgerMenu.key}`} >
        <BurgerMenu burgerMenu={row.burgerMenu} />
      </td>
    )
    return <tr key={`SmartTable-desktop-row-${i}`} className="cursor-pointer" onClick={() => handleItemClick(row)} >{tableRow}</tr>
  });
  return (
    <Col>
      <Table className="d-none d-md-table">
        <thead>
          <tr>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </Table>
    </Col>
  );
}

const BurgerMenu = ({burgerMenu}) => {
  if (!burgerMenu) return null;
  return (
    <div className="card-actions float-right">
      <UncontrolledDropdown>
        <DropdownToggle tag="a">
          <MoreHorizontal />
        </DropdownToggle>
        <DropdownMenu style={ { right: 0, left: "auto" } }>
          {burgerMenu.map((menuItem, index) => 
            <DropdownItem key={`${menuItem.key}-${index}`} onClick={menuItem.action}>{menuItem.label}</DropdownItem>
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}