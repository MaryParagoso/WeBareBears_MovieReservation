// Components/CancellationPath.js
import React from 'react';
import { Form, Select } from 'antd';
import reservationNumbers from './ReservationNumber';

const { Option } = Select;

const CancellationPath = ({ selectedReservation, onReservationChange }) => {
  return (
    <div>
      <h1>Cancel</h1>
      <Form>
        <Form.Item label="Search and Select Reservation:">
          <Select
            showSearch
            value={selectedReservation}
            onChange={onReservationChange}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {reservationNumbers.map((reservation) => (
              <Option key={reservation} value={reservation}>
                {reservation}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CancellationPath;