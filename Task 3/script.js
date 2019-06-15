window.onload = function () {
    document.getElementById("oneItemToRight").onclick = function () {
        oneItemTransfer(document.getElementById("left-select"), document.getElementById("right-select"));
    };
    document.getElementById("allItemsToRight").onclick = function () {
        allItemsTransfer(document.getElementById("left-select"), document.getElementById("right-select"));
    };
    document.getElementById("oneItemToLeft").onclick = function () {
        oneItemTransfer(document.getElementById("right-select"),document.getElementById("left-select"));
    };
    document.getElementById("allItemsToLeft").onclick = function () {
        allItemsTransfer(document.getElementById("right-select"),document.getElementById("left-select"));
    };
};

function oneItemTransfer(fromSelect, toSelect) {
    var selectedItem = fromSelect[fromSelect.selectedIndex];
    try{
        toSelect.appendChild(selectedItem);
        toSelect[toSelect.selectedIndex].selected = false;
    }
    catch {
        alert("Select something.");
    }
    fromSelect.blur()
    toSelect.blur()
}
function allItemsTransfer(fromSelect, toSelect) {
    var leftSelect = document.getElementById("left-select");
    var rightSelect = document.getElementById("right-select");
    while(fromSelect[0] !== undefined)
    {
        toSelect.appendChild(fromSelect[0]);
    }
    fromSelect.blur()
    toSelect.blur()
}
