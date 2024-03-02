import React, { useEffect, useState } from 'react';
import graphqlFetch from '../APIs/GraphQlFetch';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable/IssueTable';
import IssueAdd from './IssueAdd';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  
  async function loadData() {
    const fetchedIssues = await graphqlFetch(`
      query {
        issueList {
          id
          status
          owner
          created
          due
          effort
          title
        }
      }
    `);
    setIssues(fetchedIssues.issueList);
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
      <IssueAdd loadData={loadData} />
    </div>
  );
}

export default IssueList;
