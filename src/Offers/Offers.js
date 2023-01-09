import React from 'react'
import singapore from './singapore.jpg'
import './offers.css'
function Offers() {
  return (
      <>
        <div className='container mt-5'>
            <div className='row main'>
                <div className='col-12 summer'>
                    <div className='banner'>
                        <h3>This Summer</h3>
                        <p>Explore new beaches with</p>
                        <b>Fly0kart</b>

                        <div className='banner-btn mt-5'>
                            <a href='!#'>Book Now</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-12 col-md-6 left-container'>
                    <div className='offer-card'>
                        <img src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg" className='img-fluid' alt='offer'/>
                        <div className='row mx-1 mx-md-5 my-2'>
                            <div className='col-6'>singapore</div>
                            <div className='col-6'>
                                <a className='float-end save' href='!#'>Save 23%</a>
                            </div>
                        </div>
                        <div className='row mx-1 mx-md-5 my-2 pb-4'>
                            <div className='col-6'>$208</div>
                            <div className='col-6 '>
                                <a className='float-end book-now' href="/">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 right-container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='offer-card'>
                                <img src="https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_960_720.jpg" className='img-fluid' alt='offers'/>
                                <div className='row mx-1 my-1'>
                                    <div className='col-6'>singapore</div>
                                    <div className='col-6 '>
                                        <a className='float-end save' href='!#'>Save 23%</a>
                                    </div>
                                </div>
                                <div className='row mx-1 my-1 pb-2'>
                                    <div className='col-6'>$208</div>
                                    <div className='col-6 '>
                                        <a className='float-end book-now' href="/">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='offer-card'>
                                <img src="https://cdn.pixabay.com/photo/2020/06/18/18/48/highway-5314645_960_720.jpg" className='img-fluid' alt='offers'/>
                                <div className='row mx-1 my-1'>
                                    <div className='col-6'>singapore</div>
                                    <div className='col-6 '>
                                        <a className='float-end save' href='!#'> Save 23%</a>
                                    </div>
                                </div>
                                <div className='row mx-1 my-1 pb-2'>
                                    <div className='col-6'>$208</div>
                                    <div className='col-6 '>
                                        <a className='float-end book-now' href="/">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-1'>
                        <div className='col-12 col-md-6'>
                            <div className='offer-card'>
                                <img src="https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg" className='img-fluid' alt='offers'/>
                                <div className='row mx-1 my-1'>
                                    <div className='col-6'>singapore</div>
                                    <div className='col-6 '>
                                        <a className='float-end save' href='!#'>Save 23%</a>
                                    </div>
                                </div>
                                <div className='row mx-1 my-2 pb-2'>
                                    <div className='col-6'>$208</div>
                                    <div className='col-6 '>
                                        <a className='float-end book-now' href="/">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='offer-card'>
                                <img src="https://cdn.pixabay.com/photo/2020/12/17/04/09/guanajuato-5838206_960_720.jpg" className='img-fluid' alt='offers'/>
                                <div className='row mx-1 my-1'>
                                    <div className='col-6'>singapore</div>
                                    <div className='col-6 '>
                                        <a className='float-end save' href='!#'>Save 23%</a>
                                    </div>
                                </div>
                                <div className='row mx-1 my-2 pb-2'>
                                    <div className='col-6'>$208</div>
                                    <div className='col-6 '>
                                        <a className='float-end book-now' href="/">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Offers