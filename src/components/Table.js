"use-client";
import { React, useEffect, useState } from "react";
import gallery from "../images/gallery.svg";

function Table(props) {
  const [checkAll, setCheckAll] = useState([]);

  useEffect(() => {
    setCheckAll(props?.data);
  }, [props?.data]);

  const checkHandler = (index) => {
    var list = checkAll?.map((item, currentIndex) => {
      return currentIndex === index
        ? { ...item, checked: !item.checked }
        : item;
    });
    setCheckAll(list);
  };

  const test = () => {
    var list = checkAll?.map((item) => {
      var data = { ...item, checked: !item.checked };
      return data;
    });
    setCheckAll(list);
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th>
            <input
              class="form-check-input input-checked"
              type="checkbox"
              onClick={() => {
                test();
              }}
              id="flexCheckDefault"
            />
          </th>
          <th class="th">Audience Name</th>
          <th class="th">Tags</th>
          <th class="th">Status</th>
          <th class="th">Action</th>
        </tr>
      </thead>
      <tbody>
        {checkAll?.map((row, index) => (
          <tr class="th" key={row?.id}>
            <th>
              <input
                class="form-check-input"
                type="checkbox"
                checked={row.checked}
                onChange={() => checkHandler(index)}
                id={`checkbox${row.id}`}
              />
            </th>
            <td>
              <img src={gallery} alt="gallery" class="img-thumbnail me-2" />
              {row?.name}
            </td>
            <td class="td">{row?.tags[0]}</td>
            <td class="status td">{row?.status}</td>
            <td class="td"> {"..."} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
