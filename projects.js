const projects = [
  {
    card: 1,
    image: './images/Vince gilligan.png',
    header: 'Vince Gilligan',
    paragraph: 'Director of the hit show Breaking bad',
  },
  {
    card: 2,
    image: './images/quentin tarantino.png',
    header: 'Quentin Tararntino',
    paragraph: 'Director of Django and Kill Bill',
  },
  {
    card: 3,
    image: './images/steven knight.png',
    header: 'Steven Knight',
    paragraph: 'Director creator of Peaky Blinders',
  },
  {
    card: 4,
    image: './images/watanabe.png',
    header: 'Vince Gilligan',
    paragraph: 'Director of animated film Cowboy bebop',
  },
];

window.onclick = function (event) {
  if (event.target === projects) {
    projects.style.display = 'none';
  }
};
