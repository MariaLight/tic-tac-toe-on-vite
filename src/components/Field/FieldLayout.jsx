// import styles from './field.module.css';
import {connect } from 'react-redux'
import { Component } from 'react'

export class FieldLayoutContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid grid-cols-3">
                {this.props.field.map((item, index) =>
                    <button key={index} onClick={() => this.props.makeMove(this.props.currentPlayer, index)} className={`rounded-none w-60 h-60 p-0 m-0 border border-black text-9xl cursor-pointer ${item} ${item && 'cursor-auto pointer-events-none'}`}>{item}</button>
                )}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    field: state.field
})
export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
