class App {
  constructor() {
    this.musicOk = new Audio('music/Ok.mp3');
    this.musicError = new Audio('music/Error.mp3');
    this.musicLevelUp = new Audio('music/LevelUp.mp3');
    this.level = 0
    this.firstArray = null
    this.secondArray = null
    this.current = 0
    this.selectLetter = null
    this.selectLElement = null
    this.randomArray = []
    this.title = document.getElementById('title')
    this.variants = document.getElementById('variants')
    this.alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']

    this.data = [
      { 'element': 'мама', 'imageName': '1.jpg' },
      { 'element': 'папа', 'imageName': '2.jpg' },
      { 'element': 'дом', 'imageName': '3.jpg' },
      { 'element': 'школа', 'imageName': '4.jpg' },
      { 'element': 'книга', 'imageName': '5.jpg' },
      { 'element': 'мяч', 'imageName': '6.jpg' },
      { 'element': 'кот', 'imageName': '7.jpg' },
      { 'element': 'собака', 'imageName': '8.jpg' },
      { 'element': 'цветок', 'imageName': '9.jpg' },
      { 'element': 'друзья', 'imageName': '10.jpg' },
      { 'element': 'семья', 'imageName': '11.jpg' },
      { 'element': 'море', 'imageName': '12.jpg' },
      { 'element': 'лес', 'imageName': '13.jpg' },
      { 'element': 'зима', 'imageName': '14.jpg' },
      { 'element': 'лето', 'imageName': '15.jpg' },
      { 'element': 'осень', 'imageName': '16.jpg' },
      { 'element': 'весна', 'imageName': '17.jpg' },
      { 'element': 'солнце', 'imageName': '18.jpg' },
      { 'element': 'луна', 'imageName': '19.jpg' },
      { 'element': 'звезда', 'imageName': '20.jpg' },
      { 'element': 'дождь', 'imageName': '21.jpg' },
      { 'element': 'снег', 'imageName': '22.jpg' },
      { 'element': 'ветер', 'imageName': '23.jpg' },
      { 'element': 'трава', 'imageName': '24.jpg' },
      { 'element': 'река', 'imageName': '25.jpg' },
      { 'element': 'гора', 'imageName': '26.jpg' },
      { 'element': 'птица', 'imageName': '27.jpg' },
      { 'element': 'рыба', 'imageName': '28.jpg' },
      { 'element': 'яблоко', 'imageName': '29.jpg' },
      { 'element': 'морковь', 'imageName': '30.jpg' },
      { 'element': 'молоко', 'imageName': '31.jpg' },
      { 'element': 'хлеб', 'imageName': '32.jpg' },
      { 'element': 'соль', 'imageName': '33.jpg' },
      { 'element': 'сахар', 'imageName': '34.jpg' },
      { 'element': 'масло', 'imageName': '35.jpg' },
      { 'element': 'каша', 'imageName': '36.jpg' },
      { 'element': 'суп', 'imageName': '37.jpg' },
      { 'element': 'пицца', 'imageName': '38.jpg' },
      { 'element': 'мороженое', 'imageName': '39.jpg' },
      { 'element': 'печенье', 'imageName': '40.jpg' },
      { 'element': 'машина', 'imageName': '41.jpg' },
      { 'element': 'автобус', 'imageName': '42.jpg' },
      { 'element': 'велосипед', 'imageName': '43.jpg' },
      { 'element': 'самолет', 'imageName': '44.jpg' },
      { 'element': 'корабль', 'imageName': '45.jpg' },
      { 'element': 'гном', 'imageName': '46.jpg' },
      { 'element': 'комната', 'imageName': '47.jpg' },
      { 'element': 'окно', 'imageName': '48.jpg' },
      { 'element': 'дверь', 'imageName': '49.jpg' },
      { 'element': 'стол', 'imageName': '50.jpg' },
      { 'element': 'победа', 'imageName': '0.jpg' },
    ];

    this.startPage()
    this.handleKeyPress
    document.addEventListener('keydown', (event) => this.handleKeyPress(event));
  }

  startPage() {
    const nowLevel = document.getElementById('nowLevel')
    nowLevel.innerText = `Уровень ${this.level + 1}`
    const levels = document.getElementById('Levels')
    levels.innerText = `из ${this.data.length - 1}`

    const image = document.getElementById('image')
    let part = this.data[this.level].element
    let imageName = this.data[this.level].imageName
    image.src = 'image/' + imageName
    //сюдам попадут переменшанные буквы
    //массив из букв искомого элемента
    this.firstArray = part.split("");
    //массив из букв алфавита, кроме букв первого массива
    this.secondArray = this.alphabet.filter(letter => !this.firstArray.includes(letter));
    //перемешаем эти буквы и возбмём первые столько сколько элементов в первом
    this.secondArray = this.secondArray.sort(() => Math.random() - 0.5).slice(0, this.firstArray.length);
    //добавим оба массива в рандомный и перемешаем
    this.randomArray.push(...this.firstArray, ...this.secondArray)
    this.randomArray.sort(() => Math.random() - 0.5)

    //тут храним искомое слово
    this.firstArray.forEach(element => {
      const elem = document.getElementById('title')
      const newElement = document.createElement('div');
      newElement.classList.add('block');
      newElement.classList.add('block-first');
      newElement.innerHTML = element;
      elem.appendChild(newElement);
    }
    )

    //тут храним варианты букв
    this.randomArray.forEach(element => {
      const elem = document.getElementById('variants')
      const newElement = document.createElement('div');
      newElement.classList.add('block');
      newElement.classList.add('block-second');
      newElement.innerHTML = element;
      elem.appendChild(newElement);
    }
    )

    const blockSecondElements = document.querySelectorAll('.block-second');
    blockSecondElements.forEach((element) => {
      element.addEventListener('click', () => {
        this.selectLetter = element.innerText;
        this.selectLElement = element;
        this.sravni();
      });
    });
    //для финала
    if (this.level + 1 === this.data.length) {
      this.variants.innerHTML = ''
      nowLevel.innerText = 'Поздравляю с прохождением всех уровней!!!'
      document.getElementById('description').innerHTML = ''
      levels.style.display = 'none'
    }
  }

  handleKeyPress(event) {
    let key = event.key.toLowerCase();
    if (this.randomArray.includes(key)) {
      this.selectLetter = key
      const blockSecondElements = document.querySelectorAll('.block-second');
      for (let i = 0; i < blockSecondElements.length; i++) {
        if (blockSecondElements[i].textContent === key) {
          this.selectLElement = blockSecondElements[i];
          break;
        }
      }
      this.sravni()
    }
  }
  sravni() {
    const blockFirstElements = document.querySelectorAll('.block-first');
    //тут храним какую букву по индексу ищем
    let currentLetter = this.firstArray[this.current]
    //а вот значение буквы по индексу
    if (currentLetter === this.selectLetter) {
      // alert('Верно')
      this.musicOk.play()
      this.current++
      blockFirstElements.forEach((element, index) => {
        if (index < this.current) {
          element.style.backgroundColor = 'green';
        }
      });
      if ((this.current) === this.firstArray.length) {
        this.musicLevelUp.play()
        alert('Уровень пройден!')
        this.title.innerHTML = ''
        this.variants.innerHTML = ''
        this.current = 0
        this.level += 1
        this.randomArray = []
        this.startPage()
      }
    }
    else {
      this.musicError.play()
      //alert('Неверно');
      return
    }
    this.selectLElement.style.display = 'none'; // добавляем изменение заднего фона на зеленый
  }
}
(new App())