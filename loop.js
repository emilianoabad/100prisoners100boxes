function simulatePrisoners(strategy) {
    const numPrisoners = 100;
    const numBoxes = 100;
    const numSimulations = 1000;
    const numTries = 50;
    let successCount = 0;

    for (let sim = 0; sim < numSimulations; sim++) {

      let boxes = Array.from({ length: numBoxes }, (_, i) => i + 1);
        let slips = boxes.slice();
        for (let i = slips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slips[i], slips[j]] = [slips[j], slips[i]];
        }

        let allPrisonersSucceeded = true;

        for (let prisoner = 1; prisoner <= numPrisoners; prisoner++) {
            let found = false;
            let openedBoxes = new Set();
            let currentBox;

            if (strategy) {
                currentBox = prisoner;
            } else {
                currentBox = Math.floor(Math.random() * numBoxes) + 1;
            }

            for (let tries = 0; tries < numTries; tries++) {
                if (openedBoxes.has(currentBox)) {
                    break;
                }
                openedBoxes.add(currentBox);

                if (slips[currentBox - 1] === prisoner) {
                    found = true;
                    break;
                }

                if (strategy) {
                    currentBox = slips[currentBox - 1];
                } else {
                    do {
                        currentBox = Math.floor(Math.random() * numBoxes) + 1;
                    } while (openedBoxes.has(currentBox));
                }
            }

            if (!found) {
                allPrisonersSucceeded = false;
                break;
            }
        }

        if (allPrisonersSucceeded) {
            successCount++;
        }
    }

    return successCount;
}

const strategy = false;
const result = simulatePrisoners(strategy);
console.log(`Number of successful simulations: ${result}`);
