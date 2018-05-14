import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardItem from '../components/BoardItem';
import CreateBoard from '../containers/CreateBoard';
import nanoid from 'nanoid';

class BoardList extends Component {

    render() {

        return (
            <div className="board-list">
                <CreateBoard className="board-item"/>
                {
                    this.props.boards.map(board => (
                        <BoardItem key={board.id} {...board}/>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.boards
    };
};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);