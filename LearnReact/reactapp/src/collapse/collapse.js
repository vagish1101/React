import React from 'react';

const Collape = () => {
    const datas = [
        {title: 'Collpase1', content: 'dafdafadsf'},
        {title: 'Collpase12', content: 'dafdaf'}
    ]
    const style = {
        display: 'none'
    }

    const test = <h1>fssfdsfsdfd</h1>;
    const toogleHandler = (event) => {
        const list= event.target.parentElement.parentElement.querySelectorAll('p');
        for (var i = 0; i < list.length; ++i) {
            list[i].style.display = 'none';
         }
        event.target.parentElement.querySelector('p').style.display = 'block';
    }
    return (
        <div>
            {test}
            {datas.map((d)=>{
                return(
                    <div>
                        <button onClick = {toogleHandler} >{d.title}</button>
                        <p style={style}>{d.content}</p>
                    </div>
                ) 

            })}
        
        </div>
    )
}

const Collapes = () => {
    return(
        <div className="wrapper">
            <Collape />
        </div>
    )
}

export default Collape