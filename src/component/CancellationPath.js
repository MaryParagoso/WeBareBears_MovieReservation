// Components/CancellationPath.js
import React from "react";
import { Form, Select } from "antd";
import {
  CancelContainer,
  Container,
  SelectContainer,
  CancelWallpaper,
} from "../stylesheets/CssCancellation";
import reservationNumbers from "./ReservationNumber";

const { Option } = Select;

const CancellationPath = ({ selectedReservation, onReservationChange }) => {
  return (
    <Container>
      <CancelWallpaper>
        <h1>Cancellation</h1>
        <CancelContainer>
          <Form>
            <Form.Item label="Search and Select Reservation:">
              <SelectContainer>
                <Select
                  showSearch
                  value={selectedReservation}
                  onChange={onReservationChange}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ width: "100%", minWidth: "200px" }}
                >
                  {reservationNumbers.map((reservation) => (
                    <Option key={reservation} value={reservation}>
                      {reservation}
                    </Option>
                  ))}
                </Select>
              </SelectContainer>
            </Form.Item>
          </Form>
        </CancelContainer>
      </CancelWallpaper>
    </Container>
  );
};

export default CancellationPath;
