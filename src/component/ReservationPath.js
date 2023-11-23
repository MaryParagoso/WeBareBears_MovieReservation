// Components/ReservationPath.js
import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const ReservationPath = ({ selectedDate, onDateChange }) => {
  const generateDateOptions = () => {
    const today = new Date();
    const dateOptions = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formattedDate = date.toISOString().split('T')[0];
      dateOptions.push(formattedDate);
    }

    return dateOptions;
  };

  return (
    <div>
      <h1>Reservation</h1>
      <Form>
        <Form.Item label="Select a Date:">
          <Select value={selectedDate} onChange={onDateChange}>
            {generateDateOptions().map((date) => (
              <Option key={date} value={date}>
                {date}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReservationPath;