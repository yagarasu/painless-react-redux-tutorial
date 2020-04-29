class GithubApi {
  getHeaders () {
    const headers = new Headers()
    headers.append('Authorization', `token ${process.env.REACT_APP_GITHUB_PERSONAL_TOKEN}`)
    return headers
  }

  async search (query) {
    try {
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`
      const headers = this.getHeaders()
      const res = await fetch(url, { headers })
      const { items: results } = await res.json()
      return results;
    } catch (e) {
      throw e
    }
  }
}

export default new GithubApi();
