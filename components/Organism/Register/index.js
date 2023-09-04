import Image from 'next/image';
import React from 'react';

export default function RegisterPage() {
  return (
    <div className='container-scroller'>
      <div className='container-fluid page-body-wrapper full-page-wrapper'>
        <div className='content-wrapper d-flex align-items-center auth px-0'>
          <div className='row w-100 mx-0'>
            <div className='col-lg-4 mx-auto'>
              <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
                <div className='brand-logo'>
                  <Image src='/images/logo.svg' width={365} height={90} alt='logo' />
                </div>
                <h4>New here?</h4>
                <h6 className='font-weight-light'>Signing up is easy. It only takes a few steps</h6>
                <form className='pt-3'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      id='exampleInputUsername1'
                      placeholder='Username'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control form-control-lg'
                      id='exampleInputEmail1'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <select className='form-control form-control-lg' id='exampleFormControlSelect2'>
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control form-control-lg'
                      id='exampleInputPassword1'
                      placeholder='Password'
                    />
                  </div>
                  <div className='mb-4'>
                    <div className='form-check'>
                      <label className='form-check-label text-muted'>
                        <input type='checkbox' className='form-check-input' />I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <a
                      className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                      href='../../index.html'
                    >
                      SIGN UP
                    </a>
                  </div>
                  <div className='text-center mt-4 font-weight-light'>
                    Already have an account?{' '}
                    <a href='login.html' className='text-primary'>
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
