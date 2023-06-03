import React, { useEffect, useState } from "react";

const TableOrders = (props) => {


  return (
    <>
      {/* table */}
      <div className=" parent_table">
        <h2>information orders</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">img ticket</th>
                <th scope="col">name ticket</th>
                <th scope="col">price ticket</th>
                <th scope="col">category ticket</th>
                <th scope="col">Quantity ticket</th>
                <th scope="col">date command</th>
                <th scope="col">total price</th>
              </tr>
            </thead>
            <tbody>
              {props.order.length > 0
                ? props.order.map((itemOrder) => {
                    return (
                      <tr key={itemOrder.idOrder}>
                        <th scope="row">{itemOrder.idOrder}</th>
                        <td>
                          {" "}
                          <img
                            src={itemOrder.img_ticket}
                            style={{ width: "50px" }}
                            alt={itemOrder.name_ticket}
                          />{" "}
                        </td>
                        <td>{itemOrder.name_ticket}</td>
                        <td>{itemOrder.price_ticket}</td>
                        <td>{itemOrder.category_ticket}</td>
                        <td>{itemOrder.Quantity_ticket}</td>
                        <td>{itemOrder.date_command}</td>
                        <td>
                          {itemOrder.price_ticket * itemOrder.Quantity_ticket} ${" "}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableOrders;
