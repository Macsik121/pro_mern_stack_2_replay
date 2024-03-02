import 'whatwg-fetch';

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

export default async function graphqlFetch(query = '', variables = {}) {
  try {
    const result = await fetch('http://localhost:3000/graphql', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const data = JSON.parse(await result.text(), jsonDateReviver);
    if (data.errors)
      alert(`Error while fetching from graphql server: ${data.errors[0].message}`);
    return data.data;
  } catch (error) {
    alert(`Server error during fetching: ${error}`);
  }
}
