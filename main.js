document.body.innerHTML+=
`
<article>
    <div id="calulator">
        <div id="result"> </div>
       
        <div id="butns_numbers_math">
            <div id="numbers">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>1</button>
                <button>2</button>
                <button>3</button> 
                <button>0</button> 
            </div>
            <div id="btn_math">
                <button>X</button>
                <button>/</button>
                <button>+</button>
                <button>-</button>
                <div id="equal">
                    <button>=</button> 
                </div>
            </div>
        </div>
    </div>
</article>
`

const mainArticle=document.querySelector('article')
const calulator=document.querySelector('#calulator')
const butns_numbers_math=document.querySelector('#butns_numbers_math')
const numbers=document.querySelector('#numbers')
const btn_math=document.querySelector('#btn_math')
const equal=document.querySelector('#equal')
const result=document.querySelector('#result')


