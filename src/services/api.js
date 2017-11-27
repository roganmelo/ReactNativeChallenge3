class Api {
  URL = 'https://api.github.com/users';

  getUser = async (name) => {
    let res = await fetch(`${this.URL}/${name}`);
    res = await res.json();

    return {
      id: res.id,
      title: res.login,
      description: res.bio,
      image: res.avatar_url
    };
  }
}

export default new Api();
