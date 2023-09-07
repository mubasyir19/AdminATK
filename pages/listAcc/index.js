import Footer from "@/components/Molecules/Footer";
import Navbar from "@/components/Molecules/Navbar";
import Sidebar from "@/components/Molecules/Sidebar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getAccount } from "../api/hello";
import { useEffect, useState } from "react";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";

export default function ListAccount() {
  const [data, setData] = useState([]);
  // const tableRef = useRef(null);

  useEffect(() => {
    getAccount().then((result) => {
      setData(result);
    });
    // $(tableRef.current).DataTable();
    let table = new DataTable("#myTable", {
      responsive: true,
    });
  }, []);
  // console.log({data:data})
  const DataAccount = () => {
    return data.map((acc, i) => {
      return (
        // <div className='' key={i}>
        //   <p className='settings-heading'>{acc.nama}</p><br></br>
        //   <p className='settings-heading'>{acc.email}</p><br></br>
        //   <p className='settings-heading'>{acc.username}</p><br></br>
        //   <p className='settings-heading'>{acc.password}</p><br></br>
        // </div>
        <table id="myTable">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr key={i}>
              <td>{acc.nama}</td>
              <td>{acc.email}</td>
              <td>{acc.username}</td>
              <td>{acc.password}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };
  // return <Product />;
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="ti-settings"></i>
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div
              className="sidebar-bg-options selected"
              id="sidebar-light-theme"
            >
              <div className="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3"></div>
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="row">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 className="font-weight-bold">List Account Page</h3>
                    <h6 className="font-weight-normal mb-0">
                      Manage Your Account!
                    </h6>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="justify-content-end d-flex">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Account</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <Link
                      className="btn btn-primary rounded"
                      href="/listAcc/add"
                    >
                      Add Account
                    </Link>
                    {/* <h4 className='card-title'>Striped Table</h4> */}
                    {/* <p className='card-description'>
                    Add class <code>.table-striped</code>
                  </p> */}
                    {/* <div className='table-responsive'>
                      <table className='table table-striped'>
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
                    </div> */}
                    <DataAccount />
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
