import React from 'react';
import ReactDOM from 'react-dom/client';

const IssueFilter = () => {
  return (
    <div>Issue Filter component to filter issues shown in an issue table</div>
  );
}

const IssueTable = () => {
  return (
    <div>Issue Table component to render the complete list of issues or filtered ones</div>
  );
}

const IssueAdd = () => {
  return (
    <div>Issue Add component to create new issues</div>
  );
}

const IssueList = () => {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable />
      <hr />
      <IssueAdd />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IssueList />);
