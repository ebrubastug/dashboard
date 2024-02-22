import React from "react";
import gallery from "../images/gallery.svg";

function Table(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>
            <input
              class="form-check-input input-checked"
              type="checkbox"
              value=""
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
        {props.data?.map((row) => (
          <tr class="th" key={row?.id}>
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
