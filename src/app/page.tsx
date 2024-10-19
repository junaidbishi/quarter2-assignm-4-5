
import Header from "./commonents/header";
import Header2 from "./commonents/header2";
import Blogg from "./Blogitem/page";

export default function home() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-600 min-h-screen text-white">
<div>
        <Header/>
        <div className="header2">
        <Header2/>
        </div>
        </div>

        <Blogg />
    

    </div>
  );
}
