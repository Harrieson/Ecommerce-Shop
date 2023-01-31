import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import{BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
      <>
          <header className="header-top-strip">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-6">
                          <p className='text-white mb-0'>
                              Free Shipping on orders above KShs.&nbsp;
                              <span className='text-success'>2900</span> Shillings</p>
                      </div>
                      <div className="col-6">
                          <p className='text-end text-white mb-0'>
                              Hotline: <a href="tel:+254112267660"
                                  className='text-white'>&nbsp;0112267660</a></p>
                      </div>
                  </div>
              </div>
          </header>
          <header className="header-upper py-3">
              <div className="container-xxl">
                  <div className="row align-itens-center">
                      <div className="col-2">
                          <h6>
                              <Link to='/' className='text-white'>Hello Sucker!!!</Link>
                          </h6>
                      </div>
                      <div className="col-5">
                          <div className="input-group">
                              <input type="text" className="form-control py-1"
                                  placeholder='Search Product Here'
                                  aria-label='Search Product Here'
                                  aria-describedby='basic-addon2' />
                              <span className='input-group-text' id='basic-addon2'>
                                  <BsSearch  />
                              </span>
                          </div>
                      </div>
                      <div className="col-5">
                          <div className="header-upper-links d-flex align-items-center justify-content-between">
                              <div>
                                <Link to='#' className='d-flex align-items-center gap-3 text-white'>
                                <img src='images/compare.svg' alt='comapare'/>
                                <p className='mb-0'>Comapre <br /> Products</p>
                                </Link>
                              </div>
                              <div>
                                <Link to='#' className='d-flex align-items-center gap-3 text-white'>
                                <img src='images/wishlist.svg' alt='wishlist'/>
                                <p className='mb-0'>My <br /> WishList</p>
                                </Link>
                              </div>
                              <div>
                                <Link to='#' className='d-flex align-items-center gap-3 text-white'>
                                <img src='images/user.svg' alt='user'/>
                                <p className='mb-0'>Login <br />My Account</p>
                                </Link>
                              </div>
                              <div>
                                <Link to='#' className='d-flex align-items-center gap-3 text-white'>
                                <img src='images/cart.svg' alt='cart'/>
                                      <div className="d-flex flex-column">
                                          <span className="badge badge-warning">2</span>
                                          <p className='mb-0'>KShs. 700</p>
                                </div>
                                </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          <div className="header-bottom py-3">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="menu-bottom d-flex align-items-center">
                              <div></div>
                              <div className="menu-links">
                                  <div className="d-flex align-items-center gap-5">
                                  <NavLink to='/'>Home</NavLink>
                                  <NavLink to='/shop'>Our Store</NavLink>
                                  <NavLink to='/blogs'>Blogs</NavLink>
                                  <NavLink to='/conatcts'>Contact</NavLink>
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

export default Header