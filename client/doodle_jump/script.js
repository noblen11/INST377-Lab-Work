document.addEventListener('DOMContentLoded', () =>{
    const grid = document.QuerySelector('.grid')
    const doodler = document.createElement('div')
    let isGameOver = false;
    let platformCount = 5;
    let platforms = []
    
    function crateDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = '50px'
        doodler.style.bottom = '150px'  
    
    
    }
     
    class platform{
        constructor(newPlatBottom){
            this.bottom = newPlatBottom
            this.left = math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }
    
    
    function createPlatforms(){
        for (let  i =0; i < platformCount; i++){
            let platGap = 600 / platformCount
            let newPlatBpttom = 100 + i * platGap
            let newPlatform = new platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms)
        }
    
    }
    
    function movePlatforms
    
    
    function start(){
         if(!isGameOver){
            createDoodler()
            createPlatforms()
            movePlatforms()
        }
    }

    start()
})