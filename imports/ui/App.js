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
                            <td> <input type="text" ref="inputMaster1" /> </td>
                            <td><input type="text" ref="inputMaster2" /> </td>
                            <td><input type="text" ref="inputMaster3" /> </td>
                            <td><input type="text" ref="inputMaster4" /> </td>
                            <td><input type="text" ref="inputMaster5" /> </td>  
                        </tr>
                        <tr>
                            <td>DE</td>
                            <td><input type="text" ref="inputDE1" /> </td>
                            <td><input type="text" ref="inputDE2" /> </td>
                            <td><input type="text" ref="inputDE3" /> </td>
                            <td><input type="text" ref="inputDE4" /> </td>
                            <td><input type="text" ref="inputDE5" /> </td> 
                        </tr>
                        <tr>
                            <td>AT</td>
                            <td><input type="text" ref="inputAT1" /> </td>
                            <td><input type="text" ref="inputAT2" /> </td>
                            <td><input type="text" ref="inputAT3" /> </td>
                            <td><input type="text" ref="inputAT4" /> </td>
                            <td><input type="text" ref="inputAT5" /> </td>  
                        </tr>
                        <tr>
                            <td>CH</td>
                            <td><input type="text" ref="inputCH1" /> </td>
                            <td><input type="text" ref="inputCH2" /> </td>
                            <td><input type="text" ref="inputCH3" /> </td>
                            <td><input type="text" ref="inputCH4" /> </td>
                            <td><input type="text" ref="inputCH5" /> </td>  
                        </tr>
                        <tr>
                            <td>EDU</td>
                            <td><input type="text" ref="inputEDU1" /> </td>
                            <td><input type="text" ref="inputEDU2" /> </td>
                            <td><input type="text" ref="inputEDU3" /> </td>
                            <td><input type="text" ref="inputEDU4" /> </td>
                            <td><input type="text" ref="inputEDU5" /> </td>  
                        </tr>
                        
                    </table></center>
            </div>
        );
    }//{this.renderInputs()}
}