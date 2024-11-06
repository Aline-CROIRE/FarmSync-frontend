import React from 'react';
import { Card } from 'react-bootstrap';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Total Stock</Card.Title>
                    <Card.Text>Current stock levels: [Dynamic Data]</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
