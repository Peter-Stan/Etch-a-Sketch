const sizeOfGrid = 16;
const resetButton = document.querySelector("button")
const container = document.querySelector('.container')

//Creation of gridBox with two for loops
const Grid = (gridAmount) => {
    for (let i = 0; i < gridAmount; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridAmount; j++) {
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
// EventListner function for changing color of grid boxs with mouseover
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
            
        }
        container.appendChild(row)
    }
}
Grid(sizeOfGrid)