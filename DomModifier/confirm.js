function createConfirmMessage(orderId) {
    const confirmMessageContent = document.querySelector('section');
    console.log(confirmMessageContent)
            
    confirmMessageContent.innerHTML = `
        <h1>Votre commande a bien été validée !</h1>
        <h2>Le montant de votre commande s'élève à ... et elle porte le numéro ${orderId}</h2>
        <p>Vous allez recevoir très vite un email de confirmation. Sinon, pas de panique, il se cache peut-être dans vos courriers indésirables</p>
    `
}