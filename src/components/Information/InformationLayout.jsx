// import styles from './information.module.css';
import { connect } from "react-redux";
import { Component } from 'react';

export class InformationLayoutConatiner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center text-7xl mt-16" >
                <p>{this.props.text}</p>
                {this.props.isGameEnded &&
                    <button className="transition linear duration-200 hover:bg-purple-500 hover:text-white cursor-pointer mt-16 py-8 px-16 text-5xl bg-purple-200 rounded-4xl" onClick={this.props.startAgain}>Начать сначала</button>}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    isGameEnded: state.isGameEnded
})
export const InformationLayout = connect(mapStateToProps)(InformationLayoutConatiner);