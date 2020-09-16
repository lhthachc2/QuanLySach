import React, { useState, useEffect, useRef } from 'react';
import { ChartCard, Doughnut, Bar } from "react-chartjs-2";
import { Menu, Dropdown, DatePicker, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment'
import unionBy from 'lodash/unionBy'
import sortBy from 'lodash/sortBy'
import { useDispatch, useSelector } from 'react-redux';
import { getListReveneu, getListTypeProduct } from '../../../modules/eCommerce/BieuDo/redux/actions';
import sumBy from 'lodash/sumBy';
const index = () => {
  const [type, setType] = useState('week');
  const [day, setDay] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [dataRevenue, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.ReveneuReducer.typeReveneuList);
  const dataType = useSelector(state => state.ReveneuReducer.typeTypeProductList);
  useEffect(() => {
    dispatch(getListReveneu({
      "type": type,
      "fromdate": moment(day, 'DD/MM/YYYY').format('DD/MM/YYYY'),
    }))
    dispatch(getListTypeProduct())
  }, [])
  useEffect(() => {
    dispatch(getListReveneu({
      "type": type,
      "fromdate": moment(day, 'DD/MM/YYYY').format('DD/MM/YYYY')
    }))
  }, [type, day])
  useEffect(() => { setData(sortBy(unionBy(data, renderLabel(), 'ngay'), ['ngay'])) }, [data])
  const dataChar = {
    labels: dataRevenue.map(x => x.ngay),
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: dataRevenue.map(x => x.doanhThu)
      }
    ]
  };
  const dataDought = {
    labels: dataType.map(x => `${x.name} ${x.count} sản phẩm`),
    datasets: [
      {
        backgroundColor: ['#ffcc00', '#ff0000', '#ff5656', '#ff7f00', '#56ff56', '#0000ff', '#00ffff', '#666666'],
        data: dataType.map(x => x.count)
      }
    ]
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => { setType('week') }}>
        Tuần
          </Menu.Item>
      <Menu.Item onClick={() => { setType('month') }}>
        Tháng
          </Menu.Item>
    </Menu>
  );
  function onChange(date, dateString) {
    setDay(dateString)
  }
  const renderLabel = () => {
    let newLabel = []
    if (type === 'week') {
      for (let i = 0; i < 7; i += 1) {
        const newObj = {
          "ngay": moment(day, 'DD/MM/YYYY').add(-i, 'day').format('DD/MM'),
          "doanhThu": 0
        };
        newLabel.push(newObj);
      }
    }
    if (type === 'month') {
      const date = moment(day, 'DD/MM/YYYY').startOf('month').format('DD/MM/YYYY');
      const dateEnd = moment(day, 'DD/MM/YYYY').endOf('month').format('DD');
      console.log(dateEnd)
      for (let i = 0; i < dateEnd; i += 1) {
        const newObj = {
          "ngay": moment(date, 'DD/MM/YYYY').add(+i, 'day').format('DD/MM'),
          "doanhThu": 0
        };
        newLabel.push(newObj);
      }
    }
    return newLabel
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <div style={{ width: '80%' }}>
          <Bar data={dataChar} />
        </div>
        <div style={{ margin: '18px', display: 'flex', flexDirection: 'column' }}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {type === 'week' ? 'Tuần' : 'Tháng'} <DownOutlined />
            </a>
          </Dropdown>
          <DatePicker onChange={onChange} format='DD/MM/YYYY' value={moment(day, 'DD/MM/YYYY')} />
          <div style={{ marginTop: '20px' }}>
            Tổng doanh thu: {sumBy(data, 'doanhThu')}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '24px' }} >
        <div style={{ margin: '18px', display: 'flex', flexDirection: 'column', width: '19%' }}>
          Tổng sản phẩm: {sumBy(dataType, 'count')}
        </div>
        <div style={{ width: '75%' }}>
          <Doughnut data={dataDought} />
        </div>
      </div>
    </>
  )
}

export default index;