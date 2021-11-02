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
                        <button onClick={toggle} style={styles.close}>x</button>
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
        position: 'fixed',
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
    close: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    closeIcon: {
        fontSize: '20px',
        color: '#000'
    }
}