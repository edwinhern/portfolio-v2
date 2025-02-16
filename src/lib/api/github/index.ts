import { GITHUB_API_CONFIG } from "@/lib/api/github/constants";
import type { GitHubRepository } from "@/lib/api/github/types";

export async function fetchGithubRepos(): Promise<GitHubRepository[]> {
	const url = new URL(GITHUB_API_CONFIG.BASE_URL);
	url.searchParams.append("username", GITHUB_API_CONFIG.USERNAME);

	try {
		const response = await fetch(url.toString(), {
			next: { revalidate: GITHUB_API_CONFIG.CACHE_DURATION },
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`GitHub API Error: ${errorData.message || response.statusText}`);
		}

		const data = (await response.json()) as GitHubRepository[];

		if (!Array.isArray(data)) {
			throw new Error("Invalid response format: expected an array");
		}

		return data;
	} catch (error) {
		console.error("[GitHub API]:", error instanceof Error ? error.message : "Unknown error occurred");
		return [];
	}
}
