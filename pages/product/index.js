import Footer from '@/components/Molecules/Footer';
import Navbar from '@/components/Molecules/Navbar';
import Sidebar from '@/components/Molecules/Sidebar';
import dynamic from 'next/dynamic';

const Product = dynamic(() => import('@/components/Organism/Product'), { ssr: false });

export default function ProductPage() {
  return <Product />;
  // return (
  //   <div className='container-scroller'>
  //     <Navbar />
  //     <div className='container-fluid page-body-wrapper'>
  //       <div className='theme-setting-wrapper'>
  //         <div id='settings-trigger'>
  //           <i className='ti-settings'></i>
  //         </div>
  //         <div id='theme-settings' className='settings-panel'>
  //           <i className='settings-close ti-close'></i>
  //           <p className='settings-heading'>SIDEBAR SKINS</p>
  //           <div className='sidebar-bg-options selected' id='sidebar-light-theme'>
  //             <div className='img-ss rounded-circle bg-light border mr-3'></div>Light
  //           </div>
  //           <div className='sidebar-bg-options' id='sidebar-dark-theme'>
  //             <div className='img-ss rounded-circle bg-dark border mr-3'></div>Dark
  //           </div>
  //           <p className='settings-heading mt-2'>HEADER SKINS</p>
  //           <div className='color-tiles mx-0 px-4'>
  //             <div className='tiles success'></div>
  //             <div className='tiles warning'></div>
  //             <div className='tiles danger'></div>
  //             <div className='tiles info'></div>
  //             <div className='tiles dark'></div>
  //             <div className='tiles default'></div>
  //           </div>
  //         </div>
  //       </div>
  //       <Sidebar />
  //       <div className='main-panel'>
  //         <div className='content-wrapper'>
  //           <div className='row'>
  //             <div className='col-md-12 grid-margin'>
  //               <div className='row'>
  //                 <div className='col-12 col-xl-8 mb-4 mb-xl-0'>
  //                   <h3 className='font-weight-bold'>Manage Your Products</h3>
  //                   <h6 className='font-weight-normal mb-0'>
  //                     All systems are running smoothly! You have <span className='text-primary'>3 unread alerts!</span>
  //                   </h6>
  //                 </div>
  //                 <div className='col-12 col-xl-4'>
  //                   <div className='justify-content-end d-flex'>
  //                     <div className='dropdown flex-md-grow-1 flex-xl-grow-0'>
  //                       <button
  //                         className='btn btn-sm btn-light bg-white dropdown-toggle'
  //                         type='button'
  //                         id='dropdownMenuDate2'
  //                         data-toggle='dropdown'
  //                         aria-haspopup='true'
  //                         aria-expanded='true'
  //                       >
  //                         <i className='mdi mdi-calendar'></i> Today (10 Jan 2021)
  //                       </button>
  //                       <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuDate2'>
  //                         <a className='dropdown-item' href='#'>
  //                           January - March
  //                         </a>
  //                         <a className='dropdown-item' href='#'>
  //                           March - June
  //                         </a>
  //                         <a className='dropdown-item' href='#'>
  //                           June - August
  //                         </a>
  //                         <a className='dropdown-item' href='#'>
  //                           August - November
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className='row'>
  //             <div class='col-md-12 grid-margin stretch-card'>
  //               <div class='card'>
  //                 <div class='card-body'>
  //                   <h4 class='card-title'>Striped Table</h4>
  //                   <p class='card-description'>
  //                     Add class <code>.table-striped</code>
  //                   </p>
  //                   <div class='table-responsive'>
  //                     <table class='table table-striped'>
  //                       <thead>
  //                         <tr>
  //                           <th>User</th>
  //                           <th>First name</th>
  //                           <th>Progress</th>
  //                           <th>Amount</th>
  //                           <th>Deadline</th>
  //                         </tr>
  //                       </thead>
  //                       <tbody>
  //                         <tr>
  //                           <td class='py-1'>
  //                             <img src='../../images/faces/face1.jpg' alt='image' />
  //                           </td>
  //                           <td>Herman Beck</td>
  //                           <td>
  //                             {/* <div class='progress'>
  //                               <div
  //                                 class='progress-bar bg-success'
  //                                 role='progressbar'
  //                                 style='width: 25%'
  //                                 aria-valuenow='25'
  //                                 aria-valuemin='0'
  //                                 aria-valuemax='100'
  //                               ></div>
  //                             </div> */}
  //                           </td>
  //                           <td>$ 77.99</td>
  //                           <td>May 15, 2015</td>
  //                         </tr>
  //                       </tbody>
  //                     </table>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <Footer />
  //       </div>
  //     </div>
  //   </div>
  // );
}
