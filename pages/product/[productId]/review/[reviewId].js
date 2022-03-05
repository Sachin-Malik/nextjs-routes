import React from 'react';
import {useRouter} from 'next/router';

function productReview(){
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <div>
            <h1>Product is {productId} and Review Id is {reviewId}</h1>
        </div>
    )
}

export default productReview;