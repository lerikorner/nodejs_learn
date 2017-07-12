var i = 0;

async function fast() {
    i++;
}

async function slow() {
    with (i) { }
    i++;
}

var time = performance.now();
while (i < 1000000) fast();
alert("Ignoring with: " + (performance.now() - time));

var time = performance.now();
i = 0;
while (i < 1000000) slow();
alert("Processing with: " + (performance.now() - time));