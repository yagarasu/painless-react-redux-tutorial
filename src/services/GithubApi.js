import GitHub from 'github-api';

const GithubApi = {
  getClient: () => {
    return new GitHub({
      username: process.env.REACT_APP_GITHUB_USER,
      password: process.env.REACT_APP_GITHUB_PASS
    })
  },
  search: async (query) => {
    try {
      const github = this.getClient();
      const search = github.search({ q: query });
      const { data: results } = await search.forRepositories();
      return results;
    } catch (e) {
      throw e
    }
  }
};

export default GithubApi;
