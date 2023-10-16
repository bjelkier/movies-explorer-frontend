class Api {
  jwt;

  constructor() {
    this._baseUrl = 'https://api.albinamakarova.nomoredomainsrocks.ru';
    this._headers = {
      'Content-Type': 'application/json',
      // "Cookie": "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJiZjJhZmZhYjRkODQwNDUyNmI4ZjAiLCJpYXQiOjE2OTczODA0NTUsImV4cCI6MTY5Nzk4NTI1NX0.Dr8laEY2XIplFhG98h0qHs82J2hsIJS7FsVzDZ3JxLI"
    }
  };

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    };
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  };

  updateUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
      .then(this._checkResponse);
  };

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  };

  postMovie(country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      })
    })
      .then(this._checkResponse);
  };

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      headers: this._headers,
      credentials: 'include',
      method: 'DELETE',
    })
      .then(this._checkResponse);
  };

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    })
      .then(this._checkResponse);
  }

  async login(email, password) {
    const response = await fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then(this._checkResponse);

    if (response != null) {
      document.cookie = `jwt=${response.jwt}; Path=/;SameSite=none`;
    }
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  checkAuth() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
      method: 'GET',
    })
      .then(this._checkResponse);
  }
}

export default new Api();
