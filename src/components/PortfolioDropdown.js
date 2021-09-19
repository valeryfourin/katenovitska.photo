// import React, { useState } from 'react';
// import { Dropdown, FormControl } from 'react-bootstrap';
// // import { render } from 'sass';


// const PortfolioDropdown = React.forwardRef(({ children, onClick }, ref) => (
//     <a
//       href="link"
//       ref={ref}
//       onClick={(e) => {
//         e.preventDefault();
//         onClick(e);
//       }}
//     >
//       {children}
//     </a>
//   ));
  
//   // forwardRef again here!
//   // Dropdown needs access to the DOM of the Menu to measure it
//   const PortfolioMenu = React.forwardRef(
//     ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//       const [value, setValue] = useState('');
  
//       return (
//         <div
//           ref={ref}
//           style={style}
//           className={className}
//           aria-labelledby={labeledBy}
//         >
//           <FormControl
//             autoFocus
//             className="mx-3 my-2 w-auto"
//             placeholder="Type to filter..."
//             onChange={(e) => setValue(e.target.value)}
//             value={value}
//           />
//           <ul className="list-unstyled">
//             {React.Children.toArray(children).filter(
//               (child) =>
//                 !value || child.props.children.toLowerCase().startsWith(value),
//             )}
//           </ul>
//         </div>
//       );
//     },
//   );
  
//   render(
//     <Dropdown>
//       <Dropdown.Toggle as={PortfolioDropdown} id="dropdown-custom-components">
//         Custom toggle
//       </Dropdown.Toggle>
  
//       <Dropdown.Menu as={PortfolioMenu}>
//         <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//         <Dropdown.Item eventKey="3" active>
//           Orange
//         </Dropdown.Item>
//         <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>,
//   );

// export default PortfolioDropdown;