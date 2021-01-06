import React from 'react'
import {connect} from '../utils/connect'
import {addAction} from '../redux/actionCreators'

function Home (props) {
    return (
        <div>
            <h2>Home</h2>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e=>props.increment()}>+</button>
            <button onClick={e=>props.add(5)}>-</button>
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
        increment: () => {
            dispatch(addAction(1))
        },
        add: (num) => {
            dispatch(addAction(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)