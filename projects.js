const projects = [
  {
    card: 1,
    image: './images/Vince gilligan.png',
    header: 'Vince Gilligan',
    paragraph: 'Director of the hit show Breaking Bad and many others his creative takes on film are fascinating and his writing captivating',
  },
  {
    card: 2,
    image: './images/quentin tarantino.png',
    header: 'Quentin Tararntino',
    paragraph: 'Director of Django and Kill Bill and other film with their wild but interesting movies that dont seem to miss and are always impressive',
  },
  {
    card: 3,
    image: './images/steven knight.png',
    header: 'Steven Knight',
    paragraph: 'Director creator Peaky Blinders, with his strong writing and his selective choice of casting members his. Steven Knight never seems to disappoints the audience',
  },
  {
    card: 4,
    image: './images/watanabe.png',
    header: 'Vince Gilligan',
    paragraph: 'From film like Cowboy bebop to Samurai Champloo and many others take his Watanabe Shinchiro directing to another level by putting music and the music will later form',
  },
  {
    card: 5,
    images: './images/rebecca.png',
    header: 'Rebecca Sugar',
    paragraph: 'Created Steven Universe, strong story telling with colorful range of characters, she always captivates the watcher',
  },
  {
    card: 6,
    images: './images/alex hirsch.png',
    header: 'Alex hirsch',
    paragraph: 'Creator of Gravity Fall, with his music selection and casting voice actors, Alex Hirsch never fails. With his impressive use of suspense',
  },
];

window.onclick = function (event) {
  if (event.target === projects) {
    projects.style.display = 'none';
  }
};

function openNav(open) {
  document.getElementById('slidemenu').style.width = '100%';
  return open;
}
openNav('hello');

function closeNav(close) {
  document.getElementById('slidemenu').style.width = '0';
  return close;
}
closeNav('goodbye');
