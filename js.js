let level = 1

const title = document.getElementById('title')
const variants = document.getElementById('variants')
const nowLevel = document.getElementById('nowLevel')
const image = document.getElementById('image')

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']

const data = [{ 'element': 'медведь', 'imageName': '1.jpg' },
{ 'element': 'дом', 'imageName': '2.jpg' },
{ 'element': 'стол', 'imageName': '3.jpg' },
{ 'element': 'мышь', 'imageName': '4.jpg' },
{ 'element': 'цветок', 'imageName': '5.jpg' },
];

let part = data[level].element
let imageName = data[level].imageName

nowLevel.innerText = `Уровень ${level + 1}`
image.src = '/image/' + imageName

//сюдам попадут переменшанные буквы
let randomArray = []
//массив из букв искомого элемента
let firstArray = part.split("");
//массив из букв алфавита, кроме букв первого массива
let secondArray = alphabet.filter(letter => !firstArray.includes(letter));
//перемешаем эти буквы и возбмём первые столько сколько элементов в первом
secondArray = secondArray.sort(() => Math.random() - 0.5).slice(0, firstArray.length);
//добавим оба массива в рандомный и перемешаем
randomArray.push(...firstArray, ...secondArray)
randomArray.sort(() => Math.random() - 0.5)

firstArray.forEach(element => {
  const elem = document.getElementById('title')
  const newElement = document.createElement('div');
  newElement.classList.add('block');
  newElement.classList.add('block-first');
  newElement.innerHTML = element;
  elem.appendChild(newElement);
}
)
randomArray.forEach(element => {
  const elem = document.getElementById('variants')
  const newElement = document.createElement('div');
  newElement.classList.add('block');
  newElement.classList.add('block-second');
  newElement.innerHTML = element;
  elem.appendChild(newElement);
}
)


const blockSecondElements = document.querySelectorAll('.block-second');
const blockFirstElements = document.querySelectorAll('.block-first');

//тут храним какую букву по индексу ищем
let current = 0

//nen храним выбранную букву
let selectLetter
let selectLElement


blockSecondElements.forEach((element) => {
  element.addEventListener('click', () => {
    selectLetter = element.innerText;
    selectLElement = element
    sravni()
  }
  )
})


function sravni() {
  let currentLetter = firstArray[current]
  //а вот значение буквы по индексу
  if (currentLetter === selectLetter) {
    alert('Верно')
    console.log(
      firstArray.length
    );
    console.log(current);
    current++
    blockFirstElements.forEach((element, index) => {
      if (index < current) {
        element.style.backgroundColor = 'green';
      }
    });
    if ((current) === firstArray.length) { alert('Уровень пройден!') }
  }
  else {
    alert('Неверно');
    return
  }
  selectLElement.style.display = 'none'; // добавляем изменение заднего фона на зеленый
}
