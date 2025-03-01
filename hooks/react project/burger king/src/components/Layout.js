

import Header from "./Header";
import Footer from "./Footer";


function Layout({ Children}) {
  return (
   <>

   <Header />
<div>
    {Children}
</div>
<Footer />
   </>

  );
}

export default Layout;
