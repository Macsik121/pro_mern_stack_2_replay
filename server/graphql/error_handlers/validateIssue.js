const { GraphQLError } = require('graphql');

module.exports = function validateIssue(issue) {
  if (issue.title.length < 3)
    throw new GraphQLError('Title size is 3 characters at least', { extensions: { code: 'BAD_USER_INPUT', } });
  if (issue.status === 'Assigned' && !issue.owner)
    throw new GraphQLError('Field `owner` is required when status is `Assigned`', { extensions: { code: 'BAD_USER_INPUT', } });
}
