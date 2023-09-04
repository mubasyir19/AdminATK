import Footer from '@/components/Molecules/Footer';
import Navbar from '@/components/Molecules/Navbar';
import Sidebar from '@/components/Molecules/Sidebar';
import React from 'react';

export default function Tambah() {
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
              <h1>Mahdy Mubasyir</h1>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
