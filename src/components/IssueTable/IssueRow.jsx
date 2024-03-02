import React from 'react';

export default function IssueRow({ issue, rowStyle }) {
  const {
    id,
    status,
    owner,
    created,
    effort,
    due,
    title,
  } = issue;
  return (
    <tr>
      <td>{id}</td>
      <td>{status}</td>
      <td>{owner}</td>
      <td>{created.toDateString()}</td>
      <td>{effort}</td>
      <td>{due ? due.toDateString() : ''}</td>
      <td>{title}</td>
    </tr>
  );
}
