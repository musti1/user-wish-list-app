import React from 'react';
import { Table, Modal, Button, Input} from 'antd';

const data = [
    { key: '1', name: 'USB - A', description: 'Latest Technology', quantity: 23 },
    { key: '2', name: 'USB - C', description: 'New stuff in the market', quantity: 25 },
    { key: '3', name: 'Rode Microphone', description: 'clearest voice in town', quantity: 26 }
];

const categoriesData = [
    [
        {key: '1', name: 'Samsung Monitor'},
        {key: '2', name: 'HP Monitor'},
        {key: '3', name: 'LG Monitor'}
    ],[
        {key: '1', name: 'Samsung Microphone'},
        {key: '2', name: 'HP Microphone'},
        {key: '3', name: 'LG Microphone'}
    ], [
        {key: '1', name: 'Samsung Mouse'},
        {key: '2', name: 'HP Mouse'},
        {key: '3', name: 'LG Mouse'}
    ],[
        {key: '1', name: 'Samsung Keyboard'},
        {key: '2', name: 'HP Keyboard'},
        {key: '3', name: 'LG Keyboard'}
    ]
];

const categories = [
    { key: '1', name: 'monitors'},
    { key: '2', name: 'microphones'},
    { key: '3', name: 'mice'},
    { key: '4', name: 'keyboards'}
];

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productListVisible: false,
            addToWishListVisible: false,
            productListIndex:0
        }
        this.columns = [
            { title: 'Name', dataIndex: 'name', render: text => (<a href='#' onClick={() => this.setState({ productListVisible: true })}>{text}</a>)},
            { title: '', dataIndex: 'removefromwishlist', render: () => <Button icon="minus-circle" type="danger">remove</Button> }
        ];

        this.productsList = [
            { title: 'Name', dataIndex: 'name', render: text => <span>{text}</span> },
            { title: '', dataIndex: 'removefromwishlist', render:  () => <Button icon="minus-circle" type="danger">remove</Button> },
        ];
    }

    handleProductListVisibleOk = e => {
        console.log(e);
        this.setState({ productListVisible: false });
    };

    handleProductListVisibleCancel = e => {
        console.log(e);
        this.setState({ productListVisible: false });
    };

    handleAddToWishListVisibleOk = e => {
        console.log(e);
        this.setState({ addToWishListVisible: false });
    };

    handleAddToWishListVisibleCancel = e => {
        console.log(e);
        this.setState({ addToWishListVisible: false });
    };
    render() {
        return (
            <>
                <h2>Wish List</h2>
                <Button onClick={() => this.setState({ addToWishListVisible: true })}>Add</Button>
                <Table onRow={(record, rowIndex) => {
                    return {
                      onClick: event => {
                          this.setState({productListIndex: rowIndex});
                          console.log('record', record)
                          console.log('rowIndex', rowIndex)
                          console.log('event', event)
                        }, // click row
                      onDoubleClick: event => {}, // double click row
                      onContextMenu: event => {}, // right button click row
                      onMouseEnter: event => {}, // mouse enter row
                      onMouseLeave: event => {}, // mouse leave row
                    };
                  }} columns={this.columns} dataSource={categories} size="middle" />
                <Modal
                    title="Add To Wish List"
                    visible={this.state.addToWishListVisible}
                    onOk={this.handleAddToWishListVisibleOk}
                    onCancel={this.handleAddToWishListVisibleCancel}
                    footer={[
                        <Button key="cancel" onClick={this.handleAddToWishListVisibleCancel}>
                          Cancel
                        </Button>,
                        <Button key="add" type="primary" onClick={this.handleAddToWishListVisibleOk}>
                          Add
                        </Button>,
                      ]}
                    >
                    Name Of Product
                    <Input style={{margin: '5px'}} placeholder="Product Name" />
                    </Modal>

                <Modal
                title="List Of Products"
                visible={this.state.productListVisible}
                onOk={this.handleProductListVisibleOk}
                onCancel={this.handleProductListVisibleCancel}>
                <Table columns={this.productsList} dataSource={categoriesData[this.state.productListIndex]} size="medium" />
            </Modal>
            </>
        )
    }
}

export default HomePage;