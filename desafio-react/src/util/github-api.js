import axios from "axios";

export async function fetchGithubProfileData(username) {
  const url = `https://api.github.com/users/${username}`;
  
  try {
    const user = await axios.get(url);
    const repos = await axios.get(user.data.repos_url);

    return {
      name: user.data.name,
      bio: user.data.bio,
      photo: user.data.avatar_url,
      username: user.data.login,
      location: user.data.location,
      followers: user.data.followers,
      following: user.data.following,
      organization: user.data.company,
      email: user.data.email,
      blog: user.data.blog,
      twitter: user.data.twitter_username,
      repos: repos.data.map((repo) => {
        return {
          url: repo.html_url,
          lastUpdate: repo.updated_at,
          stars: repo.stargazers_count,
          name: repo.name,
          description: repo.description,
        };
      }),
    };
  } catch (error) {
    alert(error);
    return null;
  }
}

export async function isActive(username) {
  try {
    const url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url);
    return response.status !== 404;
  } catch (error) {
    return false;
  }
}