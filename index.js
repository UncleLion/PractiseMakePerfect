
const createElements = () => {
    const root = document.createElement('div');
    const text = document.createElement('div');
    const container = document.createElement('div');
    const load = document.createElement('div');

    return {root, text, container, load} //скорочений запис мав би бути типу   root: root
}

const setAttribute =  // буде проставляти всім елементам які ми створили атрибут class
    ({ root, text, container, load }) => {
        root.setAttribute('class', 'root')
        text.setAttribute('class', 'text')
        container.setAttribute('class', 'container')
        load.setAttribute('class', 'load')
}

const startCouting = ({width, load, text, interval}) => {
    let count = 0;
    let intervalId;

    const func = () => {
        if (count === width) { //диниамічно width
            clearInterval(intervalId)
            return
        }

        text.textContent = `${count}%`// добавляє динамічно проценти 
        load.style.width = `${count}%`;
        count++
    } // в setInterval закідуємо функцію, звертаємося до load і в кожній ітерації інтервала ми збільшуємо на +1 

   intervalId = setInterval(func, interval); // оголошужмо інтервал+ динамічно inteval

}


const init = () => {
    const { root, text, container, load } = createElements()
    setAttribute({ root, text, container, load })
    console.log( root, text, container, load )

    document.body.appendChild(root) //Створили корньовий елемент, Наприкладі Добавили div і в середину його ще div
    root.appendChild(text)
    root.appendChild(container)
    container.appendChild(load)


    startCouting({width: 89, text, load, interval: 20}) // запускаємо функцію
}

init();