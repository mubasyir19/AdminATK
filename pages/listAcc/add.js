import Footer from '@/components/Molecules/Footer';
import Navbar from '@/components/Molecules/Navbar';
import Sidebar from '@/components/Molecules/Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Add() {
  const API = process.env.NEXT_API;
  const router = useRouter();

  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState(0);
  const [stok, setStok] = useState(0);
  const [kategori, setKategori] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // handle submit
      // .....(code here)

      // Response Success
      // .....(sweetalert)
      router.push('/product');
    } catch (error) {
      // handle error
      // .....(code here)

      // Response Error
      // .....(sweetalert)
      router.push('/product');
    }
  };

  return (
    <>
      <div className='container-scroller'>
        <Navbar />
        <div className='container-fluid page-body-wrapper'>
          <div className='theme-setting-wrapper'>
            <div id='settings-trigger'>
              <i className='ti-settings'></i>
            </div>
            <div id='theme-settings' className='settings-panel'>
              <i className='settings-close ti-close'></i>
              <p className='settings-heading'>SIDEBAR SKINS</p>
              <div className='sidebar-bg-options selected' id='sidebar-light-theme'>
                <div className='img-ss rounded-circle bg-light border mr-3'></div>Light
              </div>
              <div className='sidebar-bg-options' id='sidebar-dark-theme'>
                <div className='img-ss rounded-circle bg-dark border mr-3'></div>Dark
              </div>
              <p className='settings-heading mt-2'>HEADER SKINS</p>
              <div className='color-tiles mx-0 px-4'>
                <div className='tiles success'></div>
                <div className='tiles warning'></div>
                <div className='tiles danger'></div>
                <div className='tiles info'></div>
                <div className='tiles dark'></div>
                <div className='tiles default'></div>
              </div>
            </div>
          </div>
          <Sidebar />
          <div className='main-panel'>
            <div className='content-wrapper'>
              <div className='row'>
                <div className='col-md-12 grid-margin'>
                  <div className='row'>
                    <div className='col-12 col-xl-8 mb-4 mb-xl-0'>
                      <h3 className='font-weight-bold'>Add Product Page</h3>
                      <h6 className='font-weight-normal mb-0'>Manage Your Products!</h6>
                    </div>
                    <div className='col-12 col-xl-4'>
                      <div className='justify-content-end d-flex'>
                        <ol className='breadcrumb'>
                          <li className='breadcrumb-item'>
                            <Link href='/'>Dashboard</Link>
                          </li>
                          <li className='breadcrumb-item'>
                            <Link href='/product'>Product</Link>
                          </li>
                          <li className='breadcrumb-item active'>Add</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 grid-margin stretch-card'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Add Your Product</h4>
                      {/* <p className='card-description'>Basic form elements</p> */}
                      <form className='forms-sample'>
                        <div className='form-group'>
                          <label for='exampleInputName1'>Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id='exampleInputName1'
                            placeholder='Name'
                            onChange={(e) => setNama(e.target.value)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label for='exampleTextarea1'>Description</label>
                          <textarea
                            className='form-control'
                            id='exampleTextarea1'
                            rows='4'
                            placeholder='Description Product...'
                            onChange={(e) => setDeskripsi(e.target.value)}
                          ></textarea>
                        </div>
                        <div className='form-group'>
                          <label for='harga'>Price</label>
                          <input
                            type='number'
                            className='form-control'
                            id='harga'
                            placeholder='Price'
                            onChange={(e) => setHarga(e.target.value)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label for='stok'>Stock</label>
                          <input
                            type='number'
                            className='form-control'
                            id='stok'
                            placeholder='Stock'
                            onChange={(e) => setStok(e.target.value)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label for='category'>Category Product</label>
                          <select className='form-control' id='category' onChange={(e) => setKategori(e.target.value)}>
                            <option>Pensil</option>
                            <option>Buku</option>
                          </select>
                        </div>
                        <div className='form-group'>
                          <label>Photo Upload</label>
                          <input type='file' name='img[]' className='file-upload-default' />
                          <div className='input-group col-xs-12'>
                            <input
                              type='text'
                              className='form-control file-upload-info'
                              disabled
                              placeholder='Upload Photo'
                            />
                            <span className='input-group-append'>
                              <button
                                className='file-upload-browse btn btn-primary'
                                type='button'
                                onChange={(e) => setFoto(e.target.value)}
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-2' onClick={handleSubmit}>
                          Submit
                        </button>
                        <button className='btn btn-light'>Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
