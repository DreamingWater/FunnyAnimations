


// Tidier code with webpack and better Typescript in Github
// https://github.com/ste-vg/plant-drawer

//ts-ignore



console.clear();

interface Position
{
    x: number;
    y: number;
}

enum BranchState
{
    ready,
    animating,
    ended
}

interface BranchSettings
{
    x: number;
    y: number;
    directionX?: number;
    directionY?: number;
    length?: number;
    sections: number;
    width?: number;
    chunkLength?: number;
    color?: string;
    progress?: number;
    opacity?: number;
}

interface FlowerColors
{
    outer: string;
    inner: string;
}

interface BranchSet
{
    path: SVGPathElement;
    settings: BranchSettings;
}

interface Out
{
    position: Position;
    width?: number;
    sections?: number;
}

class Branch
{
    private grid:number;
    private stage:HTMLElement;
    private branch:SVGPathElement;
    public branches: BranchSet[] = [];
    private settings:BranchSettings;
    public state:BranchState = BranchState.ready;
    private placeBehind:Branch;

    public branchOut:Subject<Out> = new Rx.Subject();
    public thornOut:Subject<Out> = new Rx.Subject();
    public flowerOut:Subject<Out> = new Rx.Subject();
    public leafOut:Subject<Out> = new Rx.Subject();

    constructor(stage:HTMLElement, settings:BranchSettings, grid:number, placeBehind:Branch = null, setPath:string = null)
    {
        this.grid = 50;//grid;
        this.stage = stage;
        this.placeBehind = placeBehind;

        settings.width = 2;
        settings.opacity = 1;

        this.state = BranchState.animating;
        let path = setPath ? setPath : this.createLine(settings);
        let branchCount:number = 2;
        for(let i = 0; i < branchCount; i++)
        {
            this.createSqwig(i, branchCount, path, JSON.parse(JSON.stringify(settings)) as BranchSettings)
        }
    }

    createSqwig(index:number, total:number, path:string, settings:BranchSettings)
    {
        let branch = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        branch.setAttribute('d', path)
        branch.style.fill = 'none';
        branch.style.stroke = this.getColor(index);
        branch.style.strokeLinecap = "round";

        settings.length = branch.getTotalLength();
        settings.progress = settings.length;

        branch.style.strokeDasharray= `${settings.length}, ${settings.length}`;
        branch.style.strokeDashoffset = `${settings.length}`;

        this.branches.push({path: branch, settings: settings});
        if(!this.placeBehind) this.stage.appendChild(branch);
        else this.stage.insertBefore(branch, this.placeBehind.branches[0].path)

        let widthTarget = settings.sections * 0.8;

        TweenMax.set(branch, {x: -index * 3, y: -index * 3})

        TweenMax.to(settings, settings.sections * 0.2, {
            progress: 0,
            width: widthTarget,
            ease: Power1.easeOut,
            delay: index * (settings.sections * 0.001),
            onUpdate: () =>
            {
                if(index == 0 && settings.sections > 4)
                {
                    let choice = Math.random();
                    let length = settings.length - settings.progress;
                    let pos = branch.getPointAtLength(length);

                    let sec = Math.ceil((settings.progress / settings.length) * settings.sections) - 2;
                    if( sec < 4) sec = 4;

                    let out:Out = {
                        position: {x: pos.x, y: pos.y},
                        width: widthTarget,
                        sections: sec
                    }

                    if(choice < 0.02) this.branchOut.next(out)
                    else if(choice < 0.1) this.thornOut.next(out)
                    else if(choice < 0.2) this.flowerOut.next(out)
                    else if(choice < 0.4) this.leafOut.next(out)
                }
            },
            onComplete: () =>
            {
                if(index = total - 1) this.state = BranchState.ended;
                //branch.remove();
            }
        })
    }

    public update()
    {
        this.branches.map((set: BranchSet) =>
        {
            set.path.style.strokeDashoffset = `${set.settings.progress}`;
            set.path.style.strokeWidth = `${set.settings.width}px`;
            //set.path.style.opacity = `${set.settings.opacity}`;
        })

    }

    private createLine(settings:BranchSettings):string
    {
        let x = settings.x;
        let y = settings.y;
        let dx = settings.directionX;
        let dy = settings.directionY;
        let path:string[] = [
            'M',
            '' + x,
            '' + y

        ]

        let steps = settings.sections;
        let step = 0;
        let getNewDirection = (direction: string, goAnywhere:boolean) =>
        {
            if(!goAnywhere && settings['direction' + direction.toUpperCase()] != 0) return settings['direction' + direction.toUpperCase()];
            return Math.random() < 0.5 ? -1 : 1;
        }

        if(steps * 2 > step) path.push("Q")

        while(step < steps * 2)
        {
            step++;
            let stepUp = this.stepUp(step);
            x += (dx * stepUp) * this.grid;
            y += (dy * stepUp) * this.grid;
            if(step != 1) path.push(',');
            path.push('' + x);
            path.push('' + y);

            if(step % 2 != 0)
            {
                dx = dx == 0 ? getNewDirection('x', step > 8) : 0;
                dy = dy == 0 ? getNewDirection('y', step > 8) : 0;
            }
        }

        return path.join(' ');
    }

    private stepUp(step:number):number
    {
        let r = Math.random() * 10;
        return step / (10 + r)
    }

    public clear()
    {
        this.branchOut.complete();
        this.thornOut.complete();
        this.leafOut.complete();
        this.flowerOut.complete();
        this.branches.map((set: BranchSet) => set.path.remove())
    }

    private getColor(index:number):string
    {
        let base = ['#0C3404']
        let greens = ['#257502'];//, '#5DC4A8', '#4BBD9E', '#3AB795', '#A7CCBA', '#91C0A9', '#86BAA1']

        let chooseFrom = index == 0 ? base : greens;
        return chooseFrom[Math.floor(Math.random() * chooseFrom.length)];
    }
}

class Flower
{
    petals:SVGPathElement[] = [];

    constructor(stage:HTMLElement, position: Position, size:number, colors:FlowerColors)
    {
        //outer petals

        let petalCount = 8;
        let p = petalCount;
        let rotateAmount = 360 / petalCount;
        let growRotation = (Math.random() * 80) - 40;

        while(p > 0)
        {
            --p;
            let petal = document.createElementNS("http://www.w3.org/2000/svg", 'path')
            petal.setAttribute('d', this.createPetalPath({x: 0, y: 0}, size))
            petal.setAttribute('class', 'petal')
            petal.style.fill = colors.outer;
            petal.style.stroke = 'none';

            this.petals.push(petal);
            let rotate = (rotateAmount * p) + Math.random() * 10;


            TweenMax.set(petal, {scale:0, x: position.x, y: position.y, rotation: rotate})
            let delay = Math.random() / 2;
            TweenMax.to(petal, 1.5, {scale:1, delay: delay})
            TweenMax.to(petal, 3, {rotation: '+=' + growRotation, delay: delay, ease: Elastic.easeOut})

            stage.appendChild(petal);
        }

        // inner petals

        petalCount = 6;
        p = petalCount;
        rotateAmount = 360 / petalCount;
        while(p > 0)
        {
            --p;
            let petal = document.createElementNS("http://www.w3.org/2000/svg", 'path')
            petal.setAttribute('d', this.createPetalPath({x: 0, y: 0}, size / 2))
            petal.setAttribute('class', 'petal')
            petal.style.fill = colors.inner;
            petal.style.stroke = 'none';

            this.petals.push(petal);
            let rotate = (rotateAmount * p) + Math.random() * 15;
            let growRotation = (Math.random() * 80) - 40;

            TweenMax.set(petal, {scale:0, x: position.x, y: position.y, rotation: rotate})
            TweenMax.to(petal, 6, {scale:1, rotation: '+=' + growRotation, delay: 0.5 + Math.random(), ease: Elastic.easeOut})

            stage.appendChild(petal);
        }
    }

    private createPetalPath(p: Position, size: number):string
    {
        let top = size * 4;
        let middle = size * 1.8;
        let width = size;
        let path = `M ${p.x} ${p.y} Q ${p.x - width} ${p.y + middle}  ${p.x} ${p.y + top} Q ${p.x + width} ${p.y + middle} ${p.x} ${p.y} Z`
        return path;
    }

    public clear()
    {
        this.petals.map((petal: SVGPathElement) => petal.remove())
    }
}

class Leaf
{
    leaf:SVGPathElement;

    constructor(stage:HTMLElement, position: Position, size:number)
    {

        this.leaf = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        this.leaf.setAttribute('d', this.createLeafPath({x: 0, y: 0}, size))
        this.leaf.setAttribute('class', 'leaf')
        this.leaf.style.fill = this.getColor();
        this.leaf.style.stroke = 'none';

        let rotate = Math.random() * 360;
        let rotateGrow = (Math.random() * 360) - 180;

        TweenMax.set(this.leaf, {scale:0, x: position.x, y: position.y, rotation: rotate})
        TweenMax.to(this.leaf, 2, {scale:1})
        TweenMax.to(this.leaf, 3, {rotation: rotate + rotateGrow, ease: Elastic.easeOut})

        stage.appendChild(this.leaf);
    }

    private createLeafPath(p: Position, size: number):string
    {
        let top = size * (3 + Math.random() * 2);
        let middle = size * (1 + Math.random());
        let width = size * (1.5 + Math.random() * 0.5);
        let path = `M ${p.x} ${p.y} Q ${p.x - width} ${p.y + middle}  ${p.x} ${p.y + top} Q ${p.x + width} ${p.y + middle} ${p.x} ${p.y} Z`
        return path;
    }

    private getColor():string
    {
        let greens = ['#3CA501', '#3CA501', '#3B8D01', '#54A802']
        return greens[Math.floor(Math.random() * greens.length)];
    }

    public clear()
    {
        this.leaf.remove()
    }
}

class Thorn
{
    private thorn:SVGPathElement;

    constructor(stage:HTMLElement, position: Position, size:number)
    {
        this.thorn = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        this.thorn.setAttribute('d', this.createThornPath({x: 0, y: 0}, size))
        this.thorn.setAttribute('class', 'thorn')
        this.thorn.style.fill = '#105302';
        this.thorn.style.stroke = 'none';

        TweenMax.set(this.thorn, {scale:0, x: position.x, y: position.y, rotation: Math.random() * 360})
        TweenMax.to(this.thorn, 1.5, {scale:1})

        stage.appendChild(this.thorn);
    }

    private createThornPath(p:Position, w:number):string
    {
        let path = `M ${p.x} ${p.y} Q ${p.x - w / 2} ${p.y}  ${p.x - w / 2} ${p.y + w / 4} L ${p.x} ${p.y + w * 2} L ${p.x + w / 2} ${p.y + w / 4} Q ${p.x + w / 2} ${p.y} ${p.x} ${p.y} Z`
        return path;
    }

    public clear()
    {
        this.thorn.remove();
    }
}

class App
{
    private container:HTMLElement;
    private downloadButton:HTMLElement;
    private svg:HTMLElement;
    private branches:Branch[] = [];
    private thorns:Thorn[] = [];
    private flowers:Flower[] = [];
    private leaves:Leaf[] = [];

    private branchGroup:HTMLElement;
    private thornGroup:HTMLElement;
    private leafGroup:HTMLElement;
    private flowerGroup:HTMLElement;

    private width: number = 600;
    private height: number = 600;

    private lastMousePosition:Position;
    private direction:Position;

    private grid:number = 40;

    private codepenPath:string = 'm219.5,82.2c0,-3 0.57719,-3.44804 -1,-6c-1.17557,-1.90211 -4,-5 -8,-9c-4,-4 -9.44846,-8.97464 -23,-16c-6.76122,-3.50514 -12.78275,-4.56868 -20,-7c-3.90735,-1.31629 -8.47125,-3.45877 -15,-5c-3.89299,-0.91901 -6,0 -8,0c-2,0 -5,1 -9,3c-2,1 -3.59424,2.26109 -5,4c-4.0255,4.97949 -5.297,5.61384 -8,8c-1.67633,1.47984 -1.54072,5.98092 -6,9c-0.82806,0.56063 -0.73509,5.20527 -2,9c-1.58114,4.74342 -4.98692,9.75711 -6,16c-0.80091,4.93544 -1.49829,10.93797 -2,17c-1.31969,15.94548 -0.20335,25.09315 4,34c3.81729,8.08878 6.90098,13.90099 12,19c12.74754,12.74754 16.74675,12.37134 21,15c7.60846,4.70229 16.76102,10.50389 29,16c4.91257,2.20607 14.07266,5.85785 22,10c11.10535,5.8027 16.3054,8.36168 21,11c4.35883,2.44963 7,5 8,6c5,5 7.83179,8.52216 11,15c1.38936,2.84073 2.45877,5.47125 4,12c0.22975,0.97325 0,12 0,18.00002c0,9 0,14 0,18c0,7 0.46764,9.19891 -1,12c-2.32053,4.42889 -6.88138,7.29349 -14,10c-5.9117,2.24762 -14.4935,7.42581 -24,10c-8.74062,2.36679 -17,4 -25,5c-8,1 -16,3 -24,3c-13,0 -22,0 -30,0c-3,0 -9.02997,0.48874 -13,0c-4.09222,-0.50378 -6.85076,-4.21005 -11,-7c-4.83881,-3.2536 -5.45049,-3.4505 -8,-6c-5.09902,-5.09903 -8.10476,-17.3956 -12,-25c-3.28757,-6.41809 -5.5695,-12.133 -7,-16c-2.32738,-6.29153 -4.34315,-11.87607 -6,-17.00002c-2.53711,-7.84622 -3.97252,-11.64749 -5,-16c-0.45951,-1.9465 -0.48626,-4.82375 -1,-7c-0.22975,-0.97325 1,-4 0,-4c-2,0 0.49755,3.9258 1,9c0.29561,2.9854 2.5695,9.133 4,13c1.55159,4.19435 3.49346,7.87856 4,11c0.48055,2.96129 1.42043,8.08583 2,10.00002c1.04483,3.45084 1.31074,4.08026 2,7c0.51374,2.17624 1.54136,3.70267 3,7c1.66801,3.77063 1,5 2,7c1,2 3,5 3,6c0,1 1.20681,2.81265 3,5c2.28588,2.78833 3.77375,8.83521 9,11c1.84776,0.76538 5.69344,3.4588 7,4c2.77164,1.14804 5,2 7,3c2,1 4.0535,0.5405 6,1c2.17625,0.51373 5.82375,1.48627 8,2c2.91975,0.68927 4.87856,0.49347 8,1c2.96126,0.48056 3.9258,0.49756 9,1c0.99513,0.09854 3,0 7,0c4,0 8,0 10,0c2,0 6,0 10,0c3,0 7,0 8,0c3,0 5.08031,-1.3764 9,-3c2.77164,-1.14804 3.86829,-1.28857 8,-3c2.92157,-1.21014 7,-2 9,-3c4,-2 6,-3 12,-6c2,-1 5.74675,-3.37134 10,-6c3.80423,-2.35114 12.22771,-7.69565 19,-13c7.25821,-5.68494 14,-13 21,-20c7,-7 12.83707,-14.11606 20,-24.00002c5.8681,-8.09724 11.69592,-16.15939 16,-24c5.61182,-10.22289 11.64288,-17.61801 15,-24c7.52118,-14.29797 10.4209,-20.43417 15,-34c2.94858,-8.73532 5.539,-17.11499 8,-26c1.68823,-6.09507 4.99023,-10.79026 6,-18c0.55481,-3.96133 2.09543,-9.97734 3,-14c1.11865,-4.97479 0.61731,-6.07612 1,-7c0.5412,-1.30656 1,-3 1,-6c0,-1 0,-1 0,-3c0,-1 1,-2 1,-3c0,-3 0,1 0,4c0,6 0,13 0,21c0,6 0,10 0,16c0,5 0,10 0,13c0,3 0,7 0,9c0,6 0.48056,11.03874 0,14c-0.50653,3.12144 -1.49622,6.90779 -2,11c-0.73309,5.95505 0,10 0,13c0,8 0,12 0,16c0,3 0,5 0,9c0,3 2,7 3,9c1,2 1.61288,3.4451 5,6c8.21951,6.19998 15.92484,8.28473 23,10c4.95547,1.20139 8,1 10,1c3,0 7.0769,0.26855 11,-1c5.12396,-1.65685 9.45236,-4.45428 18,-12c5.30103,-4.67966 11.25598,-12.78305 18,-21c10.40533,-12.6779 19.82861,-26.1272 31,-41c9.85019,-13.11388 18.18805,-27.58293 27,-39c7.35742,-9.5325 11.72446,-18.14258 17,-28c3.80423,-7.10829 5.79395,-13.08744 8,-18c0.91602,-2.03983 2,-4 2,-5c0,-1 0,-2 0,-2c-5,-3 -5.07611,-2.61732 -6,-3c-1.30655,-0.54119 -2,-1 -3,-2c0,0 0,1 0,5c0,6 0,12 0,18c0,10 0,15 0,20c0,4 0,7 0,10c0,8 0,13 0,17c0,7 -0.63748,16.00822 -1,24c-0.50052,11.03401 -3.49924,21.95847 -4,31c-0.38712,6.98929 0,13 0,17c0,6 0,11 0,19c0,8 0,13 0,21c0,3 0,7 0,12.00002c0,5 -0.12259,11.98087 -1,18c-1.16296,7.97794 -2.49875,14.94672 -3,22c-0.77979,10.97232 -0.85956,23.01672 -2,32c-0.89053,7.01477 -0.61731,9.07611 -1,10c-0.5412,1.30655 -0.85272,3.1731 -2,4c-1.814,1.30746 -2.5582,3.51929 -6,6c-1.814,1.30746 -6.72742,3.48663 -10,5c-6.60779,3.05569 -14.14185,5.76141 -21,10c-3.06708,1.89554 -8.08032,6.3764 -12,8c-0.92389,0.38269 -4.92578,0.49756 -10,1c-4.97568,0.49268 -9,0 -13,0c-6,0 -11,0 -17,0c-7,0 -10,0 -13,0c-5,0 -10.04468,-0.76138 -16,-2c-4.03671,-0.8396 -8.97736,-3.09543 -13,-4c-4.97479,-1.11865 -11.133,-2.56952 -15,-4c-4.19434,-1.55161 -6.6297,-0.62488 -10,-3c-2.94724,-2.07697 -5.70547,-4.34619 -8,-6c-1.814,-1.30746 -4.21167,-1.71411 -7,-4c-2.18735,-1.79318 -3.42044,-4.08582 -4,-6c-1.04483,-3.45084 -2.87766,-6.06601 -4,-8c-1.80972,-3.11847 -2.03891,-6.07748 -3,-12c-0.50653,-3.12143 -3.49622,-7.90778 -4,-12c-0.48874,-3.97003 0,-8 0,-10c0,-2 0.4595,-6.0535 0,-8c-1.0275,-4.35251 -2.48627,-5.82376 -3,-8c-0.4595,-1.9465 0,-6 0,-10c0,-3 0,-5 0,-8c0,-1 0,-2 0,-4l0,0l0,-1l-1,-3';



    private flowerColors:FlowerColors;

    constructor(container:HTMLElement)
    {
        this.container = container;
        this.svg = document.getElementById('stage');

        this.branchGroup = document.getElementById('branchGroup');
        this.thornGroup = document.getElementById('thornGroup');
        this.leafGroup = document.getElementById('leafGroup');
        this.flowerGroup = document.getElementById('flowerGroup');

        this.onResize();

        this.tick();

        Rx.Observable.fromEvent(this.container, 'click')
            .map((mouseEvent:MouseEvent) =>
            {
                mouseEvent.preventDefault();
                return {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY
                };
            })
            .subscribe((position:Position) =>
            {
                this.clearOld();
                this.startBranch(16, position, true, this.codepenPath);
            });

        this.startBranch(16, {x: this.width / 2, y: this.height / 2}, true, this.codepenPath);

        Rx.Observable.fromEvent(window, "resize").subscribe(() => this.onResize())
    }

    private clearOld()
    {
        this.branches.map((branch:Branch) =>
        {
            branch.clear();
        });
        this.thorns.map((thorn:Thorn) => thorn.clear());
        this.flowers.map((flower:Flower) => flower.clear());
        this.leaves.map((leaf:Leaf) => leaf.clear());

        TweenMax.killAll();

        this.branches = [];
        this.thorns = [];
        this.flowers = [];
        this.leaves = [];
    }

    private startBranch(sections:number, position:Position, setColors:boolean = false, setPath:string = null)
    {
        if(setColors)
        {
            this.flowerColors = {
                outer: this.getColor(),
                inner: this.getColor()
            }
        }

        let dx = Math.random();
        if(dx > 0.5) dx = dx > 0.75 ? 1 : -1;
        else dx = 0;
        let dy= 0;
        if(dx == 0) dx = Math.random() > 0.5 ? 1 : -1;

        let settings:BranchSettings = {
            x: position.x,
            y: position.y,
            directionX: dx,
            directionY: dy,
            sections: sections
        }
        let newBranch = new Branch(this.branchGroup, settings, this.grid/2 + Math.random() * this.grid/2, this.branches.length > 1 ? this.branches[this.branches.length - 2]: null, setPath);

        newBranch.branchOut.debounceTime(200).subscribe((out:Out) => this.startBranch(out.sections, out.position))
        newBranch.thornOut.debounceTime(100).subscribe((out:Out) => this.thorns.push(new Thorn(this.thornGroup, out.position, out.width)))
        newBranch.flowerOut.debounceTime(300).subscribe((out:Out) => this.flowers.push(new Flower(this.flowerGroup, out.position, out.width, this.flowerColors)))
        newBranch.leafOut.debounceTime(50).subscribe((out:Out) => this.leaves.push(new Leaf(this.leafGroup, out.position, out.width)))
        this.branches.push(newBranch);
    }

    private onResize()
    {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.svg.setAttribute('width', String(this.width));
        this.svg.setAttribute('height', String(this.height));

        TweenMax.set(this.branchGroup, {x: this.width / 2, y: this.height / 2});
        TweenMax.set(this.thornGroup, {x: this.width / 2, y: this.height / 2});
        TweenMax.set(this.leafGroup, {x: this.width / 2, y: this.height / 2});
        TweenMax.set(this.flowerGroup, {x: this.width / 2, y: this.height / 2});
    }

    private tick()
    {
        let step = this.branches.length - 1;

        while(step >= 0)
        {
            if(this.branches[step].state != BranchState.ended)
            {
                this.branches[step].update();
            }
            --step;
        }

        requestAnimationFrame(() => this.tick());
    }

    private getColor():string
    {
        let offset = Math.round(Math.random() * 100)
        var r = Math.sin(0.3 * offset) * 100 + 155;
        var g = Math.sin(0.3 * offset + 2) * 100 + 155;
        var b = Math.sin(0.3 * offset + 4) * 100 + 155;
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    private componentToHex(c:number)
    {
        var hex = Math.round(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
}



let container = document.getElementById('app');
let app = new App(container);