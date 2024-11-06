import React from 'react';
import StockItem from './StockItem';

function StockList({ stocks }) {
    return (
        <div>
            <h3>Stock List</h3>
            {stocks.map((stock, index) => (
                <StockItem key={index} data={stock} />
            ))}
        </div>
    );
}

export default StockList;
