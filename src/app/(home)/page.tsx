import { HomePage } from "@/components/features/home";
import { fetchGithubRepos } from "@/lib/api/github";

export default async function Home() {
	const repositories = await fetchGithubRepos();

	return <HomePage repositories={repositories} />;
}
