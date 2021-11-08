import axios from "axios";

export async function fetchGithubProfileData(username) {
  const url = `https://api.github.com/users/${username}`;
  
  try {
    const user = await axios.get(url);
    const repos = await axios.get(user.data.repos_url);

    return {
      avatar: user.data.avatar_url,
      name: user.data.name,
      username: user.data.login,
      bio: user.data.bio,
      followers: user.data.followers,
      following: user.data.following,
      company: user.data.company,
      location: user.data.location,
      email: user.data.email,
      blog: user.data.blog,
      twitter: user.data.twitter_username,
      repos: repos.data.map((repo) => {
        return {
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          lastUpdate: repo.updated_at,
          url: repo.html_url,
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