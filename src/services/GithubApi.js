import GitHub from 'github-api';

const GithubApi = {
  search: async (query) => {
    try {
      const github = new GitHub();
      const search = github.search({ q: query, page: 1, per_page: 10 });
      const { data: results } = await search.forRepositories();
      return results;
    } catch (e) {
      throw e
    }
  }
};

export default GithubApi;
