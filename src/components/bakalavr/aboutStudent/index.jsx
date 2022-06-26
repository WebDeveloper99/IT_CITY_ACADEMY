
import React, { useRef, useState, memo, useEffect } from 'react'
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Container } from './style'


const AboutStudents = () => {

    const [data, setData] = useState([])
      
      
      // const axios = require("axios").default;

      // useEffect(() => {
      //   axios
      //     .get("https://feedback-app-1.herokuapp.com/feedbacks")
      //     .then(function (response) {
      //       console.log(response.data);
      //       setData(response.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      //     .then(function () {});
      // }, []);





    const searchInput = useRef(null);
  
    const [state, setState] = useState({searchText:'', searchedColumn:''})
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setState({ searchText: '' });
    };
    
    const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            //   this.searchInput = node;
            // }}
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex,
                });
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select(), 100);
        }
      },
      render: text =>
        state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
    
      const columns = [
        {
          title: 'T/R',
          dataIndex: 'tr',
          key: 'id',
          ...getColumnSearchProps('tr'),
        },
        {
          title: 'chatID',
          dataIndex: 'chatID',
          key: 'id',
          ...getColumnSearchProps('chatID'),
        },
        {
          title: 'firstName',
          dataIndex: 'firsName',
          key: 'id',
          ...getColumnSearchProps('firsName'),
        },
        {
          title: "userName",
          dataIndex: 'userName',
          key: 'id',
          ...getColumnSearchProps('userName'),
        },
      ];
      
      return (
        <Container>
          <Table columns={columns} dataSource={data} bordered loading='Spin' rowKey={record => record.id} style={{width: '100%', border:"1px solid #ccc"}} />
        </Container>
      );
}

export default AboutStudents