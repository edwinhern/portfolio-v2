import { env } from '@/env';
import wretch from 'wretch';

// Configure API URL from environment
const apiUrl = env.GH_API_URL;
const githubUsername = env.GH_USERNAME;

// Create a wretch instance configured for API interactions
const api = wretch(apiUrl, {
  cache: 'no-store',
  mode: 'cors',
})
  .errorType('json')
  .resolve((resolver) => resolver.json() as Promise<GithubRepo[]>);

// Function to fetch pinned repository
export const fetchGithubRepos = async () => {
  return await api.get(`/?username=${githubUsername}`);
};
