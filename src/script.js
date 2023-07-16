const id_paywall = "modal-overlay";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait(secs) {
    await sleep(secs * 1000);
}

async function removeDiv() {
    await wait(3)
    const divToRemove = document.querySelector(`[data-testid="${id_paywall}"]`)
    if (divToRemove) {
        divToRemove.remove()
        console.log("[INFO] Paywall has been removed - - - ",(new Date()).toISOString())
    }
}

window.addEventListener("load", removeDiv());


