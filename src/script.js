const id_paywall = "waffles-portal-root";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait(secs) {
    await sleep(secs * 1000);
}

async function removeDiv() {
    await wait(3)
    const divToRemove = document.getElementById(id_paywall);
    if (divToRemove) {
        divToRemove.remove()
        console.log("[INFO] Paywall has been removed - - - ",(new Date()).toISOString())
    }
}

window.addEventListener("load", removeDiv());


