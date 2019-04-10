import React, { Component, Fragment } from 'react';
import { Button } from 'antd';

class ButtonDom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonLoading: false
        }
        this.buttonLoadingClink = this.buttonLoadingClink.bind(this);
    }
    render() {
        const { buttonLoading } = this.state;
        return (
            <Fragment>
                <div className='antd-title'>button按钮</div>
                <div className='antd-button'>
                    <Button type='primary'>主按钮</Button>
                    <Button>次按钮</Button>
                    <Button type='dashed'>虚按钮</Button>
                    <Button type='danger'>危险按钮</Button>
                </div>
                <div className='antd-title mt20'>button按钮带icon</div>
                <div className='antd-button'>
                    <Button type='primary' shape="circle" icon="search"></Button>
                    <Button>次按钮</Button>
                    <Button type='dashed'>虚按钮</Button>
                    <Button type='danger' loading = {buttonLoading} onClick={this.buttonLoadingClink}>loading</Button>
                </div>
            </Fragment>
        )
    }
    buttonLoadingClink () {
        console.error(this);
        this.setState(() => ({
            buttonLoading: true
        }))
        let key = setTimeout(() => {
            this.setState(() => ({
                buttonLoading: false
            }))
            clearTimeout(key);
        }, 2000);
    }
}
export default ButtonDom;