import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBoard} from "../redux/ducks/boards";

class CreateBoard extends Component {

    state = {
        isOpen: false,
        newTitle: '',
    };

    closeForm = () => {
        this.setState({
            isOpen: false,
            newTitle: ''
        });
    };

    handleOpen = e => {
        this.setState({
            isOpen: true,
        });
    };

    handleClose = e => {
        e.stopPropagation();

        this.closeForm()
    };

    onInputChange = e => {
        const input = e.target;
        this.setState(prevState => ({
            ...prevState,
            newTitle: input.value,
        }))
    };

    handleAddBoard = () => {
      this.props.addBoard(this.state.newTitle);
      this.closeForm();
    };

    handleShortcuts = e => {
        const key = e.key;

        if (key === 'Enter') {
            this.handleAddBoard();
        }
    };

    render() {
        const { className } = this.props;
        const {isOpen, newTitle} = this.state;

        return (
            <div className={'create-board ' + className} onClick={this.handleOpen}>
                <div className="create-title">
                    <div>
                        Create a new board
                    </div>
                    {isOpen && <button onClick={this.handleClose}>x</button> }
                </div>
                {
                    isOpen &&
                    <div className="create-board-form" onKeyPress={this.handleShortcuts}>
                        <div>
                            What shall we call the board ?
                        </div>

                        <input value={newTitle} onChange={this.onInputChange}/>
                        <div>
                            <button onClick={this.handleClose}>Cancel</button>
                            <button onClick={this.handleAddBoard}>Submit</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    addBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);