import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Button from './button';
import './style.css'

class Antd extends Component {
    render() {
        return (
            <div className='antdBox-main'>
                <Button />
            </div>
        )
    }
};

export default Antd;