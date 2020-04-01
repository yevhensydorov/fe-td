import React from 'react';

const VisibleTodoFilter = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
);

export default VisibleTodoFilter;