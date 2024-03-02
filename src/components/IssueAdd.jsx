import React from 'react';
import graphqlFetch from '../APIs/GraphQlFetch';

export default function IssueAdd({ loadData }) {
  async function AddIssue(e) {
    e.preventDefault();
    const form = document.forms.issue_add_form;
    const owner = form.owner.value;
    const title = form.title.value;
    const result = await graphqlFetch(`
      mutation createIssue($issue: IssueInput!) {
        createIssue(issue: $issue) {
          id
        }
      }    
    `, {
      issue: {
        owner,
        title,
      },
    });
    console.log(`Issue with id ${result.createIssue.id} added`);
    await loadData();
    form.owner.value = '';
    form.title.value = '';
  }
  return (
    <form name="issue_add_form">
      <input type="text" name="owner" placeholder="Owner" />
      <input type="text" name="title" placeholder="Title" />
      <button onClick={AddIssue} type="button">Add</button>
    </form>
  );
}
