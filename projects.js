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
    paragraph:'Created Steven Universe, strong story telling with colorful range of characters, she always captivates the watcher',
  },
  {
    card: 6,
    images: './images/alex hirsch.png',
    header: 'Alex hirsch',
    paragraph:'Creator of Gravity Fall, with his music selection and casting voice actors, Alex Hirsch never fails. With his impressive use of suspense',
  }
];

window.onclick = function (event) {
  if (event.target === projects) {
    projects.style.display = 'none';
  }
};
document.getElementById('guest').innerHTML = '<h2 class="partner">guests</h2><div class="underline_guest"><img src="images/orangebar.png" width="100" height="20"></div><article class="grid"><div class="directors"> <div class="vince_gilligan"><img src="./images/Vince gilligan.png" alt="image of vince gilligan"  width="290" height="260"></div><div class="list"><h3>Vince Gilligan</h3> <hr class="lines"/><p class="orange">DIRECTOR</p><p>Director of the hit show Breaking Bad and many others his creative takes on film are fascinating and his writing captivating</p></div></div><div class="directors"><div class="tarantino"><img src="./images/quentin tarantino.png" alt="image of vince gilligan" width="300" height="300"></div><div class="list"><h3>Quentin Tarantino</h3><hr class="lines"/><p class="orange">DIRECTOR</p><p>Director of Django and Kill Bill and other film with their wild but interesting movies that dont seem to miss and are always impressive</p></div></div> <div class="directors"> <div class="stevenknight"><img src="./images/steven knight.png" alt="image of vince gilligan" width="240" height="250"></div><div class="list"><h3>Steven Knight</h3><hr class="lines"/><p class="orange">DIRECTOR</p><p>Director creator Peaky Blinders, with his strong writing and his selective choice of casting members his. Steven Knight never seems to disappoint the audience</p></div></div> <div class="directors"><div class="watanabe"><img src="./images/shinichiro watanabe.png" alt="image of vince gilligan" width="200" height="200"></div><div class="list"><h3>Watanabe Shinichiro</h3><hr class="lines"/><p class="orange">DIRECTOR</p><p>From film like Cowboy bebop to Samurai Champloo and many others take his Watanabe Shinchiro directing to another level by putting music and the music will later form the project he may work on</p></div></div> <div class="directors"><div class="rebecca"><img src="./images/rebecca.png" alt="image of vince gilligan" width="200" height="250"></div><div class="list"><h3>Rebecca Sugar</h3><hr class="lines"/><p class="orange">CREATOR</p><p>Created Steven Universe, strong story telling with colorful range of characters, she always captivates the watcher</p></div></div> <div class="directors"><div class="alex"><img src="./images/alex hirsch.png" alt="image of vince gilligan" width="240" height="280"></div><div class="list"><h3>Alex Hirsch</h3><hr class="lines"/><p class="orange">DIRECTOR</p><p>Creator of Gravity Fall, with his music selection and casting voice actors, Alex Hirsch never fails. With his impressive use of suspense </p></div></div></article>';

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

