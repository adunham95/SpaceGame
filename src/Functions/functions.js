export function randomNumberPicker(max, min) {
    if(typeof min !== "undefined"){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else{
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export function isEven(n) {
    return n % 2 === 0;
}

export function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export function generateID(length) {
    return [...Array(length)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
}

export function shuffleArray(a, length = 10) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0,length);
}

export function styleNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}