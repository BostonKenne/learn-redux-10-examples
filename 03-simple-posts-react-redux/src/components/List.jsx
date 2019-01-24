import React from 'react'
import { connect } from 'react-redux'

const mapStateToPops = state  =>{
    return { articles: state.articles }
}

const ConnectedList = ({articles}) =>(
    <ul className="list-group list-group-flush">
        {
            articles.map((el, index)=>(
                <li className="list-group-item" key={el.id}>
                 { index+1 }: &nbsp;&nbsp;&nbsp;&nbsp;   {el.title}
                </li>
            ))
        }
    </ul>
);


const List = connect(mapStateToPops)(ConnectedList)

export default List;