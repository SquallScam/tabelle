import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task.js';
import React, { Component } from 'react';

export default class App extends Component {

    handleSubmit(event) {
        
      }

    renderInputs() {
        return this.getInputs().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return(
        <div className="container">
            <header>
                <center><h1>Tabelle-Vorlage</h1></center>
            </header>

            <center> <table>
                        <tr> 
                            <th>CHANNEL</th> 
                            <th>PRICES</th> 
                            <th>Values <br /> HTML</th> 
                            <th>Values <br /> FULL</th> 
                            <th>Values <br /> ausgelistet</th> 
                            <th>Values <br /> ipoem</th>
                        </tr>
                        <tr>
                            <td>Master</td>
                            <td><center>X<input type="checkbox" name="checkbox" value="masterPrices" /></center> </td>
                            <td><center>X<input type="checkbox" name="checkbox" value="masterValuesHtml" /></center> </td>
                            <td><center>90,2<input type="checkbox" name="checkbox" value="masterValuesFull" /></center> </td>
                            <td><center>9,7<input type="checkbox" name="checkbox" value="masterValuesAusgelistet" /></center> </td>
                            <td><center>11,9<input type="checkbox" name="checkbox" value="masterValuesIpoem" /></center> </td>  
                        </tr>
                        <tr>
                            <td>DE</td>
                            <td><center>9,7<input type="checkbox" name="checkbox" value="dePrices" /></center> </td>
                            <td><center>150<input type="checkbox" name="checkbox" value="deValuesHtml" /></center> </td>
                            <td><center>29,6<input type="checkbox" name="checkbox" value="deValuesFull" /></center> </td>
                            <td><center>4,3<input type="checkbox" name="checkbox" value="deValuesAusgelistet" /></center> </td>
                            <td><center>X<input type="checkbox" name="checkbox" value="deValuesIpoem" /></center> </td>
                        </tr>
                        <tr>
                            <td>AT</td>
                            <td><center>9,1<input type="checkbox" name="checkbox" value="atPrices" /></center> </td>
                            <td><center>140<input type="checkbox" name="checkbox" value="atValuesHtml" /></center> </td>
                            <td><center>27,466<input type="checkbox" name="checkbox" value="atValuesFull" /></center> </td>
                            <td><center>5,1<input type="checkbox" name="checkbox" value="atValuesAusgelistet" /></center> </td>
                            <td><center>X<input type="checkbox" name="checkbox" value="atValuesIpoem" /></center> </td>
                        </tr>
                        <tr>
                            <td>CH</td>
                            <td><center>9,1<input type="checkbox" name="checkbox" value="chPrices" /></center> </td>
                            <td><center>138<input type="checkbox" name="checkbox" value="chValuesHtml" /></center> </td>
                            <td><center>27<input type="checkbox" name="checkbox" value="chValuesFull" /></center> </td>
                            <td><center>5,1<input type="checkbox" name="checkbox" value="chValuesAusgelistet" /></center> </td>
                            <td><center>X<input type="checkbox" name="checkbox" value="chValuesIpoem" /></center> </td> 
                        </tr>
                        <tr>
                            <td>EDU</td>
                            <td><center>2,9<input type="checkbox" name="checkbox" value="eduPrices" /></center> </td>
                            <td><center>41<input type="checkbox" name="checkbox" value="eduValuesHtml" /></center> </td>
                            <td><center>9,7<input type="checkbox" name="checkbox" value="eduValuesFull" /></center> </td>
                            <td><center>1,6<input type="checkbox" name="checkbox" value="eduValuesAusgelistet" /></center> </td>
                            <td><center>X<input type="checkbox" name="checkbox" value="eduValuesIpoem" /></center> </td>  
                        </tr>
                        
                    </table> <h2>Datenstand 11.2018</h2> </center>
            </div>
            
        );
    }//{this.renderInputs()}
}