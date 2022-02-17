
let gridSize = 16;

// create grid

//create the grid
function createGrid (gridSize)
{
    const grids = document.querySelector('.grid');
    for(let i = 0; i < gridSize; i++)
    {
        let dimension = 300/gridSize;
        console.log(dimension);
        let divParent = document.createElement('div');
        divParent.className = 'parent';
        for(let j = 0; j < gridSize; j++)
        {
            let divCHild = document.createElement('div');
            divCHild.className = 'child';
            divCHild.style.cssText = `width: ${dimension}px; height:${dimension}px;`;
            divParent.appendChild(divCHild);
        }
        grids.appendChild(divParent);
    }
    
    // add the listening event to the divs,
    document.querySelectorAll('.child').forEach(item => {
        item.addEventListener('mouseover', event => {
            let dark = 0.9;
            if(!item.style.backgroundColor)
            {
                //make the color random
                item.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
            } else {
                //if the div has a color, change the brigtness each time the mouse is over
                if(item.style.filter)
                {
                    dark = item.style.filter.match(/\((.*)\)/).pop();;
                    dark = dark - 0.1;
                } 
                item.style.filter = `brightness(${dark})`;
            }
        })
    })  
}

//clear button

document.querySelector('#but').addEventListener('click', event => {
    document.querySelectorAll('.child').forEach(item => {
        item.style.backgroundColor = "white";
    })

    do 
    {
        gridSize = prompt("Enter new grid size");
    } while (gridSize > 100);

    const grids = document.querySelector('.grid');
    while (grids.firstChild) {
        grids.removeChild(grids.lastChild);
    }
    createGrid(gridSize);

})

createGrid(gridSize);




