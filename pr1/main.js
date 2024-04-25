function multiply(a, b) {
    return a * b;
}

function greet(name, surname, age) {
    return `Привет ${name} ${surname} с возрастом ${age} лет`;
}

function gender(g) {
    if (g === 'M') {
        return "Ваш пол мужской";
    } else if (g === 'F') {
        return "Ваш пол женский";
    } else {
        return "Ваш пол не определен";
    }
}

function dayOfWeek(day) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return days[day - 1] || "Некорректный день";
}

function firstWords(sentence) {
    const regex = /[^.!?]+[.!?]/g;
    const matches = sentence.match(regex);
    const firstWordsArray = matches.map((match) => match.trim().split(' ')[0]);
    return firstWordsArray.join(', ');
}

function greetByTime(name) {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour < 6) {
        greeting = 'Доброй ночи';
    } else if (hour < 12) {
        greeting = 'Доброе утро';
    } else if (hour < 18) {
        greeting = 'Добрый день';
    } else {
        greeting = 'Добрый вечер';
    }
    return `${greeting}, ${name}`;
}

function printAgeStatus(age) {
    for (let i = 1; i <= 100; i++) {
        let ageStatus;
        if (i <= 17) {
            ageStatus = "ребенок";
        } else if (i <= 30) {
            ageStatus = "молодой";
        } else if (i <= 55) {
            ageStatus = "зрелый";
        } else {
            ageStatus = "старый";
        }
        console.log(`${i} - ${ageStatus}`);
    }

    if (age <= 17) {
        ageStatus = "ребенок";
    } else if (age <= 30) {
        ageStatus = "молодой";
    } else if (age <= 55) {
        ageStatus = "зрелый";
    } else {
        ageStatus = "старый";
    } 
    return ageStatus;
}

function personInfo(name, age) {
    const ageStatus = printAgeStatus(age);
    return `${name} имеет возраст ${age} и он ${ageStatus}`;
}

console.log(multiply(5, 10)); 
console.log(greet("Иван", "Петров", 17)); 
console.log(gender('M')); 
console.log(dayOfWeek(3)); 
console.log(firstWords("Это первое предложение. Это второе предложение! И это третье!")); 
console.log(greetByTime("Иван")); 
console.log(personInfo("Иван", 44)); 
