import React from 'react';
import PropTypes from 'prop-types';

const BoardItem = ({id, title}) => {

    return (
        <div className="board-item">
            {title}
        </div>
    );
};

BoardItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
};

export default BoardItem;
