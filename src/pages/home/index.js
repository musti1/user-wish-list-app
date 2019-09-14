import React from 'react';
import { Table, Modal , Button, Select } from 'antd';

const { Option } = Select;

const data = [
    { key: '1', name: 'USB - A', description: 'Latest Technology', quantity: 23 },
    { key: '2', name: 'USB - C', description: 'New stuff in the market', quantity: 25 },
    { key: '3', name: 'Rode Microphone', description: 'clearest voice in town', quantity: 26 },
];

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.columns = [
            { title: 'Name', dataIndex: 'name', render: text => <span>{text}</span> },
            { title: 'Description', dataIndex: 'description' },
            { title: 'Quantity', dataIndex: 'quantity' },
            { title: '', dataIndex: 'wishlist', render: () => <Button onClick={() => this.setState({ visible: true })} icon="plus" type="primary">Add to Wishlist</Button>}
        ];
    }

    handleOk = e => {
        console.log(e);
        this.setState({ visible: false });
    };
    handleWishListModalChange = value => {
        console.log('selected value:',value);
    }
    handleCancel = e => {
        console.log(e);
        this.setState({ visible: false });
    };
    render() {
        return (
            <>
                <Table columns={this.columns} dataSource={data} size="middle" />

                <Modal
                    title="Select Category"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <Select defaultValue="monitors" style={{ width: '100%' }} onChange={this.handleWishListModalChange}>
                <Option value="monitors">monitors</Option>
                <Option value="microphones">microphones</Option>
                <Option value="mice">mice</Option>
                <Option value="keyboards">keyboards</Option>
                </Select>
                </Modal>
            </>
        )
    }
}

export default HomePage;