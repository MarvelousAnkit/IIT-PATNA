import Card from "components/card";
import InputField from "components/fields/InputField";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          General Information
        </h4>

      </div>
      {/* Cards */}
      <form>
        <div className="grid grid-cols-3 gap-4 px-2">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Fist Name"
            placeholder="enter your first name"
            id="fistName"
            type="text"
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Middle Name"
            placeholder="enter your middle name"
            id="middleName"
            type="text"
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Last Name"
            placeholder="enter your last name"
            id="LastName"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Email"
            placeholder="email@domain.com"
            id="Email"
            type="email"
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Mobile Number"
            placeholder="+91 XXXXXXXXXX"
            id="mobile"
            type="tel"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="D-O-B"
            placeholder="DD-MM-YYYY"
            id="Dob"
            type="date"
          />    

          <InputField
            variant="auth"
            extra="mb-3"
            label="Gender"
            placeholder="speicify your gender"
            id="gender"
            type="text"
          />        

          <InputField
            variant="auth"
            extra="mb-3"
            label="Birth Place"
            placeholder="your birth place"
            id="Bplace"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Nationality"
            placeholder="your country of origin"
            id="Nation"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Blood Group"
            placeholder="Your blood group"
            id="Bgroup"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Religion"
            placeholder="your religion"
            id="Religion"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Category"
            placeholder="GEN/OBC/SC/ST"
            id="category"
            type="select"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Caste"
            placeholder="Your caste"
            id="Caste"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Instruction Medium"
            placeholder="Hindi/English"
            id="Imedium"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="PWD"
            placeholder="Yes/NO"
            id="Pwd"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Area"
            placeholder="area"
            id="Area"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="BPE"
            placeholder="Yes/No"
            id="Bpe"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="RTE"
            placeholder="Yes/Np"
            id="Rte"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Mother Tounge"
            placeholder="your mother language"
            id="Mtounge"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="UID 1"
            placeholder="Unique Identification Number"
            id="Uid1"
            type="number"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="UID 2"
            placeholder="Unique Identification Number"
            id="Uid2"
            type="number"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Emergency Contact Name"
            placeholder="Emergency contact"
            id="Sosname"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Emergency Mobile No."
            placeholder="+91 XXXXXXXXXX"
            id="Sos"
            type="tel"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Present Address"
            placeholder="your present address"
            id="Praddress"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Present City"
            placeholder="enter your present city"
            id="Prcity"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Present State"
            placeholder="enter your present state"
            id="Prstate"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Present Zipcode"
            placeholder="XXXXX"
            id="Przipcode"
            type="number"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Permanent Address"
            placeholder="your permanent address"
            id="Peraddress"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Permanent City"
            placeholder="enter your permanent city"
            id="Percity"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Permanent State"
            placeholder="enter your permanent state"
            id="Perstate"
            type="text"
          />

<InputField
            variant="auth"
            extra="mb-3"
            label="Permanent Zipcode"
            placeholder="XXXXX"
            id="Perzipcode"
            type="number"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Father's Name"
            placeholder="enter your father's name"
            id="FatherName"
            type="text"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Father's Mobile Number"
            placeholder="+91 XXXXXXXXXX"
            id="Fmobile"
            type="tel"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Mother's Name"
            placeholder="enter your mother's name"
            id="MotherName"
            type="text"
          /> 

          <InputField
            variant="auth"
            extra="mb-3"
            label="Mother's Mobile Number"
            placeholder="+91 XXXXXXXXXX"
            id="Mmobile"
            type="tel"
          />          

          <InputField
            variant="auth"
            extra="mb-3"
            label="Guardian's Name"
            placeholder="enter your guardian's name"
            id="MotherName"
            type="text"
          /> 

          <InputField
            variant="auth"
            extra="mb-3"
            label="Guardian's Mobile Number"
            placeholder="+91 XXXXXXXXXX"
            id="Gmobile"
            type="tel"
          />    

             <InputField
            variant="auth"
            extra="mb-3"
            label="Permanent Address"
            placeholder="enter your permanent address"
            id="SPadress"
            type="text"
          />        

          {/* <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Languages</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              English, Spanish, Italian
            </p>
          </div> */}

          {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Nationality</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Indian
            </p>
          </div> */}

          {/* <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Birth Place</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Patna,Bihar
            </p>
          </div> */}

          {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Gender</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Male
            </p>
          </div> */}






              

          {/* <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">D-O-B</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              20 July 1986
            </p>
          </div> */}
        </div>
      </form>
    </Card>
  );
};

export default General;
