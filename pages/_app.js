import '@/styles/globals.css';
import Head from 'next/head';

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
        <link rel='shortcut icon' href='/images/favicon.png' />
        <script src='/vendors/js/vendor.bundle.base.js'></script>
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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
