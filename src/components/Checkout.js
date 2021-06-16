import React from 'react';

function Checkout({cart}) {

    const sum=cart.map((item)=>item.quantity*item.price).reduce((a,c)=>a+c);

    return (
        <div>
            <div className="row">
                <div className="col-md-4 offset-8 mt-3">
                    <div className="card mt-5">
                        <div className="card-header text-center bg-dark text-white">
                            Check out
                        </div>
                        <div className="card-body">
                            Total Prise:{sum}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success btn-block mt-2">
                                Buy now
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;