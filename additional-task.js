let counter = 10;
let secondCounter = 0;
let thirdCounter = 1;
let fourthCounter = 18;
for( let i = 0; i < 20; i++){
    if (i < 10) {
        let first = '*'.repeat(counter);
        let second = first.padStart(first.length + secondCounter, ' ');
        console.log(`${first}${second}`);
        counter -= 1;
        secondCounter += 2;
    } else {
        let third = '*'.repeat(thirdCounter);
        let fourth = third.padStart(third.length + fourthCounter, ' ');
        console.log(`${third}${fourth}`);
        thirdCounter += 1;
        fourthCounter -=2;
    }

}
