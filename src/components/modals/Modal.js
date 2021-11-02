import { WrapText } from '@material-ui/icons';
import { StylesContext } from '@material-ui/styles';
import React, { Component } from 'react'
import Portal from './Portal'


export default class modal extends Component {
    render() {

        const{
            children,
            toggle,
            active
        } = this.props;

        return (
            <Portal>
               {active && (<div style={styles.wrapper}>
                    <div style={styles.window}>
                        <button style={styles.closeIcon} onClick={toggle} >x</button>
                        <div>{children}</div>
                    </div>   
                </div> 
                )}
            </Portal>
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    window: {
        position: 'relative',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon: {
        position: 'absolute',
        borderRadius: '5px',
        top: 0,
        right: 0
    }
}