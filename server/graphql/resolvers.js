const validateIssue = require('./error_handlers/validateIssue');
const dateScalar = require('./scalar_types/date_scalar');
const issuesDB = [
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
const aboutMsg = "'Hello! I'm the message telling you, that it's a test API'";

module.exports = {
  Date: dateScalar,
  Query: {
    about: () => aboutMsg,
    issueList() {
      return issuesDB;
    },
  },
  Mutation: {
    setAboutMsg(_, { msg }) {
      aboutMsg = msg;
      return aboutMsg;
    },
    createIssue(_, { issue }) {
      validateIssue(issue);
      issue.id = issuesDB.length + 1;
      issue.created = new Date();
      issue.status = issue.status || 'New';
      issuesDB.push(issue);
      return issue;
    },
  },
};
