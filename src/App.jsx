import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const initIssues = [
  {
    id: 1,
    status: 'New',
    owner: 'Ravan',effort: 5,
    created: new Date('2018-08-15'),
    due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Eddie',
    effort: 14,
    created: new Date('2018-08-16'),
    due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
  },
];

const IssueFilter = () => {
  return (
    <div>Issue Filter component to filter issues shown in an issue table</div>
  );
}

const IssueRow = ({ issue, rowStyle }) => {
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

const IssueTable = ({ issues }) => {
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

const IssueAdd = ({ createIssue }) => {
  function AddIssue() {
    const form = document.forms.issue_add_form;
    const owner = form.owner.value;
    const title = form.title.value;
    const issue = {
      owner,
      title,
      status: 'New',
    };
    createIssue(issue);
    form.owner.value = '';
    form.title.value = '';
  }
  return (
    <form name="issue_add_form">
      <input type="text" name="owner" placeholder="Owner" />
      <input type="text" name="title" placeholder="Title" />
      <button onClick={() => AddIssue()} type="button">Add</button>
    </form>
  );
}

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  function createIssue(issue) {
    issue.id = issues.length + 1;
    issue.created = new Date();
    const newIssues = issues.slice();
    newIssues.push(issue);
    setIssues(newIssues);
  }
  
  async function loadData() {
    // logic seems to be stupid since asynchronous calling to the server to fetch the issues will be realized here, but at the point in time it is what it is
    setTimeout(() => {
      const result = initIssues;
      setIssues(result);
    }, 500);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable issues={issues} />
      <hr />
      <IssueAdd createIssue={createIssue} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IssueList />);
