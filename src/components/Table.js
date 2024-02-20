import React from "react";
import gallery from "../images/gallery.svg";
import Httper from "../lib/api";

const url = "https://onox.cloud/backend/simple_audience.php";
var res = await Httper("get", url);

function Table(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <th>Audience Name</th>
          <th>Tags</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {res?.map((row) => (
          <tr key={row?.id}>
            <th>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <td>
              <img src={gallery} class="img-thumbnail me-2" />
              {row?.name}
            </td>
            <td>{row?.tags[1]}</td>
            <td>{row?.status}</td>
            <td>...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
