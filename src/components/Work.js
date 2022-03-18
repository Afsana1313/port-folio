import React, { Component } from 'react'
import DemoItem from './DemoItem'
import '../style/work.css'
import {list} from '../static/demo-work-data'

export default function Work () {
    const singleDemoItem = list?.map((i) => <DemoItem
        demo={i}
    />)
    
    return (
        <div className="work">
              
            <div className="work_wrapper">
                <span className="work_title">My Work</span>
                <div className="work_wrapper_inner">
                    {singleDemoItem}
                </div>
            </div>
        </div>
    )
    
}
