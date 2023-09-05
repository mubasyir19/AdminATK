import Footer from '@/components/Molecules/Footer';
import Navbar from '@/components/Molecules/Navbar';
import Sidebar from '@/components/Molecules/Sidebar';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// const Product = dynamic(() => import('@/components/Organism/Product'), { ssr: false });

export default function ProductPage() {
  // return <Product />;
  return (
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
                    <h3 className='font-weight-bold'>Products Page</h3>
                    <h6 className='font-weight-normal mb-0'>Manage Your Products!</h6>
                  </div>
                  <div className='col-12 col-xl-4'>
                    <div className='justify-content-end d-flex'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'>
                          <Link href='/'>Dashboard</Link>
                        </li>
                        <li className='breadcrumb-item active'>Product</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div class='col-md-12 grid-margin stretch-card'>
                <div class='card'>
                  <div class='card-body'>
                    <Link className='btn btn-primary rounded' href='/product/add'>
                      Add Product
                    </Link>
                    {/* <h4 class='card-title'>Striped Table</h4> */}
                    {/* <p class='card-description'>
                    Add class <code>.table-striped</code>
                  </p> */}
                    <div class='table-responsive'>
                      <table class='table table-striped'>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>Rp. 12.000</td>
                            <td>150</td>
                            <td className=''>
                              <Link className='btn btn-sm btn-info rounded' href='/product/edit'>
                                <i className='ti-pencil'></i>
                              </Link>
                              <Link className='btn btn-sm btn-danger rounded ml-2' href='#'>
                                <i className='ti-trash'></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
