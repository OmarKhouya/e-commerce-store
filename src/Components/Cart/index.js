import React from 'react'
import products from "../../data.json"
import { useSelector } from 'react-redux';
import Card from './Card';
import Section from '../Section';
import Checkout from './Checkout';

export default function Cart() {

    const inCartIdentifies = useSelector(state=>state.inCartIds.inCartIdentifies)

    const data = products.products;
    const inCartData = data.filter(p => inCartIdentifies.some(item => item.id === p.id));

    return (
        <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto">
            <div className='row'>
                <div className='col-lg-8 col-sm-12 '>
                    {
                        inCartData.map((cp,index)=><Card data={cp} key={index} data2={inCartIdentifies}/>)
                    }
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 mb-3'>
                    <Checkout data={inCartData} data2={inCartIdentifies}/>
                </div>
            </div>
        </Section>
    )
}
