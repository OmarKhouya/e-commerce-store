import React, { useState, useEffect} from 'react'
import { CgArrowLongRight } from "react-icons/cg";

export default function Checkout({data,data2}) {

    const [total, setTotal] = useState(0);

    const CountTotal = () => {
        let calculatedTotal = 0;
        data.forEach(d => {
            const match = data2.find(item => item.id === d.id);
            if (match) {
                calculatedTotal += match.quantity * d.price;
            }
        });
        setTotal(calculatedTotal);
    };

    useEffect(() => {
        CountTotal();
    }, [data, data2]);

    return (
        <div className="px-3 py-4 mb-3 rounded"  style={{backgroundColor: "#BFEAF5",borderColor: "#91D8E4"}}>
            <span className='d-block text-center fs-3'>receipt</span>
            <hr />
            {
                data.map(d => {
                    const match = data2.find(item => item.id === d.id);
                    if (match) {
                        return <span className='d-block text-center my-2 fs-5' key={d.id}><CgArrowLongRight className='me-3 mb-1'/>{d.price} $ x {match.quantity} </span>
                    }
                })
            }
            <span className='d-block text-center'>Total : {total}$</span>
        </div>
    )
}
