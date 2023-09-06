import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/vendors/feather/feather.css' />
        <link rel='stylesheet' href='/vendors/ti-icons/css/themify-icons.css' />
        <link rel='stylesheet' href='/vendors/css/vendor.bundle.base.css' />
        <link rel='stylesheet' href='/vendors/datatables.net-bs4/dataTables.bootstrap4.css' />
        <link rel='stylesheet' href='/vendors/ti-icons/css/themify-icons.css' />
        <link rel='stylesheet' type='text/css' href='/js/select.dataTables.min.css' />
        <link rel='stylesheet' href='/css/vertical-layout-light/style.css' />
        <link rel='stylesheet' href='/vendors/select2/select2.min.css' />
        <link rel='stylesheet' href='/vendors/select2-bootstrap-theme/select2-bootstrap.min.css' />
        <link rel='shortcut icon' href='/images/favicon.png' />
        {/* <script src='/vendors/js/vendor.bundle.base.js'></script>
        <script src='/vendors/chart.js/Chart.min.js'></script>
        <script src='/vendors/datatables.net/jquery.dataTables.js'></script>
        <script src='/vendors/datatables.net-bs4/dataTables.bootstrap4.js'></script>
        <script src='/js/dataTables.select.min.js'></script>
        <script src='/js/off-canvas.js'></script>
        <script src='/js/hoverable-collapse.js'></script>
        <script src='/js/template.js'></script>
        <script src='/js/settings.js'></script>
        <script src='/js/todolist.js'></script>
        <script src='/js/dashboard.js'></script>
        <script src='/js/Chart.roundedBarCharts.js'></script>
        <script src='/vendors/typeahead.js/typeahead.bundle.min.js'></script>
        <script src='/vendors/select2/select2.min.js'></script>
        <script src='/js/file-upload.js'></script>
        <script src='/js/typeahead.js'></script>
        <script src='/js/select2.js'></script> */}
      </Head>
      <Component {...pageProps} />
      <Script src='/vendors/js/vendor.bundle.base.js' />
      <Script src='/vendors/chart.js/Chart.min.js' />
      <Script src='/vendors/datatables.net-bs4/dataTables.bootstrap4.js' />
      <Script src='/js/dataTables.select.min.js' />
      <Script src='/js/off-canvas.js' />
      <Script src='/js/hoverable-collapse.js' />
      <Script src='/js/template.js' />
      <Script src='/js/settings.js' />
      <Script src='/js/todolist.js' />
      <Script src='/js/dashboard.js' />
      <Script src='/js/Chart.roundedBarCharts.js' />
      <Script src='/vendors/typeahead.js/typeahead.bundle.min.js' />
      <Script src='/vendors/select2/select2.min.js' />
      <Script src='/js/file-upload.js' />
      <Script src='/js/typeahead.js' />
      <Script src='/js/select2.js' />
    </>
  );
}
