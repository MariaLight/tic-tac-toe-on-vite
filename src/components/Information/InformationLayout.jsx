// import styles from './information.module.css';
import { connect } from "react-redux";
import { Component } from 'react';

export class InformationLayoutConatiner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center text-7xl" >
                <p>{this.props.text}</p>
                {this.props.isGameEnded &&
                    <button className="button" onClick={this.props.startAgain}>Начать сначала</button>}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    isGameEnded: state.isGameEnded
})
export const InformationLayout = connect(mapStateToProps)(InformationLayoutConatiner);