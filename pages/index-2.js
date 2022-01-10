import TrendingArea from "../components/Common/TrendingArea";
import BannerArea from "../components/HomeTwo/BannerArea";
import NavbarTwo from "../components/Layout/NavbarTwo";
import TopSeller from "../components/Common/TopSeller";
import AuctionArea from "../components/HomeTwo/AuctionArea";
import FeaturedArea from "../components/Common/FeaturedArea";
import Testimonial from "../components/Common/Info";
import AuthorArea from "../components/HomeTwo/AuthorArea";
import BlogArea from "../components/Common/BlogArea";
import CollectionsArea from "../components/Common/CollectionsArea";
import Footer from "../components/Layout/Footer";
import Copyright from "../components/Common/Copyright";
import Info from "../components/Common/Info";
import CourseFeatures from "../components/HomeTwo/CourseFeatures";
import ExploreSection from "../components/HomeTwo/ExploreSection";
import ProSection from "../components/HomeTwo/ProSection";
import PopularTopic from "../components/HomeTwo/PopularTopic";
import DiverseSection from "../components/HomeTwo/DiverseSection";
import PopularInstructurs from "../components/HomeTwo/PopularInstructurs";
import TrustedBy from "../components/HomeTwo/TrustedBy";
import InDemandJob from "../components/HomeTwo/InDemandJob";
import SalesSection from "../components/HomeTwo/SalesSection";

const Index = () => {
  return (
    <>
      <NavbarTwo />
      <BannerArea />

      {/* <FeaturedArea title="Featured Assets"/> */}
      <Info />
      <CourseFeatures />
      <ExploreSection />
      <ProSection />
      <PopularTopic />
      <DiverseSection />
      <PopularInstructurs />
      <TrustedBy />
      <InDemandJob />
      <SalesSection />
      {/* <AuthorArea />
      <BlogArea />
      <CollectionsArea /> */}
      <Footer />
      <Copyright />
    </>
  );
};

export default Index;
