import { request } from "@octokit/request";

async function getSearchedRepositories(opts = {}) {
  const {
    word,
    language = '',
    sort
  } = opts;

  // eslint-disable-next-line no-throw-literal
  if (!opts.word) throw 'Input is required for the search.';

  const queryString = `${word}+language:${language}`;

  const response = await request({
    method: "GET",
    url: "/search/repositories",
    q: queryString,
    sort: sort,
  });

  // response.data.items = [{id, name, description, language, stargazers_count, html_url, owner: {id, login} }]
  // response.status

  return response;
}

export default getSearchedRepositories;