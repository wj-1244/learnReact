import React from 'react'
import {connect} from '../utils/connect'
import {subAction,decAction} from '../redux/actionCreators'

function About (props) {
    return (
        <div>
            <h2>About</h2>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e=>props.decrement()}>+</button>
            <button onClick={e=>props.subNumber(2)}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};
const  mapDispatchToProps = dispatch => {
    return {
        decrement: () => {
            dispatch(decAction())
        },
        subNumber: (num) => {
            dispatch(subAction(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)