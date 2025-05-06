import Header from "../../component/Header"

import PropertyCard from "../../component/Card"

function PageUser (){
    return (
        <>
          <Header />
          <div className="grid grid-flow-col justify-center p-4 gap-2 ">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </>
      )
    }

    export default PageUser