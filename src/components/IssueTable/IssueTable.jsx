import React from 'react';
import IssueRow from './IssueRow';

export default function IssueTable({ issues }) {
  const rowStyle = {padding: 4, border: "1px solid silver"};
  const issueRows = issues.map(issue => <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}
