const nemo = ['nemo'];
const everyone = ['dory','bruce', 'martin', 'nemo','gill', 'sud'];

const large = new Array(100).fill('nemo');

function findnemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }

    let t1 = performance.now();
    console.log('call to find nemo ' + (t1-t0) + 'milliseconds');
}

findnemo(everyone);
