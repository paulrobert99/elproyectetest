import React from 'react';
import Table from 'react-bootstrap/Table';
  
function Tab(){
    return(
          
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Restaurant Name</th>
                        <th>Location</th>
                        <th>Overall Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Desszertem</td>
                        <td>Miskolc</td>
                        <td>4.2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Babel Budapest Restaurant</td>
                        <td>Budapest</td>
                        <td>4.6</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tisza Terasz</td>
                        <td>Tokaj</td>
                        <td>4.0</td>
                    </tr>
                </tbody>
            </Table>
               
    )
    }

export default Tab;  