import React from 'react'
import products from "../../data.json"
import { useSelector } from 'react-redux';
import Card from './Card';
import Section from '../Section';

export default function Cart() {

    const inCartIdentifies = useSelector(state=>state.inCartIds.inCartIdentifies)
    console.log(inCartIdentifies);

    const data = products.products;
    const inCartData = data.filter(p => inCartIdentifies.some(item => item.id === p.id));
    console.log(inCartData)

    return (
        <Section className="col-lg-9 col-md-9 col-sm-12 mt-2">
            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                    {
                        inCartData.map((cp,index)=><Card data={cp} key={index} data2={inCartIdentifies}/>)
                    }
                </div>
                <div>
                    
                </div>
            </div>
        </Section>
    )
}
