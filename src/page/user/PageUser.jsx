import PropertyCard from "../../component/Card";
import Footer from "../../component/Footer";
import PropertyDetail from "../../component/PropertyDetail";

function PageUser() {
  return (
    <>
      <div className="min-h-screen px-6 space-y-6">
        {/* <PropertyDetail /> */}
        <div>
          <h1 className="text-3xl font-bold text-black ml-14">Property</h1>
          <p className="text-sm text-gray-500 ml-24 my-3">rumah tervalidasi</p>
        </div>

        
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-hide">
          <div className="flex gap-4 w-max">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PageUser;
