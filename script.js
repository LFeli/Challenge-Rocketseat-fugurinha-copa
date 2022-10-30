let isExplorer = true;


function changeCard(event){
    const card = event.currentTarget;
    const bgCard = isExplorer ? 'ignite' : 'explorer'
    isExplorer = !isExplorer;
    card.style.backgroundImage = `url(./assets/bg-${bgCard}.svg)`
}