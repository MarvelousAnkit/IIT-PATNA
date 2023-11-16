
import General from "./components/General";

const BasicInfo = () => {
  return (
    <div>
      {/* Card widget */}



      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5">
        <General />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>

        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">

        </div>

        {/* Complex Table , Task & Calendar */}


        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">

          <div className="grid grid-cols-1 rounded-[20px]">



          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
