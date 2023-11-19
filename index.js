(function attachCardEvents()

{
    let dragobj = document.getElementsByClassName('drag-obj');
    let cardelems =  document.getElementsByClassName('cards');

    for (let i=0; i< dragobj.length;i++)
    {
        dragobj[i].id= ('00000A' + i ).slice(-5);
        dragobj[i].addEventListener('dragstart', dragStart);

    }

    for (let i=0; i< cardelems.length;i++)
    {
        
        cardelems[i].id = ('00000B' + i ).slice(-5);
        cardelems[i].addEventListener('drop', dropElem);
        cardelems[i].addEventListener('dragover', preventdefault);
    }

    updateCount();


})();

function dragStart(ev)
{
    console.log(ev);
    ev.dataTransfer.setData('dragData', ev.target.id);
}
function dropElem(ev)
{
let data = ev.dataTransfer.getData('dragData');
ev.target.appendChild(document.getElementById(data));
updateCount();
}

function preventdefault(ev)
{
ev.preventDefault();
}

function updateCount()
{
    let headerLabel = document.getElementsByClassName("label-counter");
    for(let i=0;  i< headerLabel.length ; i++)
    {
        let j=i+1;
        let cardCount = document.querySelectorAll(".col-container:nth-child("+ j +") .drag-obj").length;
        headerLabel[i].textContent = cardCount;
    }
}