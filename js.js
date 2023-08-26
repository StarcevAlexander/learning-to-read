class App {
  constructor() {
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
      { 'element': 'дом', 'imageName': '2.jpg' },
      { 'element': 'медведь', 'imageName': '1.jpg' },
      { 'element': 'стол', 'imageName': '3.jpg' },
      { 'element': 'мышь', 'imageName': '4.jpg' },
      { 'element': 'цветок', 'imageName': '5.jpg' },
      { 'element': 'победa', 'imageName': '0.jpg' },
    ];
    this.startPage()
    this.handleKeyPress
    document.addEventListener('keydown', (event) => this.handleKeyPress(event));
  }


  startPage() {
    const nowLevel = document.getElementById('nowLevel')
    nowLevel.innerText = `Уровень ${this.level + 1}`
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
      this.current++
      blockFirstElements.forEach((element, index) => {
        if (index < this.current) {
          element.style.backgroundColor = 'green';
        }
      });
      if ((this.current) === this.firstArray.length) {
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
      //alert('Неверно');
      return
    }
    this.selectLElement.style.display = 'none'; // добавляем изменение заднего фона на зеленый
  }
}
(new App())